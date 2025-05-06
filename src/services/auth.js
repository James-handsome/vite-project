import { generatePKCEChallenge,generateRandomString } from '@/utils/pkce-utils';

class AuthService {
  // 初始化登录跳转
  login = async () => {
    const codeVerifier = generateRandomString(64);
    const codeChallenge = await generatePKCEChallenge(codeVerifier);
    
    localStorage.setItem('code_verifier', codeVerifier);
    
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      response_type: 'code',
      scope: 'openid profile email',
      code_challenge: codeChallenge,
      code_challenge_method: 'S256'
    });

    window.location = `${import.meta.env.VITE_AUTH_URL}/protocol/openid-connect/auth?${params}`;
  };

  // 处理回调
  handleCallback = async () => {
    const code = new URLSearchParams(window.location.search).get('code');
    const codeVerifier = localStorage.getItem('code_verifier');
    
    const response = await fetch('/api/auth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, code_verifier: codeVerifier })
    });

    const { access_token, refresh_token } = await response.json();
    this.setSession({ access_token, refresh_token });
  };

  // 管理会话
  setSession = ({ access_token, refresh_token }) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  };
}

export default new AuthService();