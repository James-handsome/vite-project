// Base64URL 编码函数（替换特殊字符）
const base64urlEncode = (buffer) => {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
};

export const generatePKCEChallenge = async (codeVerifier) => {
  // 1. 将 code_verifier 转换为 ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);

  // 2. 使用 SHA-256 进行哈希
  const digest = await crypto.subtle.digest("SHA-256", data);

  // 3. 转换为 Base64URL 编码
  return base64urlEncode(new Uint8Array(digest));
};

// 生成 code_verifier 的辅助函数
export const generateRandomString = (length = 64) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let result = "";

  const cryptoObj = window.crypto || window.msCrypto;
  const values = new Uint8Array(length);
  cryptoObj.getRandomValues(values);

  for (let i = 0; i < length; i++) {
    result += charset[values[i] % charset.length];
  }

  return result;
};
