import { createBrowserRouter } from "react-router-dom";
import User from "@/pages/User/index.jsx";
import ErrorPage from "@/components/ErrorPage/ErrorPage.jsx";
import App from "@/App.jsx";

// 定义路由配置
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // 全局错误页
    children: [
      {
        path: "user",     // 动态路由参数
        element: <User />,
      },
    ],
  },
]);