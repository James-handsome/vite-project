import { Button } from "antd";
import authService from "../services/auth";

function Login() {
  return (
    <div className="login-page">
      <h1>Welcome to the SSO Login Page</h1>
      <Button type="primary" size="large" onClick={authService.login}>
        Single Sign-On Login
      </Button>
    </div>
  );
}
export default Login;
