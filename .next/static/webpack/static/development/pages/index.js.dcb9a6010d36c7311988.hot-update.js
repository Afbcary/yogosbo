webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/understory/workspaces/understory/yogosbo/services/AuthService.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AuthService = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthService, _React$Component);

  var _super = _createSuper(AuthService);

  function AuthService() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);

    _this = _super.call(this);
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

    oidc_client__WEBPACK_IMPORTED_MODULE_5__["Log"].logger = console;
    oidc_client__WEBPACK_IMPORTED_MODULE_5__["Log"].level = oidc_client__WEBPACK_IMPORTED_MODULE_5__["Log"].INFO;
    return _this;
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
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ })

})
//# sourceMappingURL=index.js.dcb9a6010d36c7311988.hot-update.js.map