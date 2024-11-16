export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Action để bắt đầu đăng nhập
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// Action khi đăng nhập thành công
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Action khi đăng nhập thất bại
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Action để đăng xuất
export const logout = () => ({
  type: LOGOUT,
});
