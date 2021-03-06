webpackHotUpdate("static/development/pages/robot.js",{

/***/ "./pages/robot.js":
/*!************************!*\
  !*** ./pages/robot.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Profile */ "./pages/components/Profile.js");
var _jsxFileName = "/Users/gabriel/code/next-ssr/pages/robot.js";



var Robot = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(function (props) {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    robotId: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Robot);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/robot")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=robot.js.c414d4a49d67602c9f78.hot-update.js.map