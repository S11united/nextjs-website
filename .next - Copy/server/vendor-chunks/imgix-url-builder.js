"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/imgix-url-builder";
exports.ids = ["vendor-chunks/imgix-url-builder"];
exports.modules = {

/***/ "(ssr)/./node_modules/imgix-url-builder/dist/buildURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/imgix-url-builder/dist/buildURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildURL: () => (/* binding */ buildURL)\n/* harmony export */ });\nconst camelCaseToParamCase = (input) => {\n  return input.replace(/[A-Z]/g, (match) => {\n    return `-${match.toLowerCase()}`;\n  });\n};\nconst buildURL = (url, params) => {\n  const instance = new URL(url);\n  for (const camelCasedParamKey in params) {\n    const paramKey = camelCaseToParamCase(camelCasedParamKey);\n    const paramValue = params[camelCasedParamKey];\n    if (paramValue === void 0) {\n      instance.searchParams.delete(paramKey);\n    } else if (Array.isArray(paramValue)) {\n      instance.searchParams.set(paramKey, paramValue.join(\",\"));\n    } else {\n      instance.searchParams.set(paramKey, `${paramValue}`);\n    }\n  }\n  const s = instance.searchParams.get(\"s\");\n  if (s) {\n    instance.searchParams.delete(\"s\");\n    instance.searchParams.append(\"s\", s);\n  }\n  return instance.toString();\n};\n\n//# sourceMappingURL=buildURL.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW1naXgtdXJsLWJ1aWxkZXIvZGlzdC9idWlsZFVSTC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXN0ZGFuY2UvLi9ub2RlX21vZHVsZXMvaW1naXgtdXJsLWJ1aWxkZXIvZGlzdC9idWlsZFVSTC5qcz80YzY5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbWVsQ2FzZVRvUGFyYW1DYXNlID0gKGlucHV0KSA9PiB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9bQS1aXS9nLCAobWF0Y2gpID0+IHtcbiAgICByZXR1cm4gYC0ke21hdGNoLnRvTG93ZXJDYXNlKCl9YDtcbiAgfSk7XG59O1xuY29uc3QgYnVpbGRVUkwgPSAodXJsLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVVJMKHVybCk7XG4gIGZvciAoY29uc3QgY2FtZWxDYXNlZFBhcmFtS2V5IGluIHBhcmFtcykge1xuICAgIGNvbnN0IHBhcmFtS2V5ID0gY2FtZWxDYXNlVG9QYXJhbUNhc2UoY2FtZWxDYXNlZFBhcmFtS2V5KTtcbiAgICBjb25zdCBwYXJhbVZhbHVlID0gcGFyYW1zW2NhbWVsQ2FzZWRQYXJhbUtleV07XG4gICAgaWYgKHBhcmFtVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgaW5zdGFuY2Uuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbUtleSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhcmFtVmFsdWUpKSB7XG4gICAgICBpbnN0YW5jZS5zZWFyY2hQYXJhbXMuc2V0KHBhcmFtS2V5LCBwYXJhbVZhbHVlLmpvaW4oXCIsXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2Uuc2VhcmNoUGFyYW1zLnNldChwYXJhbUtleSwgYCR7cGFyYW1WYWx1ZX1gKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcyA9IGluc3RhbmNlLnNlYXJjaFBhcmFtcy5nZXQoXCJzXCIpO1xuICBpZiAocykge1xuICAgIGluc3RhbmNlLnNlYXJjaFBhcmFtcy5kZWxldGUoXCJzXCIpO1xuICAgIGluc3RhbmNlLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJzXCIsIHMpO1xuICB9XG4gIHJldHVybiBpbnN0YW5jZS50b1N0cmluZygpO1xufTtcbmV4cG9ydCB7XG4gIGJ1aWxkVVJMXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVpbGRVUkwuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/imgix-url-builder/dist/buildURL.js\n");

/***/ })

};
;