module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _game_NewGame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/NewGame */ \"./client/game/NewGame.js\");\n/* harmony import */ var _game_EditGame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/EditGame */ \"./client/game/EditGame.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass MainRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  // Removes the server-side injected CSS when React component mounts\n  componentDidMount() {\n    const jssStyles = document.getElementById('jss-server-side');\n    if (jssStyles && jssStyles.parentNode) {\n      jssStyles.parentNode.removeChild(jssStyles);\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/', component: _core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/users', component: _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/signup', component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/signin', component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { path: '/user/edit/:userId', component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/user/:userId', component: _user_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { path: '/game/new', component: _game_NewGame__WEBPACK_IMPORTED_MODULE_10__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { path: '/game/edit/:gameId', component: _game_EditGame__WEBPACK_IMPORTED_MODULE_11__[\"default\"] })\n      )\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainRouter);\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nconst PrivateRoute = (_ref) => {\n  let { component: Component } = _ref,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, { render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], { to: {\n        pathname: '/signin',\n        state: { from: props.location }\n      } }) }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrivateRoute);\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Signin extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    }, this.clickSubmit = () => {\n      const user = {\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n\n      Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_10__[\"signin\"])(user).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].authenticate(data, () => {\n            this.setState({ redirectToReferrer: true });\n          });\n        }\n      });\n    }, this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    const { from } = this.props.location.state || {\n      from: {\n        pathname: '/'\n      }\n    };\n    const { redirectToReferrer } = this.state;\n    if (redirectToReferrer) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Redirect\"], { to: from });\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'headline', component: 'h2', className: classes.title },\n          'Sign In'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        ' ',\n        this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.state.error\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n\nSignin.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(Signin));\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! exports provided: signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\nconst signin = user => {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst signout = () => {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n  signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    //optional\n    Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"signout\"])().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _game_api_game_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/api-game.js */ \"./client/game/api-game.js\");\n/* harmony import */ var _game_GameDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/GameDetail */ \"./client/game/GameDetail.js\");\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: {\n    flexGrow: 1,\n    margin: '10px 24px'\n  }\n});\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      games: []\n    }, this.componentDidMount = () => {\n      Object(_game_api_game_js__WEBPACK_IMPORTED_MODULE_4__[\"list\"])().then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          this.setState({ games: data });\n        }\n      });\n    }, this.updateGames = game => {\n      const updatedGames = this.state.games;\n      const index = updatedGames.indexOf(game);\n      updatedGames.splice(index, 1);\n      this.setState({ games: updatedGames });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: classes.root },\n      this.state.games.map((game, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_game_GameDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { key: i, game: game, updateGames: this.updateGames });\n      })\n    );\n  }\n}\n\nHome.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Home));\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n/* harmony import */ var material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-icons/AddBox */ \"material-ui-icons/AddBox\");\n/* harmony import */ var material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) return { color: '#cddc39' };else return { color: '#ffffff' };\n};\nconst Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"withRouter\"])(({ history }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n  material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a,\n  { position: 'static' },\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Typography__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { type: 'title', color: 'inherit' },\n      'Oculus JEM'\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n        { to: '/' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { 'aria-label': 'Home', style: isActive(history, \"/\") },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, null)\n        )\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { style: { 'position': 'absolute', 'right': '10px' } },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'span',\n        { style: { 'float': 'right' } },\n        !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: '/signup' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/signup\") },\n              'Sign up'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: '/signin' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/signin\") },\n              'Sign In'\n            )\n          )\n        ),\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: '/game/new' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/game/new\") },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6___default.a, { color: 'secondary', style: { marginRight: '8px' } }),\n              ' Make Game'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id) },\n              'My Profile'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n            { color: 'inherit', onClick: () => {\n                _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].signout(() => history.push('/'));\n              } },\n            'Sign out'\n          )\n        )\n      )\n    )\n  )\n));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/game/DeleteGame.js":
/*!***********************************!*\
  !*** ./client/game/DeleteGame.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-game.js */ \"./client/game/api-game.js\");\n\n\n\n\n\n\n\nclass DeleteGame extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      open: false\n    }, this.clickButton = () => {\n      this.setState({ open: true });\n    }, this.deleteGame = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated();\n      Object(_api_game_js__WEBPACK_IMPORTED_MODULE_5__[\"remove\"])({\n        gameId: this.props.game._id\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          this.props.removeGame(this.props.game);\n          this.setState({ open: false });\n        }\n      });\n    }, this.handleRequestClose = () => {\n      this.setState({ open: false });\n    }, _temp;\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'span',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n        { variant: 'raised', onClick: this.clickButton, style: { width: '50%', margin: 'auto' } },\n        'Delete'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a,\n        { open: this.state.open, onClose: this.handleRequestClose },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"DialogTitle\"],\n          null,\n          \"Delete \" + this.props.game.name\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"DialogContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"DialogContentText\"],\n            null,\n            'Confirm to delete your game ',\n            this.props.game.name,\n            '.'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"DialogActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n            { onClick: this.handleRequestClose, color: 'primary' },\n            'Cancel'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n            { onClick: this.deleteGame, color: 'secondary', autoFocus: 'autoFocus' },\n            'Confirm'\n          )\n        )\n      )\n    );\n  }\n}\nDeleteGame.propTypes = {\n  game: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  removeGame: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteGame);\n\n//# sourceURL=webpack:///./client/game/DeleteGame.js?");

/***/ }),

/***/ "./client/game/EditGame.js":
/*!*********************************!*\
  !*** ./client/game/EditGame.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-game.js */ \"./client/game/api-game.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GameForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameForm */ \"./client/game/GameForm.js\");\n\n\n\n\n\n\n\nclass EditGame extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.clickSubmit = game => event => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated();\n      Object(_api_game_js__WEBPACK_IMPORTED_MODULE_3__[\"update\"])({\n        gameId: this.match.params.gameId\n      }, {\n        t: jwt.token\n      }, game).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ error: '', redirect: true });\n        }\n      });\n    };\n\n    this.state = {\n      redirect: false,\n      error: ''\n    };\n    this.match = match;\n  }\n\n  render() {\n    if (this.state.redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], { to: '/user/' + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated().user._id });\n    }\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { gameId: this.match.params.gameId, onSubmit: this.clickSubmit, errorMsg: this.state.error });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditGame);\n\n//# sourceURL=webpack:///./client/game/EditGame.js?");

/***/ }),

/***/ "./client/game/GameDetail.js":
/*!***********************************!*\
  !*** ./client/game/GameDetail.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _DeleteGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteGame */ \"./client/game/DeleteGame.js\");\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    width: 600,\n    margin: theme.spacing.unit * 2,\n    display: 'inline-table',\n    textAlign: 'center'\n  },\n  heading: {\n    position: 'relative'\n  },\n  title: {\n    position: 'absolute',\n    padding: '16px 40px 16px 40px',\n    fontSize: '1.15em',\n    backgroundColor: '#6f6f6fcf',\n    color: '#cddd39',\n    left: '-5px',\n    top: '14px'\n  },\n  maker: {\n    position: 'absolute',\n    top: '-44px',\n    right: '0px',\n    fontSize: '0.95em',\n    fontWeight: '300',\n    backgroundColor: '#cddd3985',\n    color: 'white',\n    padding: '12px 16px'\n  },\n  media: {\n    height: 250\n  },\n  action: {\n    padding: 0\n  },\n  button: {\n    width: '100%',\n    height: '42px',\n    fontSize: '1em',\n    letterSpacing: '2px'\n  },\n  editbutton: {\n    width: '50%',\n    margin: 'auto'\n  },\n  clue: {\n    padding: '7px',\n    backgroundColor: '#e8eae3'\n  }\n});\nclass GameDetail extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.heading },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'headline', component: 'h2', className: classes.title },\n          this.props.game.name\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__[\"CardMedia\"], { className: classes.media, image: this.props.game.world, title: this.props.game.name }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.heading },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'subheading', component: 'h4', className: classes.maker },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'em',\n            null,\n            'by '\n          ),\n          this.props.game.maker.name\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_3__[\"CardContent\"],\n        { className: classes.clue },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'body1', component: 'p' },\n          this.props.game.clue\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.action },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          { to: \"/game/play?id=\" + this.props.game._id, target: '_self' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_6___default.a,\n            { variant: 'raised', color: 'secondary', className: classes.button },\n            'Play Game'\n          )\n        )\n      ),\n      _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user._id == this.props.game.maker._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          { to: \"/game/edit/\" + this.props.game._id },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_6___default.a,\n            { variant: 'raised', color: 'primary', className: classes.editbutton },\n            'Edit'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteGame__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { game: this.props.game, removeGame: this.props.updateGames })\n      )\n    );\n  }\n}\nGameDetail.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  game: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  updateGames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(GameDetail));\n\n//# sourceURL=webpack:///./client/game/GameDetail.js?");

/***/ }),

/***/ "./client/game/GameForm.js":
/*!*********************************!*\
  !*** ./client/game/GameForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/ExpansionPanel */ \"material-ui/ExpansionPanel\");\n/* harmony import */ var material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui-icons/ExpandMore */ \"material-ui-icons/ExpandMore\");\n/* harmony import */ var material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(material_ui_Divider__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _VRObjectForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./VRObjectForm */ \"./client/game/VRObjectForm.js\");\n/* harmony import */ var material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! material-ui-icons/AddBox */ \"material-ui-icons/AddBox\");\n/* harmony import */ var material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _api_game_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-game.js */ \"./client/game/api-game.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 1000,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    marginBottom: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle,\n    fontSize: '1.1em'\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 400\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  },\n  spacingTop: {\n    marginTop: '10px'\n  },\n  heading: {\n    width: '130px',\n    padding: '10px'\n  },\n  objectDetails: {\n    overflow: 'scroll'\n  },\n  imgPreview: {\n    width: \"300px\",\n    display: 'block',\n    margin: 'auto'\n  }\n});\n\nclass GameForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      game: { name: '', clue: '', world: '', answerObjects: [], wrongObjects: [] },\n      readError: ''\n    }, this.componentDidMount = () => {\n      if (this.props.gameId) {\n        Object(_api_game_js__WEBPACK_IMPORTED_MODULE_14__[\"read\"])({ gameId: this.props.gameId }).then(data => {\n          if (data.error) {\n            this.setState({ readError: data.error });\n          } else {\n            this.setState({ game: data });\n          }\n        });\n      }\n    }, this.handleChange = name => event => {\n      const newGame = this.state.game;\n      newGame[name] = event.target.value;\n      this.setState({ game: newGame });\n    }, this.addObject = name => event => {\n      const newGame = this.state.game;\n      newGame[name].push({});\n      this.setState({ game: newGame });\n    }, this.handleObjectChange = (index, type, name, val) => {\n      var newGame = this.state.game;\n      newGame[type][index][name] = val;\n      this.setState({ game: newGame });\n    }, this.removeObject = (type, index) => event => {\n      const newGame = this.state.game;\n      newGame[type].splice(index, 1);\n      this.setState({ game: newGame });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'headline', component: 'h2', className: classes.title },\n          this.props.gameId ? 'Edit' : 'New',\n          ' Game'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.state.game.world, className: classes.imgPreview }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'world', label: 'Game World Equirectangular Image (URL)', className: classes.textField, value: this.state.game.world, onChange: this.handleChange('world'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'name', label: 'Name', className: classes.textField, value: this.state.game.name, onChange: this.handleChange('name'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'multiline-flexible', label: 'Clue Text', multiline: true, rows: '2', value: this.state.game.clue, onChange: this.handleChange('clue'), className: classes.textField, margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, { className: classes.spacingTop }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6___default.a,\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6__[\"ExpansionPanelSummary\"],\n            { expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, null) },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n              { className: classes.heading },\n              'VR Objects to collect'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6__[\"ExpansionPanelDetails\"],\n            { className: classes.objectDetails },\n            this.state.game.answerObjects.map((item, i) => {\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { key: i },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VRObjectForm__WEBPACK_IMPORTED_MODULE_12__[\"default\"], { handleUpdate: this.handleObjectChange, index: i, type: 'answerObjects', vrObject: item, removeObject: this.removeObject })\n              );\n            }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n              { color: 'primary', variant: 'raised', onClick: this.addObject('answerObjects') },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13___default.a, { color: 'secondary', style: { marginRight: '8px' } }),\n              ' Add Object'\n            )\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6___default.a,\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6__[\"ExpansionPanelSummary\"],\n            { expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, null) },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n              { className: classes.heading },\n              'Other VR objects'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_ExpansionPanel__WEBPACK_IMPORTED_MODULE_6__[\"ExpansionPanelDetails\"],\n            null,\n            this.state.game.wrongObjects.map((item, i) => {\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { key: i },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VRObjectForm__WEBPACK_IMPORTED_MODULE_12__[\"default\"], { handleUpdate: this.handleObjectChange, index: i, type: 'wrongObjects', vrObject: item, removeObject: this.removeObject })\n              );\n            }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n              { color: 'primary', variant: 'raised', onClick: this.addObject('wrongObjects') },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13___default.a, { color: 'secondary', style: { marginRight: '8px' } }),\n              ' Add Object'\n            )\n          )\n        ),\n        (this.props.errorMsg || this.state.readError) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.props.errorMsg || this.state.readError\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.props.onSubmit(this.state.game), className: classes.submit },\n          'Submit'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"],\n          { to: '/', className: classes.submit },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n            { variant: 'raised' },\n            'Cancel'\n          )\n        )\n      )\n    );\n  }\n}\n\nGameForm.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,\n  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,\n  errorMsg: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,\n  gameId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_9__[\"withStyles\"])(styles)(GameForm));\n\n//# sourceURL=webpack:///./client/game/GameForm.js?");

/***/ }),

/***/ "./client/game/NewGame.js":
/*!********************************!*\
  !*** ./client/game/NewGame.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-game.js */ \"./client/game/api-game.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GameForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameForm */ \"./client/game/GameForm.js\");\n\n\n\n\n\n\n\nclass NewGame extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      redirect: false,\n      error: ''\n    }, this.clickSubmit = game => event => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated();\n      Object(_api_game_js__WEBPACK_IMPORTED_MODULE_3__[\"create\"])({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, game).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ error: '', redirect: true });\n        }\n      });\n    }, _temp;\n  }\n\n  render() {\n    if (this.state.redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], { to: '/user/' + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated().user._id });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { onSubmit: this.clickSubmit, errorMsg: this.state.error });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewGame);\n\n//# sourceURL=webpack:///./client/game/NewGame.js?");

/***/ }),

/***/ "./client/game/VRObjectForm.js":
/*!*************************************!*\
  !*** ./client/game/VRObjectForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    marginRight: '12px',\n    marginLeft: '12px',\n    padding: '10px'\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  numberField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 70\n  }\n});\n\nclass VRObjectForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      objUrl: '',\n      mtlUrl: '',\n      translateX: 0,\n      translateY: 0,\n      translateZ: 0,\n      rotateX: 0,\n      rotateY: 0,\n      rotateZ: 0,\n      scale: 1,\n      color: 'white'\n    }, this.componentDidMount = () => {\n      if (this.props.vrObject && Object.keys(this.props.vrObject).length != 0) {\n        const vrObject = this.props.vrObject;\n        this.setState({\n          objUrl: vrObject.objUrl,\n          mtlUrl: vrObject.mtlUrl,\n          translateX: Number(vrObject.translateX),\n          translateY: Number(vrObject.translateY),\n          translateZ: Number(vrObject.translateZ),\n          rotateX: Number(vrObject.rotateX),\n          rotateY: Number(vrObject.rotateY),\n          rotateZ: Number(vrObject.rotateZ),\n          scale: Number(vrObject.scale),\n          color: vrObject.color\n        });\n      }\n    }, this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n      this.props.handleUpdate(this.props.index, this.props.type, name, event.target.value);\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: 'obj',\n        label: '.obj url',\n        value: this.state.objUrl,\n        onChange: this.handleChange('objUrl'),\n        className: classes.textField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: 'mtl',\n        label: '.mtl url',\n        value: this.state.mtlUrl,\n        onChange: this.handleChange('mtlUrl'),\n        className: classes.textField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.translateX,\n        label: 'TranslateX',\n        onChange: this.handleChange('translateX'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.translateY,\n        label: 'TranslateY',\n        onChange: this.handleChange('translateY'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.translateZ,\n        label: 'TranslateZ',\n        onChange: this.handleChange('translateZ'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.rotateX,\n        label: 'RotateX',\n        onChange: this.handleChange('rotateX'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.rotateY,\n        label: 'RotateY',\n        onChange: this.handleChange('rotateY'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.rotateZ,\n        label: 'RotateZ',\n        onChange: this.handleChange('rotateZ'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.scale,\n        label: 'Scale',\n        onChange: this.handleChange('scale'),\n        type: 'number',\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        value: this.state.color,\n        label: 'Color',\n        onChange: this.handleChange('color'),\n        className: classes.numberField,\n        margin: 'normal'\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n        { onClick: this.props.removeObject(this.props.type, this.props.index) },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { style: { marginRight: '5px' } },\n          'cancel'\n        ),\n        ' Delete'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null)\n    );\n  }\n}\n\nVRObjectForm.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,\n  vrObject: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,\n  handleUpdate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,\n  removeObject: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(styles)(VRObjectForm));\n\n//# sourceURL=webpack:///./client/game/VRObjectForm.js?");

/***/ }),

/***/ "./client/game/api-game.js":
/*!*********************************!*\
  !*** ./client/game/api-game.js ***!
  \*********************************/
/*! exports provided: create, list, listByMaker, read, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listByMaker\", function() { return listByMaker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nconst create = (params, credentials, game) => {\n  return fetch('/api/games/by/' + params.userId, {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(game)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst list = () => {\n  return fetch('/api/games', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst listByMaker = params => {\n  return fetch('/api/games/by/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => {\n    console.log(err);\n  });\n};\n\nconst read = (params, credentials) => {\n  return fetch('/api/game/' + params.gameId, {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst update = (params, credentials, game) => {\n  return fetch('/api/games/' + params.gameId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(game)\n  }).then(response => {\n    return response.json();\n  }).catch(err => {\n    console.log(err);\n  });\n};\n\nconst remove = (params, credentials) => {\n  return fetch('/api/games/' + params.gameId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => {\n    console.log(err);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./client/game/api-game.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nclass DeleteUser extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      redirect: false,\n      open: false\n    }, this.clickButton = () => {\n      this.setState({ open: true });\n    }, this.deleteAccount = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isAuthenticated();\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_7__[\"remove\"])({\n        userId: this.props.userId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].signout(() => console.log('deleted'));\n          this.setState({ redirect: true });\n        }\n      });\n    }, this.handleRequestClose = () => {\n      this.setState({ open: false });\n    }, _temp;\n  }\n\n  render() {\n    const redirect = this.state.redirect;\n    if (redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Redirect\"], { to: '/' });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'span',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a,\n        { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a,\n        { open: this.state.open, onClose: this.handleRequestClose },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogTitle\"],\n          null,\n          \"Delete Account\"\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogContentText\"],\n            null,\n            'Confirm to delete your account.'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { onClick: this.handleRequestClose, color: 'primary' },\n            'Cancel'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n            'Confirm'\n          )\n        )\n      )\n    );\n  }\n}\nDeleteUser.propTypes = {\n  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteUser);\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  title: {\n    margin: theme.spacing.unit * 2,\n    color: theme.palette.protectedTitle\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass EditProfile extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.componentDidMount = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated();\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_9__[\"read\"])({\n        userId: this.match.params.userId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ name: data.name, email: data.email });\n        }\n      });\n    };\n\n    this.clickSubmit = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated();\n      const user = {\n        name: this.state.name || undefined,\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_9__[\"update\"])({\n        userId: this.match.params.userId\n      }, {\n        t: jwt.token\n      }, user).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ 'userId': data._id, 'redirectToProfile': true });\n        }\n      });\n    };\n\n    this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n    };\n\n    this.state = {\n      name: '',\n      email: '',\n      password: '',\n      redirectToProfile: false,\n      error: ''\n    };\n    this.match = match;\n  }\n\n  render() {\n    const { classes } = this.props;\n    if (this.state.redirectToProfile) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Redirect\"], { to: '/user/' + this.state.userId });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'headline', component: 'h2', className: classes.title },\n          'Edit Profile'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        ' ',\n        this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.state.error\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n\nEditProfile.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(EditProfile));\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n/* harmony import */ var material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n/* harmony import */ var material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(material_ui_Divider__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _game_api_game_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../game/api-game.js */ \"./client/game/api-game.js\");\n/* harmony import */ var _game_GameDetail__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../game/GameDetail */ \"./client/game/GameDetail.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 600,\n    margin: 'auto',\n    padding: theme.spacing.unit * 3,\n    marginTop: theme.spacing.unit * 5\n  }),\n  title: {\n    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,\n    color: theme.palette.protectedTitle\n  }\n});\n\nclass Profile extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.init = userId => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_13__[\"default\"].isAuthenticated();\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_14__[\"read\"])({\n        userId: userId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          this.setState({ redirectToSignin: true });\n        } else {\n          this.setState({ user: data });\n          Object(_game_api_game_js__WEBPACK_IMPORTED_MODULE_16__[\"listByMaker\"])({ userId: data._id }).then(data => {\n            if (data.error) {\n              console.log(data.error);\n            } else {\n              this.setState({ games: data });\n            }\n          });\n        }\n      });\n    };\n\n    this.componentWillReceiveProps = props => {\n      this.init(props.match.params.userId);\n    };\n\n    this.componentDidMount = () => {\n      this.init(this.match.params.userId);\n    };\n\n    this.updateGames = game => {\n      const updatedGames = this.state.games;\n      const index = updatedGames.indexOf(game);\n      updatedGames.splice(index, 1);\n      this.setState({ games: updatedGames });\n    };\n\n    this.state = {\n      user: '',\n      redirectToSignin: false,\n      games: []\n    };\n    this.match = match;\n  }\n\n  render() {\n    const { classes } = this.props;\n    const redirectToSignin = this.state.redirectToSignin;\n    if (redirectToSignin) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"Redirect\"], { to: '/signin' });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.root, elevation: 4 },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default.a,\n        { type: 'title', className: classes.title },\n        'Profile'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_List__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { dense: true },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a,\n              null,\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_10___default.a, null)\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: this.state.user.name, secondary: this.state.user.email }),\n          ' ',\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_13__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_13__[\"default\"].isAuthenticated().user._id == this.state.user._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemSecondaryAction\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"Link\"],\n              { to: \"/user/edit/\" + this.state.user._id },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a,\n                { 'aria-label': 'Edit', color: 'primary' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, null)\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_12__[\"default\"], { userId: this.state.user._id })\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n        )\n      ),\n      this.state.user && this.state.games.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default.a,\n        { type: 'subheading', className: classes.subheading },\n        this.state.user.name.split(' ')[0] + \"'s\",\n        ' Games'\n      ),\n      this.state.games.map((game, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_game_GameDetail__WEBPACK_IMPORTED_MODULE_17__[\"default\"], { key: i, game: game, updateGames: this.updateGames });\n      })\n    );\n  }\n}\nProfile.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Profile));\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Signup extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    }, this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n    }, this.clickSubmit = () => {\n      const user = {\n        name: this.state.name || undefined,\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_8__[\"create\"])(user).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ error: '', open: true });\n        }\n      });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n        { className: classes.card },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Sign Up'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n          ' ',\n          this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { component: 'p', color: 'error' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a,\n        { open: this.state.open, disableBackdropClick: true },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogTitle\"],\n          null,\n          'New Account'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogContentText\"],\n            null,\n            'New account successfully created.'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"],\n            { to: '/signin' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n              { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n              'Sign In'\n            )\n          )\n        )\n      )\n    );\n  }\n}\n\nSignup.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(Signup));\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui-icons/ArrowForward */ \"material-ui-icons/ArrowForward\");\n/* harmony import */ var material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n/* harmony import */ var material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing.unit,\n    margin: theme.spacing.unit * 5\n  }),\n  title: {\n    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,\n    color: theme.palette.openTitle\n  }\n});\n\nclass Users extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      users: []\n    }, _temp;\n  }\n\n  componentDidMount() {\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_11__[\"list\"])().then(data => {\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        this.setState({ users: data });\n      }\n    });\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.root, elevation: 4 },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,\n        { type: 'title', className: classes.title },\n        'All Users'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_List__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { dense: true },\n        this.state.users.map((item, i) => {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"],\n            { to: \"/user/\" + item._id, key: i },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n              { button: true },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"],\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a,\n                  null,\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default.a, null)\n                )\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: item.name }),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemSecondaryAction\"],\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a,\n                  null,\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default.a, null)\n                )\n              )\n            )\n          );\n        })\n      )\n    );\n  }\n}\n\nUsers.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Users));\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! exports provided: create, list, read, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nconst create = user => {\n  return fetch('/api/users/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst list = () => {\n  return fetch('/api/users/', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst read = (params, credentials) => {\n  return fetch('/api/users/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst update = (params, credentials, user) => {\n  return fetch('/api/users/' + params.userId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst remove = (params, credentials) => {\n  return fetch('/api/users/' + params.userId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  env: \"development\" || 'development',\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/oculus-jem'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\n\n\n\n\nconst signin = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"email\": req.body.email\n  }, (err, user) => {\n\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token,\n      user: { _id: user._id, name: user.name, email: user.email }\n    });\n  });\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n});\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/game.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/game.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/game.model */ \"./server/models/game.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\n\n\n\nconst create = (req, res, next) => {\n  const game = new _models_game_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  game.maker = req.profile;\n  game.save((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.status(200).json(result);\n  });\n};\n\nconst list = (req, res) => {\n  _models_game_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).populate('maker', '_id name').sort('-created').exec((err, games) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(games);\n  });\n};\n\nconst listByMaker = (req, res) => {\n  _models_game_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({ maker: req.profile._id }, (err, games) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(games);\n  }).populate('maker', '_id name');\n};\n\nconst gameByID = (req, res, next, id) => {\n  _models_game_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('maker', '_id name').exec((err, game) => {\n    if (err || !game) return res.status('400').json({\n      error: \"Game not found\"\n    });\n    req.game = game;\n    next();\n  });\n};\n\nconst read = (req, res) => {\n  return res.json(req.game);\n};\n\nconst update = (req, res) => {\n  let game = req.game;\n  game = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(game, req.body);\n  game.updated = Date.now();\n  game.save(err => {\n    if (err) {\n      return res.status(400).send({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(game);\n  });\n};\n\nconst remove = (req, res) => {\n  let game = req.game;\n  game.remove((err, deletedGame) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(deletedGame);\n  });\n};\n\nconst isMaker = (req, res, next) => {\n  let isMaker = req.game && req.auth && req.game.maker._id == req.auth._id;\n  if (!isMaker) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nconst playGame = (req, res) => {\n  res.sendFile(process.cwd() + '/server/vr/index.html');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create,\n  list,\n  listByMaker,\n  gameByID,\n  read,\n  update,\n  remove,\n  isMaker,\n  playGame\n});\n\n//# sourceURL=webpack:///./server/controllers/game.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\n\n\n\nconst create = (req, res, next) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\n/**\n * Load user and append to req.\n */\nconst userByID = (req, res, next, id) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec((err, user) => {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst list = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((err, users) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name email updated created');\n};\n\nconst update = (req, res, next) => {\n  let user = req.profile;\n  user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(err => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nconst remove = (req, res, next) => {\n  let user = req.profile;\n  user.remove((err, deletedUser) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  compile\n});\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_game_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/game.routes */ \"./server/routes/game.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// modules for server side rendering\n\n\n\n\n\n\n\n\n//end\n\n//comment out before building for production\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n//comment out before building for production\n_devBundle__WEBPACK_IMPORTED_MODULE_18__[\"default\"].compile(app);\n\n// parse body params and attache them to req.body\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({ extended: true }));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\n\n//allow axios to work\n// app.use(function(req, res, next) {\n//   res.header('Access-Control-Allow-Origin', '*');\n//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n//   next();\n//  });\n\n// secure apps by setting various HTTP headers\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\n// enable CORS - Cross Origin Resource Sharing\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\n\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', _routes_game_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n\napp.get('*', (req, res) => {\n  const sheetsRegistry = new react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15__[\"SheetsRegistry\"]();\n  const theme = Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_17__[\"createMuiTheme\"])({\n    palette: {\n      primary: {\n        light: '#484848',\n        main: '#212121',\n        dark: '#000000',\n        contrastText: '#fff'\n      },\n      secondary: {\n        light: '#ffff6e',\n        main: '#cddc39',\n        dark: '#99aa00',\n        contrastText: '#000'\n      },\n      openTitle: '#484848',\n      protectedTitle: '#7da453',\n      type: 'light'\n    }\n  });\n  const generateClassName = Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_17__[\"createGenerateClassName\"])();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_12___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\n    react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14___default.a,\n    { location: req.url, context: context },\n    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\n      react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16___default.a,\n      { registry: sheetsRegistry, generateClassName: generateClassName },\n      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\n        material_ui_styles__WEBPACK_IMPORTED_MODULE_17__[\"MuiThemeProvider\"],\n        { theme: theme, sheetsManager: new Map() },\n        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null)\n      )\n    )\n  ));\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  const css = sheetsRegistry.toString();\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/**\n * Get unique error field name\n */\n\nconst getUniqueErrorMessage = err => {\n    let output;\n    try {\n        let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\n * Get the error message from error object\n */\nconst getErrorMessage = err => {\n    let message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (let errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ getErrorMessage });\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/game.model.js":
/*!*************************************!*\
  !*** ./server/models/game.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst VRObjectSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  objUrl: {\n    type: String, trim: true,\n    required: 'ObJ file is required'\n  },\n  mtlUrl: {\n    type: String, trim: true,\n    required: 'MTL file is required'\n  },\n  translateX: { type: Number, default: 0 },\n  translateY: { type: Number, default: 0 },\n  translateZ: { type: Number, default: 0 },\n  rotateX: { type: Number, default: 0 },\n  rotateY: { type: Number, default: 0 },\n  rotateZ: { type: Number, default: 0 },\n  scale: { type: Number, default: 1 },\n  color: { type: String, default: 'white' }\n});\nconst VRObject = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('VRObject', VRObjectSchema);\n\nconst GameSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  world: {\n    type: String, trim: true,\n    required: 'World image is required'\n  },\n  clue: {\n    type: String,\n    trim: true\n  },\n  answerObjects: [VRObjectSchema],\n  wrongObjects: [VRObjectSchema],\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  maker: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User' }\n});\n\nGameSchema.path('answerObjects').validate(function (v) {\n  if (v.length == 0) {\n    this.invalidate('answerObjects', 'Must add alteast one VR object to collect');\n  }\n}, null);\nGameSchema.path('wrongObjects').validate(function (v) {\n  if (v.length == 0) {\n    this.invalidate('wrongObjects', 'Must add alteast one other VR object');\n  }\n}, null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Game', GameSchema));\n\n//# sourceURL=webpack:///./server/models/game.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/game.routes.js":
/*!**************************************!*\
  !*** ./server/routes/game.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/game.controller */ \"./server/controllers/game.controller.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/games').get(_controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list);\n\nrouter.route('/api/games/by/:userId').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create).get(_controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listByMaker);\n\nrouter.route('/api/game/:gameId').get(_controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].read);\n\nrouter.route('/api/games/:gameId').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isMaker, _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isMaker, _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove);\n\nrouter.route('/game/play').get(_controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playGame);\n\nrouter.param('gameId', _controllers_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gameByID);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/game.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// Connection URL\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`);\n});\n\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({ markup, css }) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <title>Oculus JEM</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <style>\n              a{\n                text-decoration: none\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/jemimalim/gaprojects/oculus-jem/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui-icons/AddBox":
/*!*******************************************!*\
  !*** external "material-ui-icons/AddBox" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/AddBox\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/AddBox%22?");

/***/ }),

/***/ "material-ui-icons/ArrowForward":
/*!*************************************************!*\
  !*** external "material-ui-icons/ArrowForward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ArrowForward%22?");

/***/ }),

/***/ "material-ui-icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui-icons/Delete" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Delete\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Delete%22?");

/***/ }),

/***/ "material-ui-icons/Edit":
/*!*****************************************!*\
  !*** external "material-ui-icons/Edit" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Edit\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Edit%22?");

/***/ }),

/***/ "material-ui-icons/ExpandMore":
/*!***********************************************!*\
  !*** external "material-ui-icons/ExpandMore" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ExpandMore\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ExpandMore%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/Person":
/*!*******************************************!*\
  !*** external "material-ui-icons/Person" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Person\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Person%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Avatar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Card\");\n\n//# sourceURL=webpack:///external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Divider":
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Divider\");\n\n//# sourceURL=webpack:///external_%22material-ui/Divider%22?");

/***/ }),

/***/ "material-ui/ExpansionPanel":
/*!*********************************************!*\
  !*** external "material-ui/ExpansionPanel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/ExpansionPanel\");\n\n//# sourceURL=webpack:///external_%22material-ui/ExpansionPanel%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Icon\");\n\n//# sourceURL=webpack:///external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List\");\n\n//# sourceURL=webpack:///external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Paper\");\n\n//# sourceURL=webpack:///external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/TextField\");\n\n//# sourceURL=webpack:///external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });