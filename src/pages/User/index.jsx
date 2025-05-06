import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { generateRandomString } from '@/utils/pkce-ulils';

const validateCodeVerifier = (verifier) => {
  return /^[A-Za-z0-9-._~]{43,128}$/.test(verifier);
};

const User = () => {
  useEffect(() => {
    
    const apiUrl = import.meta.env.VITE_APP_AUTH_URL;

    console.log(apiUrl);
    
    const codeVerifier = generateRandomString(64);
    console.log(codeVerifier);
 
  }, []);

  return (
    <div className={styles["user-page"]}>
      <div>哈哈哈</div>
    </div>
  );
};

export default User;
