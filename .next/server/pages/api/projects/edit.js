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
exports.id = "pages/api/projects/edit";
exports.ids = ["pages/api/projects/edit"];
exports.modules = {

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/projects/edit.js":
/*!************************************!*\
  !*** ./pages/api/projects/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const postsfolder = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), `/_posts/`);\n    if (true) {\n        if (req.method === \"POST\") {\n            const { date , title , tagline , preview , image  } = req.body.variables;\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(postsfolder + req.body.slug + \".md\", gray_matter__WEBPACK_IMPORTED_MODULE_2___default().stringify(req.body.content, {\n                date,\n                title,\n                tagline,\n                preview,\n                image\n            }), \"utf-8\", (err)=>console.log(err)\n            );\n            res.status(200).json({\n                status: \"DONE\"\n            });\n        } else {\n            res.status(200).json({\n                name: \"This route works in development mode only\"\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMvZWRpdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9CO0FBQ1E7QUFDSztBQUVsQixTQUFTRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU1DLFdBQVcsR0FBR0wsMENBQUksQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELElBQUlELElBQXNDLEVBQUU7UUFDMUMsSUFBSUgsR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3pCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUUsR0FBR1YsR0FBRyxDQUFDVyxJQUFJLENBQUNDLFNBQVM7WUFDbkVoQixtREFBWSxDQUNWTSxXQUFXLEdBQUdGLEdBQUcsQ0FBQ1csSUFBSSxDQUFDRyxJQUFJLEdBQUcsS0FBSyxFQUNuQ2hCLDREQUFnQixDQUFDRSxHQUFHLENBQUNXLElBQUksQ0FBQ0ssT0FBTyxFQUFFO2dCQUNqQ1YsSUFBSTtnQkFDSkMsS0FBSztnQkFDTEMsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsS0FBSzthQUNOLENBQUMsRUFDRixPQUFPLEVBQ1AsQ0FBQ08sR0FBRyxHQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1lBQUEsQ0FDMUIsQ0FBQztZQUNGaEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVELE1BQU0sRUFBRSxNQUFNO2FBQUUsQ0FBQyxDQUFDO1NBQzFDLE1BQU07WUFDTG5CLEdBQUcsQ0FDQW1CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO2dCQUFFQyxJQUFJLEVBQUUsMkNBQTJDO2FBQUUsQ0FBQyxDQUFDO1NBQ2hFO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXBvcnRmb2xpby10ZW1wbGF0ZS8uL3BhZ2VzL2FwaS9wcm9qZWN0cy9lZGl0LmpzP2M4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHBvc3RzZm9sZGVyID0gam9pbihwcm9jZXNzLmN3ZCgpLCBgL19wb3N0cy9gKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAgIGNvbnN0IHsgZGF0ZSwgdGl0bGUsIHRhZ2xpbmUsIHByZXZpZXcsIGltYWdlIH0gPSByZXEuYm9keS52YXJpYWJsZXM7XG4gICAgICBmcy53cml0ZUZpbGUoXG4gICAgICAgIHBvc3RzZm9sZGVyICsgcmVxLmJvZHkuc2x1ZyArIFwiLm1kXCIsXG4gICAgICAgIG1hdHRlci5zdHJpbmdpZnkocmVxLmJvZHkuY29udGVudCwge1xuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgdGFnbGluZSxcbiAgICAgICAgICBwcmV2aWV3LFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICB9KSxcbiAgICAgICAgXCJ1dGYtOFwiLFxuICAgICAgICAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICApO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiRE9ORVwiIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNcbiAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgIC5qc29uKHsgbmFtZTogXCJUaGlzIHJvdXRlIHdvcmtzIGluIGRldmVsb3BtZW50IG1vZGUgb25seVwiIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwiam9pbiIsIm1hdHRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb3N0c2ZvbGRlciIsInByb2Nlc3MiLCJjd2QiLCJtZXRob2QiLCJkYXRlIiwidGl0bGUiLCJ0YWdsaW5lIiwicHJldmlldyIsImltYWdlIiwiYm9keSIsInZhcmlhYmxlcyIsIndyaXRlRmlsZSIsInNsdWciLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects/edit.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects/edit.js"));
module.exports = __webpack_exports__;

})();