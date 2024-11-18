
import {
  BrowserRouter,

} from "react-router-dom";

import "preline/preline";

import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import AppRoutes from "./AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
