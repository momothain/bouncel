"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Ball */ \"(app-pages-browser)/./src/components/Ball.tsx\");\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Grid */ \"(app-pages-browser)/./src/components/Grid.tsx\");\n/* harmony import */ var _components_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/providers/ThemeProvider */ \"(app-pages-browser)/./src/components/providers/ThemeProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// import Obj from '@/components/Obj';\n\n\nfunction Home() {\n    _s();\n    const DEBUG = true;\n    const rows = 3;\n    const cols = 5;\n    const initGrid = [\n        {\n            id: \"1\",\n            position: [\n                1,\n                2\n            ],\n            type: _components_Grid__WEBPACK_IMPORTED_MODULE_2__.ObjType.BALL\n        }\n    ];\n    const { theme, toggleTheme } = (0,_components_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"light flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center\\n             mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"bouncel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center space-x-4 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"size: \",\n                                    rows,\n                                    \"x\",\n                                    cols\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"system: ..\"\n                            }, void 0, false, {\n                                fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleTheme,\n                                className: \"btn btn-sepia mb-4 padding-2\",\n                                children: \"Toggle Theme\"\n                            }, void 0, false, {\n                                fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    rows: rows,\n                    cols: cols,\n                    initGrid: initGrid\n                }, void 0, false, {\n                    fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            DEBUG ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: initGrid[0].id,\n                    position: initGrid[0].position\n                }, void 0, false, {\n                    fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 20\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/momothain/cs234/bouncel/src/app/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"Q4eAjrIZ0CuRuhycs6byifK2KBk=\", false, function() {\n    return [\n        _components_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useTheme\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNxQztBQUNBO0FBQ3JDLHNDQUFzQztBQUMwQjtBQUNwQjtBQUk3QixTQUFTSTs7SUFDcEIsTUFBTUMsUUFBUTtJQUNkLE1BQU1DLE9BQU87SUFDYixNQUFNQyxPQUFPO0lBQ2IsTUFBTUMsV0FBdUI7UUFBQztZQUMxQkMsSUFBSTtZQUNKQyxVQUFVO2dCQUFDO2dCQUFHO2FBQUU7WUFDaEJDLE1BQU1SLHFEQUFPQSxDQUFDUyxJQUFJO1FBQ3RCO0tBQUU7SUFFRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdaLDZFQUFRQTtJQUV2QyxxQkFDSSw4REFBQ2E7UUFBSUMsV0FBWTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFZOztrQ0FFYiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0Y7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRTs7b0NBQUc7b0NBQU9aO29DQUFLO29DQUFFQzs7Ozs7OzswQ0FDbEIsOERBQUNXOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFPQyxTQUFTTjtnQ0FBYUUsV0FBVTswQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPL0UsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDZix3REFBSUE7b0JBQUNLLE1BQU1BO29CQUFNQyxNQUFNQTtvQkFBTUMsVUFBVUE7Ozs7Ozs7Ozs7O1lBSTNDSCxzQkFDTSw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNoQix3REFBSUE7b0JBQUNTLElBQUlELFFBQVEsQ0FBQyxFQUFFLENBQUNDLEVBQUU7b0JBQUVDLFVBQVVGLFFBQVEsQ0FBQyxFQUFFLENBQUNFLFFBQVE7Ozs7Ozs7Ozs7dUJBRzFEOzs7Ozs7O0FBSWxCO0dBekN3Qk47O1FBVVdGLHlFQUFRQTs7O0tBVm5CRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQmFsbCBmcm9tICdAL2NvbXBvbmVudHMvQmFsbCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAL2NvbXBvbmVudHMvR3JpZCc7XG4vLyBpbXBvcnQgT2JqIGZyb20gJ0AvY29tcG9uZW50cy9PYmonO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAL2NvbXBvbmVudHMvcHJvdmlkZXJzL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsgT2JqVHlwZSB9IGZyb20gJ0AvY29tcG9uZW50cy9HcmlkJztcbmltcG9ydCB7IEVsdFN0YXRlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9HcmlkXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBERUJVRyA9IHRydWVcbiAgICBjb25zdCByb3dzID0gMztcbiAgICBjb25zdCBjb2xzID0gNTtcbiAgICBjb25zdCBpbml0R3JpZDogRWx0U3RhdGVbXSA9IFt7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHBvc2l0aW9uOiBbMSwgMl0sXG4gICAgICAgIHR5cGU6IE9ialR5cGUuQkFMTCxcbiAgICB9XTtcblxuICAgIGNvbnN0IHsgdGhlbWUsIHRvZ2dsZVRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsaWdodCBmbGV4IGZsZXgtY29sYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXG4gICAgICAgICAgICAgbXgtYXV0b2B9PlxuICAgICAgICAgICAgICAgIDxoMT5ib3VuY2VsPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5zaXplOiB7cm93c314e2NvbHN9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnN5c3RlbTogLi48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlcGlhIG1iLTQgcGFkZGluZy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2dnbGUgVGhlbWVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8R3JpZCByb3dzPXtyb3dzfSBjb2xzPXtjb2xzfSBpbml0R3JpZD17aW5pdEdyaWR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgIHtERUJVR1xuICAgICAgICAgICAgICAgID8gKDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhbGwgaWQ9e2luaXRHcmlkWzBdLmlkfSBwb3NpdGlvbj17aW5pdEdyaWRbMF0ucG9zaXRpb259ID48L0JhbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkJhbGwiLCJHcmlkIiwidXNlVGhlbWUiLCJPYmpUeXBlIiwiSG9tZSIsIkRFQlVHIiwicm93cyIsImNvbHMiLCJpbml0R3JpZCIsImlkIiwicG9zaXRpb24iLCJ0eXBlIiwiQkFMTCIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Grid.tsx":
/*!*********************************!*\
  !*** ./src/components/Grid.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ObjType: function() { return /* binding */ ObjType; },\n/* harmony export */   \"default\": function() { return /* binding */ Grid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"(app-pages-browser)/./src/components/Cell.tsx\");\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ball */ \"(app-pages-browser)/./src/components/Ball.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar ObjType;\n(function(ObjType) {\n    ObjType[ObjType[\"EMPTY\"] = 0] = \"EMPTY\";\n    ObjType[ObjType[\"BALL\"] = 1] = \"BALL\";\n})(ObjType || (ObjType = {}));\nfunction initializeGrid(rows, columns) {\n    // Create a 2D array filled with null (no element in the cell)\n    return Array.from({\n        length: rows\n    }, ()=>Array(columns).fill(null));\n}\nfunction updateGrid(grid, elementsArray) {\n    // Clear the grid\n    for (let row of grid){\n        row.fill(null);\n    }\n    // Populate the grid with new positions of elements\n    for (const element of elementsArray){\n        if (grid[element.row] && grid[element.row][element.column] === null) {\n            grid[element.row][element.column] = element;\n        }\n    }\n}\nfunction Grid(param) {\n    let { rows, cols, initGrid } = param;\n    _s();\n    const debug = true;\n    const [objStates, setObjStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initGrid);\n    const [cellElts, setCellElts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const cellSize = \"calc(100vw / \".concat(Math.max(rows, cols), \")\");\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Create a grid array for rendering\n    // dependencies\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCellElts(objStates.map((obj)=>{\n            let cellElt;\n            switch(obj.type){\n                case 0:\n                    cellElt = null;\n                    break;\n                case 1:\n                    cellElt = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Ball__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 35\n                    }, this);\n                    break;\n                default:\n                    throw new Error(\"you invented a new physics element. nice.\");\n            }\n            return [\n                cellElt,\n                obj.position\n            ];\n        }));\n        // \n        setGrid(Array.from({\n            length: rows * cols\n        }, (index)=>{\n            const pos = [\n                Math.floor(index / cols),\n                index % cols\n            ];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pos: pos,\n                size: cellSize\n            }, \"{pos[0]},{pos[1]}\", false, {\n                fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n                lineNumber: 77,\n                columnNumber: 20\n            }, this);\n        }));\n    }, [\n        objStates,\n        cellSize,\n        cols,\n        rows\n    ]);\n    function s() {}\n    // Adjust cell size based on grid dimensions\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(\".concat(cols, \", 1fr)\"),\n                gridTemplateRows: \"repeat(\".concat(rows, \", 1fr)\"),\n                gap: \"1px\",\n                width: \"100vw\",\n                height: \"calc(100vw * \".concat(rows, \" / \").concat(cols, \")\"),\n                margin: \"auto\"\n            },\n            children: cellElts.flatMap((row, rowIndex)=>row.map((cellContent, colIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        pos: [\n                            rowIndex,\n                            colIndex\n                        ],\n                        size: cellSize,\n                        children: cellContent\n                    }, \"\".concat(rowIndex, \"-\").concat(colIndex), false, {\n                        fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 29\n                    }, this)))\n        }, void 0, false, {\n            fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_s(Grid, \"Sbg6zgibHs1pIhnRhpgfXHLc2Mg=\");\n_c = Grid;\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0dyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNwQztBQUNBOztVQUlkSzs7O0dBQUFBLFlBQUFBO0FBa0JaLFNBQVNDLGVBQWVDLElBQUksRUFBRUMsT0FBTztJQUNqQyw4REFBOEQ7SUFDOUQsT0FBT0MsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVFKO0lBQUssR0FBRyxJQUFNRSxNQUFNRCxTQUFTSSxJQUFJLENBQUM7QUFDbEU7QUFFQSxTQUFTQyxXQUFXQyxJQUFJLEVBQUVDLGFBQWE7SUFDbkMsaUJBQWlCO0lBQ2pCLEtBQUssSUFBSUMsT0FBT0YsS0FBTTtRQUNsQkUsSUFBSUosSUFBSSxDQUFDO0lBQ2I7SUFFQSxtREFBbUQ7SUFDbkQsS0FBSyxNQUFNSyxXQUFXRixjQUFlO1FBQ2pDLElBQUlELElBQUksQ0FBQ0csUUFBUUQsR0FBRyxDQUFDLElBQUlGLElBQUksQ0FBQ0csUUFBUUQsR0FBRyxDQUFDLENBQUNDLFFBQVFDLE1BQU0sQ0FBQyxLQUFLLE1BQU07WUFDakVKLElBQUksQ0FBQ0csUUFBUUQsR0FBRyxDQUFDLENBQUNDLFFBQVFDLE1BQU0sQ0FBQyxHQUFHRDtRQUN4QztJQUNKO0FBQ0o7QUFHZSxTQUFTRSxLQUFLLEtBQW1DO1FBQW5DLEVBQUVaLElBQUksRUFBRWEsSUFBSSxFQUFFQyxRQUFRLEVBQWEsR0FBbkM7O0lBQ3pCLE1BQU1DLFFBQVE7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFhb0I7SUFDdkQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBMEIsRUFBRTtJQUNwRSxNQUFNMEIsV0FBVyxnQkFBcUMsT0FBckJDLEtBQUtDLEdBQUcsQ0FBQ3RCLE1BQU1hLE9BQU07SUFDdEQsTUFBTSxDQUFDTixNQUFNZ0IsUUFBUSxHQUFHN0IsK0NBQVFBLENBQWMsRUFBRTtJQUVoRCxvQ0FBb0M7SUFFcEMsZUFBZTtJQUNmQyxnREFBU0EsQ0FBQztRQUNOd0IsWUFDSUgsVUFBVVEsR0FBRyxDQUFDQyxDQUFBQTtZQUNWLElBQUlDO1lBQ0osT0FBUUQsSUFBSUUsSUFBSTtnQkFDWjtvQkFDSUQsVUFBVTtvQkFDVjtnQkFDSjtvQkFDSUEsd0JBQVUsOERBQUM3Qiw2Q0FBSUE7Ozs7O29CQUNmO2dCQUNKO29CQUNJLE1BQU0sSUFBSStCLE1BQU07WUFDeEI7WUFFQSxPQUFPO2dCQUFDRjtnQkFBU0QsSUFBSUksUUFBUTthQUFDO1FBQ2xDO1FBR0osR0FBRztRQUNITixRQUFRckIsTUFBTUMsSUFBSSxDQUFDO1lBQUVDLFFBQVFKLE9BQU9hO1FBQUssR0FBRyxDQUFDaUI7WUFDekMsTUFBTUMsTUFBZ0I7Z0JBQUNWLEtBQUtXLEtBQUssQ0FBQ0YsUUFBUWpCO2dCQUFPaUIsUUFBUWpCO2FBQUs7WUFDOUQscUJBQU8sOERBQUNqQiw2Q0FBSUE7Z0JBQTJCbUMsS0FBS0E7Z0JBQUtFLE1BQU1iO2VBQXBDOzs7OztRQUN2QjtJQUVKLEdBQUc7UUFBQ0o7UUFBV0k7UUFBVVA7UUFBTWI7S0FBSztJQUVwQyxTQUFTa0MsS0FFVDtJQUdBLDRDQUE0QztJQUM1QyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFDR0UsT0FBTztnQkFDSEMsU0FBUztnQkFDVEMscUJBQXFCLFVBQWUsT0FBTDFCLE1BQUs7Z0JBQ3BDMkIsa0JBQWtCLFVBQWUsT0FBTHhDLE1BQUs7Z0JBQ2pDeUMsS0FBSztnQkFDTEMsT0FBTztnQkFDUEMsUUFBUSxnQkFBMEI5QixPQUFWYixNQUFLLE9BQVUsT0FBTGEsTUFBSztnQkFDdkMrQixRQUFRO1lBQ1o7c0JBSUkxQixTQUFTMkIsT0FBTyxDQUFDLENBQUNwQyxLQUFLcUMsV0FDbkJyQyxJQUFJZSxHQUFHLENBQUMsQ0FBQ3VCLGFBQWFDLHlCQUNsQiw4REFBQ3BELDZDQUFJQTt3QkFBaUNtQyxLQUFLOzRCQUFDZTs0QkFBVUU7eUJBQVM7d0JBQUVmLE1BQU1iO2tDQUNsRTJCO3VCQURNLEdBQWVDLE9BQVpGLFVBQVMsS0FBWSxPQUFURTs7Ozs7Ozs7Ozs7Ozs7O0FBUXREO0dBcEV3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dyaWQudHN4PzY1MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDZWxsIGZyb20gJy4vQ2VsbCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL0JhbGwnO1xuXG5leHBvcnQgdHlwZSBQb3NpdGlvbiA9IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBlbnVtIE9ialR5cGUge1xuICAgIEVNUFRZLFxuICAgIEJBTEwsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWx0U3RhdGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcG9zaXRpb246IFBvc2l0aW9uO1xuICAgIHR5cGU6IE9ialR5cGU7XG59XG5cblxuaW50ZXJmYWNlIEdyaWRQcm9wcyB7XG4gICAgcm93czogbnVtYmVyO1xuICAgIGNvbHM6IG51bWJlcjtcbiAgICBpbml0R3JpZDogRWx0U3RhdGVbXTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUdyaWQocm93cywgY29sdW1ucykge1xuICAgIC8vIENyZWF0ZSBhIDJEIGFycmF5IGZpbGxlZCB3aXRoIG51bGwgKG5vIGVsZW1lbnQgaW4gdGhlIGNlbGwpXG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT4gQXJyYXkoY29sdW1ucykuZmlsbChudWxsKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyaWQoZ3JpZCwgZWxlbWVudHNBcnJheSkge1xuICAgIC8vIENsZWFyIHRoZSBncmlkXG4gICAgZm9yIChsZXQgcm93IG9mIGdyaWQpIHtcbiAgICAgICAgcm93LmZpbGwobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gUG9wdWxhdGUgdGhlIGdyaWQgd2l0aCBuZXcgcG9zaXRpb25zIG9mIGVsZW1lbnRzXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzQXJyYXkpIHtcbiAgICAgICAgaWYgKGdyaWRbZWxlbWVudC5yb3ddICYmIGdyaWRbZWxlbWVudC5yb3ddW2VsZW1lbnQuY29sdW1uXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZ3JpZFtlbGVtZW50LnJvd11bZWxlbWVudC5jb2x1bW5dID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKHsgcm93cywgY29scywgaW5pdEdyaWQgfTogR3JpZFByb3BzKSB7XG4gICAgY29uc3QgZGVidWcgPSB0cnVlO1xuICAgIGNvbnN0IFtvYmpTdGF0ZXMsIHNldE9ialN0YXRlc10gPSB1c2VTdGF0ZTxFbHRTdGF0ZVtdPihpbml0R3JpZCk7XG4gICAgY29uc3QgW2NlbGxFbHRzLCBzZXRDZWxsRWx0c10gPSB1c2VTdGF0ZTxbUmVhY3ROb2RlLCBQb3NpdGlvbl1bXT4oW10pO1xuICAgIGNvbnN0IGNlbGxTaXplID0gYGNhbGMoMTAwdncgLyAke01hdGgubWF4KHJvd3MsIGNvbHMpfSlgO1xuICAgIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlPFJlYWN0Tm9kZVtdPihbXSk7XG5cbiAgICAvLyBDcmVhdGUgYSBncmlkIGFycmF5IGZvciByZW5kZXJpbmdcblxuICAgIC8vIGRlcGVuZGVuY2llc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENlbGxFbHRzKFxuICAgICAgICAgICAgb2JqU3RhdGVzLm1hcChvYmogPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsRWx0O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBPYmpUeXBlLkVNUFRZOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBPYmpUeXBlLkJBTEw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWx0ID0gPEJhbGwgLz47XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInlvdSBpbnZlbnRlZCBhIG5ldyBwaHlzaWNzIGVsZW1lbnQuIG5pY2UuXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBbY2VsbEVsdCwgb2JqLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gXG4gICAgICAgIHNldEdyaWQoQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyAqIGNvbHMgfSwgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvczogUG9zaXRpb24gPSBbTWF0aC5mbG9vcihpbmRleCAvIGNvbHMpLCBpbmRleCAlIGNvbHNdO1xuICAgICAgICAgICAgcmV0dXJuIDxDZWxsIGtleT17YHtwb3NbMF19LHtwb3NbMV19YH0gcG9zPXtwb3N9IHNpemU9e2NlbGxTaXplfT48L0NlbGw+O1xuICAgICAgICB9KSlcblxuICAgIH0sIFtvYmpTdGF0ZXMsIGNlbGxTaXplLCBjb2xzLCByb3dzXSk7XG5cbiAgICBmdW5jdGlvbiBzKCkge1xuXG4gICAgfVxuXG5cbiAgICAvLyBBZGp1c3QgY2VsbCBzaXplIGJhc2VkIG9uIGdyaWQgZGltZW5zaW9uc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgke2NvbHN9LCAxZnIpYCxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogYHJlcGVhdCgke3Jvd3N9LCAxZnIpYCxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAnMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwdncgKiAke3Jvd3N9IC8gJHtjb2xzfSlgLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsRWx0cy5mbGF0TWFwKChyb3csIHJvd0luZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm1hcCgoY2VsbENvbnRlbnQsIGNvbEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwga2V5PXtgJHtyb3dJbmRleH0tJHtjb2xJbmRleH1gfSBwb3M9e1tyb3dJbmRleCwgY29sSW5kZXhdfSBzaXplPXtjZWxsU2l6ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDZWxsIiwiQmFsbCIsIk9ialR5cGUiLCJpbml0aWFsaXplR3JpZCIsInJvd3MiLCJjb2x1bW5zIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsInVwZGF0ZUdyaWQiLCJncmlkIiwiZWxlbWVudHNBcnJheSIsInJvdyIsImVsZW1lbnQiLCJjb2x1bW4iLCJHcmlkIiwiY29scyIsImluaXRHcmlkIiwiZGVidWciLCJvYmpTdGF0ZXMiLCJzZXRPYmpTdGF0ZXMiLCJjZWxsRWx0cyIsInNldENlbGxFbHRzIiwiY2VsbFNpemUiLCJNYXRoIiwibWF4Iiwic2V0R3JpZCIsIm1hcCIsIm9iaiIsImNlbGxFbHQiLCJ0eXBlIiwiRXJyb3IiLCJwb3NpdGlvbiIsImluZGV4IiwicG9zIiwiZmxvb3IiLCJzaXplIiwicyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ2FwIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJmbGF0TWFwIiwicm93SW5kZXgiLCJjZWxsQ29udGVudCIsImNvbEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Grid.tsx\n"));

/***/ })

});