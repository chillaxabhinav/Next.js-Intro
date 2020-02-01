module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\abhin\\Desktop\\Courses, Projects and explore\\React Next.js\\components\\user.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const user = props => {
  return __jsx("div", {
    className: "jsx-1436574957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1436574957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Name : ", props.name), __jsx("p", {
    className: "jsx-1436574957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Age : ", props.age), __jsx("p", {
    className: "jsx-1436574957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "I am in user component"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1436574957",
    __self: undefined
  }, "div.jsx-1436574957{border :1px solid #eee;box-shadow :0 2px 3px #ccc;padding :20px;text-align :center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWJoaW5cXERlc2t0b3BcXENvdXJzZXMsIFByb2plY3RzIGFuZCBleHBsb3JlXFxSZWFjdCBOZXh0LmpzXFxjb21wb25lbnRzXFx1c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF3QixBQUc0Qyx1QkFDSSwyQkFDYixjQUNLLG1CQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGFiaGluXFxEZXNrdG9wXFxDb3Vyc2VzLCBQcm9qZWN0cyBhbmQgZXhwbG9yZVxcUmVhY3QgTmV4dC5qc1xcY29tcG9uZW50c1xcdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPk5hbWUgOiB7cHJvcHMubmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8cD5BZ2UgOiB7cHJvcHMuYWdlfTwvcD5cclxuICAgICAgICAgICAgPHA+SSBhbSBpbiB1c2VyIGNvbXBvbmVudDwvcD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93IDogMCAycHggM3B4ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\abhin\\\\Desktop\\\\Courses, Projects and explore\\\\React Next.js\\\\components\\\\user.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user */ "./components/user.js");
var _jsxFileName = "C:\\Users\\abhin\\Desktop\\Courses, Projects and explore\\React Next.js\\pages\\auth\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AuthindexPage = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Auth index page : ", props.appName), __jsx(_components_user__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Abhinav",
    age: "21",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

AuthindexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        appName: 'Auth App'
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (AuthindexPage);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/auth/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\abhin\Desktop\Courses, Projects and explore\React Next.js\pages\auth\index.js */"./pages/auth/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=auth.js.map