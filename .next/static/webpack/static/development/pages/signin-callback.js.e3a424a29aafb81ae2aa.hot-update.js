webpackHotUpdate("static/development/pages/signin-callback.js",{

/***/ "./services/AuthService.js":
/*!*********************************!*\
  !*** ./services/AuthService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/understory/workspaces/understory/yogosbo/services/AuthService.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);

    oidc_client__WEBPACK_IMPORTED_MODULE_2__["Log"].logger = console;
    oidc_client__WEBPACK_IMPORTED_MODULE_2__["Log"].level = oidc_client__WEBPACK_IMPORTED_MODULE_2__["Log"].INFO;
    var settings = {
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
        jwks_uri: ''
      }
    }; // this.userManager = new UserManager(settings);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthService, [{
    key: "signinRedirectCallback",
    value: function signinRedirectCallback() {
      this.userManager.signinRedirectCallback().then(function () {
        console.log('did callback');
      });
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return this.userManager.getUser();
    }
  }, {
    key: "login",
    value: function login() {
      return this.userManager.signinRedirect();
    }
  }, {
    key: "renewToken",
    value: function renewToken() {
      return this.userManager.signinSilent();
    }
  }, {
    key: "logout",
    value: function logout() {
      return this.userManager.signoutRedirect();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 12
        }
      });
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ })

})
//# sourceMappingURL=signin-callback.js.e3a424a29aafb81ae2aa.hot-update.js.map