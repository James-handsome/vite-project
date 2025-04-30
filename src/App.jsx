import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app-container">
        <h1>Vite + React + Tailwind CSS</h1>
        {/* 子路由内容渲染区 */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
