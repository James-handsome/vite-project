import React, { useEffect } from "react";
import styles from "./index.module.scss";


const User = () => {
  useEffect(() => { 
    // 这里可以放一些初始化的代码，比如获取用户信息等
    console.log("User component mounted");
  }, []);

  return (
    <div className={styles["user-page"]}>
      <div>哈哈哈</div>
    </div>
  );
};

export default User;
