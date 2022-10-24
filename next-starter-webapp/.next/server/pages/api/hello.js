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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "(api)/./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction handler(req, res) {\n    switch(req.method?.toLocaleLowerCase()){\n        case \"post\":\n            return res.status(200).json({\n                status: true,\n                data: {\n                    name: \"John Doe\"\n                }\n            });\n        default:\n            return res.status(400).json({\n                success: false,\n                error: \"Method not allowed\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQU85RCxTQUFTQSxPQUFPLENBQzdCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxPQUFRRCxHQUFHLENBQUNFLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUU7UUFDckMsS0FBSyxNQUFNO1lBQ1QsT0FBUUYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUQsTUFBTSxFQUFFLElBQUk7Z0JBQUVFLElBQUksRUFBRTtvQkFBQ0MsSUFBSSxFQUFFLFVBQVU7aUJBQUM7YUFBRSxDQUFDO1FBQ3hFO1lBQ0UsT0FBT04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0csT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxvQkFBb0I7YUFBQyxDQUFDO0tBQy9FO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydm90ZS8uL3BhZ2VzL2FwaS9oZWxsby50cz82NTdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIHN3aXRjaCAocmVxLm1ldGhvZD8udG9Mb2NhbGVMb3dlckNhc2UoKSkge1xyXG4gICAgY2FzZSAncG9zdCc6XHJcbiAgICAgIHJldHVybiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IHRydWUsIGRhdGE6IHtuYW1lOiBcIkpvaG4gRG9lXCJ9IH0pXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSlcclxuICB9XHJcbiBcclxufVxyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvTG9jYWxlTG93ZXJDYXNlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwic3VjY2VzcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();