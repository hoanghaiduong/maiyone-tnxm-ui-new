import React, { useEffect, useCallback, useRef } from "react";
import { axiosInstance } from "../Common/axios-config";

const CkEditorComponent = React.memo(() => {
  const editorInstanceRef = useRef(null); // Dùng ref để giữ instance của CKEditor

  const initializeEditor = useCallback(() => {
    if (!CKEDITOR) {
      console.error("CKEditor is not loaded.");
      return;
    }
    
    const editorContainer = document.getElementById("editor");
    if (!editorContainer) {
      console.error("Editor container not found.");
      return;
    }

    CKEDITOR.ClassicEditor.create(editorContainer, {
      toolbar: {
        items: [
          "exportPDF",
          "exportWord",
          "|",
          "findAndReplace",
          "selectAll",
          "|",
          "heading",
          "|",
          "bold",
          "italic",
          "strikethrough",
          "underline",
          "code",
          "subscript",
          "superscript",
          "removeFormat",
          "|",
          "bulletedList",
          "numberedList",
          "todoList",
          "|",
          "outdent",
          "indent",
          "|",
          "undo",
          "redo",
          "-",
          "fontSize",
          "fontFamily",
          "fontColor",
          "fontBackgroundColor",
          "highlight",
          "|",
          "alignment",
          "|",
          "link",
          "insertImage",
          "blockQuote",
          "insertTable",
          "mediaEmbed",
          "codeBlock",
          "htmlEmbed",
          "|",
          "specialCharacters",
          "horizontalLine",
          "pageBreak",
          "|",
          "textPartLanguage",
          "|",
          "sourceEditing",
        ],
        shouldNotGroupWhenFull: true,
      },
      list: {
        properties: {
          styles: true,
          startIndex: true,
          reversed: true,
        },
      },
      heading: {
        options: [
          { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
          { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
          { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
          { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
          { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
          { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_heading5" },
          { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_heading6" },
        ],
      },
      placeholder: "Welcome to CKEditor 5!",
      fontFamily: {
        options: [
          "default",
          "Arial, Helvetica, sans-serif",
          "Courier New, Courier, monospace",
          "Georgia, serif",
          "Lucida Sans Unicode, Lucida Grande, sans-serif",
          "Tahoma, Geneva, sans-serif",
          "Times New Roman, Times, serif",
          "Trebuchet MS, Helvetica, sans-serif",
          "Verdana, Geneva, sans-serif",
        ],
        supportAllValues: true,
      },
      fontSize: {
        options: [10, 12, 14, "default", 18, 20, 22],
        supportAllValues: true,
      },
      htmlSupport: {
        allow: [
          {
            name: /.*/,
            attributes: true,
            classes: true,
            styles: true,
          },
        ],
      },
      htmlEmbed: {
        showPreviews: true,
      },
      link: {
        decorators: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          toggleDownloadable: {
            mode: "manual",
            label: "Downloadable",
            attributes: {
              download: "file",
            },
          },
        },
      },
      mention: {
        feeds: [
          {
            marker: "@",
            feed: [
              "@apple",
              "@bears",
              "@brownie",
              "@cake",
              "@candy",
              "@canes",
              "@chocolate",
              "@cookie",
              "@cotton",
              "@cream",
              "@cupcake",
              "@danish",
              "@donut",
              "@dragée",
              "@fruitcake",
              "@gingerbread",
              "@gummi",
              "@ice",
              "@jelly-o",
              "@liquorice",
              "@macaroon",
              "@marzipan",
              "@oat",
              "@pie",
              "@plum",
              "@pudding",
              "@sesame",
              "@snaps",
              "@soufflé",
              "@sugar",
              "@sweet",
              "@topping",
              "@wafer",
            ],
            minimumCharacters: 1,
          },
        ],
      },
      removePlugins: [
        "CKBox",
        "CKFinder",
        "EasyImage",
        "RealTimeCollaborativeComments",
        "RealTimeCollaborativeTrackChanges",
        "RealTimeCollaborativeRevisionHistory",
        "PresenceList",
        "Comments",
        "TrackChanges",
        "TrackChangesData",
        "RevisionHistory",
        "Pagination",
        "WProofreader",
        "MathType",
      ],
    })
      .then((editor) => {
        editorInstanceRef.current = editor;
        console.log("CKEditor instance created");
      })
      .catch((error) => {
        console.error("CKEditor initialization error:", error);
      });
  }, []);

  useEffect(() => {
    initializeEditor();

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, [initializeEditor]);
  const getEditorData = () => {
    if (editorInstanceRef.current) {
      const data = editorInstanceRef.current.getData(); // Lấy nội dung từ CKEditor
      console.log("Editor data:", data);
      return data;
    }
    console.warn("CKEditor instance not found");
    return "";
  };
  const base64ToFile = (base64, fileName) => {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  const processEditorData = async () => {
    if (editorInstanceRef.current) {
      const editorContent = editorInstanceRef.current.getData(); // Lấy nội dung CKEditor
      console.log("Editor content:", editorContent);

      const parser = new DOMParser();
      const doc = parser.parseFromString(editorContent, "text/html");
      const images = doc.querySelectorAll("img"); // Tìm tất cả thẻ img

      const formData = new FormData();

      images.forEach((img, index) => {
        const src = img.getAttribute("src");
        if (src && src.startsWith("data:image/")) {
          const file = base64ToFile(src, `image-${index + 1}.png`);
          formData.append("images", file); // Thêm file vào FormData
        }
      });

      // Kiểm tra FormData
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      // Gửi FormData lên server
      try {
        const response = await axiosInstance.post("http://localhost:7774/api/uploads", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log("Upload result:", result);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      console.warn("CKEditor instance not found");
    }
  };
  return (
    <div id="container" className="" style={{ width: "100%", margin: "20px auto" }}>
      <style>
        {`
          .ck-editor__editable[role="textbox"] {
            min-height: 600px;
        
          }

          .ck-content .image {
            max-width: 100%;
            margin: 20px auto;
          }
        `}
      </style>
      <div id="editor"></div>
      <button onClick={processEditorData} style={{ marginTop: "20px" }}>
        Get Editor Data
      </button>
    </div>
  );
});

export default CkEditorComponent;
