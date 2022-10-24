"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Polls.tsx":
/*!******************************!*\
  !*** ./components/Polls.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Polls)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Polls() {\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/polls\", {\n            method: \"post\",\n            body: JSON.stringify({\n                id: \"3\",\n                title\n            })\n        });\n        const result = await response.json();\n        console.log(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            value: title,\n            onChange: (event)=>setTitle(event.target.value),\n            type: \"text\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\trove\\\\OneDrive - \\xd8stfold University College\\\\Dokumenter\\\\Skole\\\\webapplikasjoner\\\\webapp_demo_22\\\\webapp_demo_22\\\\webapp_demo_22\\\\api_demo\\\\next-starter-webapp\\\\components\\\\Polls.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\trove\\\\OneDrive - \\xd8stfold University College\\\\Dokumenter\\\\Skole\\\\webapplikasjoner\\\\webapp_demo_22\\\\webapp_demo_22\\\\webapp_demo_22\\\\api_demo\\\\next-starter-webapp\\\\components\\\\Polls.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvbGxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWdDO0FBRWpCLFNBQVNDLEtBQUssR0FBRztJQUM5QixNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUV0QyxNQUFNSSxZQUFZLEdBQUcsT0FBT0MsS0FBSyxHQUFLO1FBQ3BDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtRQUN0QixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUN6Q0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbkJDLEVBQUUsRUFBRSxHQUFHO2dCQUNQWCxLQUFLO2FBQ04sQ0FBQztTQUNILENBQUM7UUFDRixNQUFNWSxNQUFNLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFJLEVBQUU7UUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELHFCQUNFLDhEQUFDSSxNQUFJO1FBQUNDLFFBQVEsRUFBRWYsWUFBWTtrQkFDMUIsNEVBQUNnQixPQUFLO1lBQUNDLEtBQUssRUFBRW5CLEtBQUs7WUFBRW9CLFFBQVEsRUFBRSxDQUFDakIsS0FBSyxHQUFLRixRQUFRLENBQUNFLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO1lBQUVHLElBQUksRUFBQyxNQUFNOzs7OztnQkFBRzs7Ozs7WUFDakYsQ0FDUjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnZvdGUvLi9jb21wb25lbnRzL1BvbGxzLnRzeD81ZWIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2xscygpIHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9sbHMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGlucHV0IHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBvbGxzIiwidGl0bGUiLCJzZXRUaXRsZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Polls.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Polls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Polls */ \"./components/Polls.tsx\");\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Polls__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\trove\\\\OneDrive - \\xd8stfold University College\\\\Dokumenter\\\\Skole\\\\webapplikasjoner\\\\webapp_demo_22\\\\webapp_demo_22\\\\webapp_demo_22\\\\api_demo\\\\next-starter-webapp\\\\pages\\\\index.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ3VDO0FBQ3ZDLE1BQU1DLElBQUksR0FBYSxJQUFNO0lBQzNCLHFCQUFPLDhEQUFDRCx5REFBSzs7OztpQkFBRyxDQUFDO0FBQ25CLENBQUM7QUFFRCxpRUFBZUMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ2b3RlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBQb2xscyBmcm9tICcuLi9jb21wb25lbnRzL1BvbGxzJ1xyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gPFBvbGxzIC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlBvbGxzIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();