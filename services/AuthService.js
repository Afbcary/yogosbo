import { Log, UserManager } from "oidc-client";
import React from "react";

class AuthService {

  userManager;

  constructor() {
    Log.logger = console;
    Log.level = Log.INFO;
    const settings = {
      authority: 'https://localhost:8081',
      client_id: 'bb32d11e-de55-4fab-a1d7-fdf241fbdf3c',
      redirect_uri: 'http://localhost:3000/signin-callback',
      silent_redirect_uri: 'http://localhost:3000',
      post_logout_redirect_uri: 'https://localhost:8081/logout',
      response_type: 'code',
      metadata: {
        issuer: 'https://localhost:8081',
        authorization_endpoint: 'https://localhost:8081/oauth/authorize',
        token_endpoint: 'https://localhost:8081/oauth/token',
        userinfo_endpoint: 'https://localhost:8081/users/me',
        end_session_endpoint: 'https://localhost:8081/logout',
        jwks_uri: '',
      }
    };
    userManager = new UserManager(settings);

  }


  signinRedirectCallback() {
    this.userManager.signinRedirectCallback().then(
      function () {
        console.log('did callback');
      }
    )
  }

  getUser() {
    return this.userManager.getUser();
  }

  login() {
    return this.userManager.signinRedirect();
  }

  renewToken() {
    return this.userManager.signinSilent();
  }

  logout() {
    return this.userManager.signoutRedirect();
  }

  render() {
    return <div></div>;
  }
}

export default AuthService;