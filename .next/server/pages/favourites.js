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
exports.id = "pages/favourites";
exports.ids = ["pages/favourites"];
exports.modules = {

/***/ "(pages-dir-node)/./components/BookCard.js":
/*!********************************!*\
  !*** ./components/BookCard.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/cjs/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst fetcher = (...args)=>fetch(...args).then((r)=>r.json());\nfunction coverMUrl(works) {\n    const c = works?.covers?.[0];\n    return c ? `https://covers.openlibrary.org/b/id/${c}-M.jpg` : '/no_image.png';\n}\nfunction BookCard({ workId }) {\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://openlibrary.org/works/${workId}.json`, fetcher);\n    if (error || !data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n        statusCode: 404\n    }, void 0, false, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n        lineNumber: 16,\n        columnNumber: 30\n    }, this);\n    const title = data.title || '';\n    const firstPublished = (()=>{\n        const w = data;\n        if (w.first_publish_date) return w.first_publish_date; // eg \"1902\"\n        if (w.first_publish_year) return String(w.first_publish_year); // eg 1902\n        if (w.created?.value) return w.created.value.slice(0, 10); // eg \"2009-10-10\"\n        return 'N/A';\n    })();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"h-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Img, {\n                variant: \"top\",\n                src: coverMUrl(data),\n                alt: title || 'Cover image',\n                className: \"object-fit-cover\",\n                onError: (e)=>{\n                    e.currentTarget.src = '/no_image.png';\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                className: \"d-flex flex-column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Title, {\n                        className: \"fs-6\",\n                        children: title || ''\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Text, {\n                        className: \"text-muted\",\n                        children: [\n                            \"First published: \",\n                            firstPublished\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n                            href: `/works/${workId}`,\n                            variant: \"secondary\",\n                            size: \"sm\",\n                            children: \"View details\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\BookCard.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQm9va0NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNNO0FBQ0Y7QUFDa0I7QUFFL0MsTUFBTUssVUFBVSxDQUFDLEdBQUdDLE9BQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsSUFBSTtBQUU1RCxTQUFTQyxVQUFVQyxLQUFLO0lBQ3RCLE1BQU1DLElBQUlELE9BQU9FLFFBQVEsQ0FBQyxFQUFFO0lBQzVCLE9BQU9ELElBQUksQ0FBQyxvQ0FBb0MsRUFBRUEsRUFBRSxNQUFNLENBQUMsR0FBRztBQUNoRTtBQUVlLFNBQVNFLFNBQVMsRUFBRUMsTUFBTSxFQUFFO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR2xCLCtDQUFNQSxDQUFDLENBQUMsOEJBQThCLEVBQUVnQixPQUFPLEtBQUssQ0FBQyxFQUFFWDtJQUUvRSxJQUFJYSxTQUFTLENBQUNELE1BQU0scUJBQU8sOERBQUNoQixtREFBS0E7UUFBQ2tCLFlBQVk7Ozs7OztJQUU5QyxNQUFNQyxRQUFRSCxLQUFLRyxLQUFLLElBQUk7SUFDOUIsTUFBTUMsaUJBQWlCLENBQUM7UUFDdEIsTUFBTUMsSUFBSUw7UUFDVixJQUFJSyxFQUFFQyxrQkFBa0IsRUFBRSxPQUFPRCxFQUFFQyxrQkFBa0IsRUFBZ0IsWUFBWTtRQUNqRixJQUFJRCxFQUFFRSxrQkFBa0IsRUFBRSxPQUFPQyxPQUFPSCxFQUFFRSxrQkFBa0IsR0FBVSxVQUFVO1FBQ2hGLElBQUlGLEVBQUVJLE9BQU8sRUFBRUMsT0FBTyxPQUFPTCxFQUFFSSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsS0FBZSxrQkFBa0I7UUFDdkYsT0FBTztJQUNUO0lBRUUscUJBQ0UsOERBQUN6QixvRkFBSUE7UUFBQzBCLFdBQVU7OzBCQUNkLDhEQUFDMUIsb0ZBQUlBLENBQUMyQixHQUFHO2dCQUNQQyxTQUFRO2dCQUNSQyxLQUFLckIsVUFBVU07Z0JBQ2ZnQixLQUFLYixTQUFTO2dCQUNkUyxXQUFVO2dCQUNWSyxTQUFTLENBQUNDO29CQUFRQSxFQUFFQyxhQUFhLENBQUNKLEdBQUcsR0FBRztnQkFBaUI7Ozs7OzswQkFFM0QsOERBQUM3QixvRkFBSUEsQ0FBQ2tDLElBQUk7Z0JBQUNSLFdBQVU7O2tDQUNuQiw4REFBQzFCLG9GQUFJQSxDQUFDbUMsS0FBSzt3QkFBQ1QsV0FBVTtrQ0FBUVQsU0FBUzs7Ozs7O2tDQUN2Qyw4REFBQ2pCLG9GQUFJQSxDQUFDb0MsSUFBSTt3QkFBQ1YsV0FBVTs7NEJBQWE7NEJBQWtCUjs7Ozs7OztrQ0FDcEQsOERBQUNtQjt3QkFBSVgsV0FBVTtrQ0FDYiw0RUFBQ3pCLHNGQUFNQTs0QkFBQ3FDLElBQUl2QyxrREFBSUE7NEJBQUV3QyxNQUFNLENBQUMsT0FBTyxFQUFFMUIsUUFBUTs0QkFBRWUsU0FBUTs0QkFBWVksTUFBSztzQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEYiLCJzb3VyY2VzIjpbIkU6XFx3ZWI0MjItYTJcXGNvbXBvbmVudHNcXEJvb2tDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG5cclxuZnVuY3Rpb24gY292ZXJNVXJsKHdvcmtzKSB7XHJcbiAgY29uc3QgYyA9IHdvcmtzPy5jb3ZlcnM/LlswXTtcclxuICByZXR1cm4gYyA/IGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2N9LU0uanBnYCA6ICcvbm9faW1hZ2UucG5nJztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0NhcmQoeyB3b3JrSWQgfSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcvd29ya3MvJHt3b3JrSWR9Lmpzb25gLCBmZXRjaGVyKTtcclxuXHJcbiAgaWYgKGVycm9yIHx8ICFkYXRhKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZGF0YS50aXRsZSB8fCAnJztcclxuY29uc3QgZmlyc3RQdWJsaXNoZWQgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHcgPSBkYXRhO1xyXG4gIGlmICh3LmZpcnN0X3B1Ymxpc2hfZGF0ZSkgcmV0dXJuIHcuZmlyc3RfcHVibGlzaF9kYXRlOyAgICAgICAgICAgICAgIC8vIGVnIFwiMTkwMlwiXHJcbiAgaWYgKHcuZmlyc3RfcHVibGlzaF95ZWFyKSByZXR1cm4gU3RyaW5nKHcuZmlyc3RfcHVibGlzaF95ZWFyKTsgICAgICAgIC8vIGVnIDE5MDJcclxuICBpZiAody5jcmVhdGVkPy52YWx1ZSkgcmV0dXJuIHcuY3JlYXRlZC52YWx1ZS5zbGljZSgwLCAxMCk7ICAgICAgICAgICAvLyBlZyBcIjIwMDktMTAtMTBcIlxyXG4gIHJldHVybiAnTi9BJztcclxufSkoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgIDxDYXJkLkltZ1xyXG4gICAgICAgIHZhcmlhbnQ9XCJ0b3BcIlxyXG4gICAgICAgIHNyYz17Y292ZXJNVXJsKGRhdGEpfVxyXG4gICAgICAgIGFsdD17dGl0bGUgfHwgJ0NvdmVyIGltYWdlJ31cclxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtZml0LWNvdmVyXCJcclxuICAgICAgICBvbkVycm9yPXsoZSkgPT4geyBlLmN1cnJlbnRUYXJnZXQuc3JjID0gJy9ub19pbWFnZS5wbmcnOyB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImZzLTZcIj57dGl0bGUgfHwgJyd9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkZpcnN0IHB1Ymxpc2hlZDoge2ZpcnN0UHVibGlzaGVkfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0b1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBhcz17TGlua30gaHJlZj17YC93b3Jrcy8ke3dvcmtJZH1gfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgIFZpZXcgZGV0YWlsc1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkVycm9yIiwiTGluayIsIkNhcmQiLCJCdXR0b24iLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiY292ZXJNVXJsIiwid29ya3MiLCJjIiwiY292ZXJzIiwiQm9va0NhcmQiLCJ3b3JrSWQiLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwidGl0bGUiLCJmaXJzdFB1Ymxpc2hlZCIsInciLCJmaXJzdF9wdWJsaXNoX2RhdGUiLCJmaXJzdF9wdWJsaXNoX3llYXIiLCJTdHJpbmciLCJjcmVhdGVkIiwidmFsdWUiLCJzbGljZSIsImNsYXNzTmFtZSIsIkltZyIsInZhcmlhbnQiLCJzcmMiLCJhbHQiLCJvbkVycm9yIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJCb2R5IiwiVGl0bGUiLCJUZXh0IiwiZGl2IiwiYXMiLCJocmVmIiwic2l6ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/BookCard.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainNav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js\");\n\n\n\nfunction MainNav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n        bg: \"light\",\n        expand: \"lg\",\n        className: \"mb-4 border-bottom\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                    as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                    href: \"/\",\n                    children: \"WEB422 A2\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {\n                    \"aria-controls\": \"main-nav\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {\n                    id: \"main-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        className: \"me-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                href: \"/favourites\",\n                                children: \"Favourites\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\MainNav.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTWFpbk5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQzRCO0FBRTFDLFNBQVNJO0lBQ3RCLHFCQUNFLDhEQUFDRCwrRkFBTUE7UUFBQ0UsSUFBRztRQUFRQyxRQUFPO1FBQUtDLFdBQVU7a0JBQ3ZDLDRFQUFDTixrR0FBU0E7OzhCQUNSLDhEQUFDRSwrRkFBTUEsQ0FBQ0ssS0FBSztvQkFBQ0MsSUFBSVQsa0RBQUlBO29CQUFFVSxNQUFLOzhCQUFJOzs7Ozs7OEJBQ2pDLDhEQUFDUCwrRkFBTUEsQ0FBQ1EsTUFBTTtvQkFBQ0MsaUJBQWM7Ozs7Ozs4QkFDN0IsOERBQUNULCtGQUFNQSxDQUFDVSxRQUFRO29CQUFDQyxJQUFHOzhCQUNsQiw0RUFBQ1osNEZBQUdBO3dCQUFDSyxXQUFVOzswQ0FFYiw4REFBQ0wsNEZBQUdBLENBQUNGLElBQUk7Z0NBQUNTLElBQUlULGtEQUFJQTtnQ0FBRVUsTUFBSzswQ0FBYzs7Ozs7OzBDQUN2Qyw4REFBQ1IsNEZBQUdBLENBQUNGLElBQUk7Z0NBQUNTLElBQUlULGtEQUFJQTtnQ0FBRVUsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QyIsInNvdXJjZXMiOlsiRTpcXHdlYjQyMi1hMlxcY29tcG9uZW50c1xcTWFpbk5hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIE5hdiwgTmF2YmFyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5OYXYoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwibWItNCBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBhcz17TGlua30gaHJlZj1cIi9cIj5XRUI0MjIgQTI8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwibWFpbi1uYXZcIiAvPlxyXG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJtYWluLW5hdlwiPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XHJcbiAgICAgICAgICAgIHsvKiBBc3NpZ25tZW50IHNheXMgcmVtb3ZlIFwiQm9va3NcIiBsaW5rICovfVxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvZmF2b3VyaXRlc1wiPkZhdm91cml0ZXM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwiTWFpbk5hdiIsImJnIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiQnJhbmQiLCJhcyIsImhyZWYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/MainNav.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/PageHeader.js":
/*!**********************************!*\
  !*** ./components/PageHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageHeader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PageHeader({ text, subtext }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"display-5 fw-semibold\",\n                children: text\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\components\\\\PageHeader.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            subtext ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-muted fs-5 mt-2\",\n                children: subtext\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\components\\\\PageHeader.js\",\n                lineNumber: 5,\n                columnNumber: 18\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\PageHeader.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvUGFnZUhlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUJIOzs7Ozs7WUFDdENDLHdCQUFVLDhEQUFDSTtnQkFBRUYsV0FBVTswQkFBd0JGOzs7Ozt1QkFBZTs7Ozs7OztBQUdyRSIsInNvdXJjZXMiOlsiRTpcXHdlYjQyMi1hMlxcY29tcG9uZW50c1xcUGFnZUhlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlSGVhZGVyKHsgdGV4dCwgc3VidGV4dCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS01IGZ3LXNlbWlib2xkXCI+e3RleHR9PC9oMT5cclxuICAgICAge3N1YnRleHQgPyA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZzLTUgbXQtMlwiPntzdWJ0ZXh0fTwvcD4gOiBudWxsfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZUhlYWRlciIsInRleHQiLCJzdWJ0ZXh0IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/PageHeader.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\favourites.js */ \"(pages-dir-node)/./pages/favourites.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/favourites\",\n        pathname: \"/favourites\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/favourites\",\n    config,\n    userland: _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZmYXZvdXJpdGVzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNmYXZvdXJpdGVzLmpzJmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDbUQ7QUFDNkI7QUFDaEY7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLGlEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLGlEQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLGlEQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLGlEQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxpREFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxpREFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLGlEQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLGlEQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLGlEQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLGlEQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLGlEQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQW9DLElBQUksQ0FBRTtBQUN2RCx3QkFBd0IsTUFBdUM7QUFDL0Q7QUFDQTtBQUNBLGFBQWEsOERBQVc7QUFDeEIsa0JBQWtCLG9FQUFnQjtBQUNsQyxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7QUFDTSxnQkFBZ0IsOEZBQVU7QUFDakM7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgKiBhcyBkb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcZmF2b3VyaXRlcy5qc1wiO1xuaW1wb3J0IHsgZ2V0SGFuZGxlciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvcGFnZXMtaGFuZGxlclwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvZmF2b3VyaXRlc1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvZmF2b3VyaXRlc1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIGRpc3REaXI6IHByb2Nlc3MuZW52Ll9fTkVYVF9SRUxBVElWRV9ESVNUX0RJUiB8fCAnJyxcbiAgICByZWxhdGl2ZVByb2plY3REaXI6IHByb2Nlc3MuZW52Ll9fTkVYVF9SRUxBVElWRV9QUk9KRUNUX0RJUiB8fCAnJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGdldEhhbmRsZXIoe1xuICAgIHNyY1BhZ2U6IFwiL2Zhdm91cml0ZXNcIixcbiAgICBjb25maWcsXG4gICAgdXNlcmxhbmQsXG4gICAgcm91dGVNb2R1bGUsXG4gICAgZ2V0U3RhdGljUGF0aHMsXG4gICAgZ2V0U3RhdGljUHJvcHMsXG4gICAgZ2V0U2VydmVyU2lkZVByb3BzXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/bootstrap.min.css */ \"(pages-dir-node)/./public/styles/bootstrap.min.css\");\n/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MainNav */ \"(pages-dir-node)/./components/MainNav.js\");\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                className: \"pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\web422-a2\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRDtBQUNDO0FBRTdCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0U7OzBCQUNFLDhEQUFDSiwyREFBT0E7Ozs7OzBCQUNSLDhEQUFDQyx1RkFBU0E7Z0JBQUNJLFdBQVU7MEJBQ25CLDRFQUFDRjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJFOlxcd2ViNDIyLWEyXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgTWFpbk5hdiBmcm9tICdAL2NvbXBvbmVudHMvTWFpbk5hdic7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW5OYXYgLz5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1haW5OYXYiLCJDb250YWluZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/favourites.js":
/*!*****************************!*\
  !*** ./pages/favourites.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Favourites)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"(pages-dir-node)/./store.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageHeader */ \"(pages-dir-node)/./components/PageHeader.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BookCard */ \"(pages-dir-node)/./components/BookCard.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, _components_BookCard__WEBPACK_IMPORTED_MODULE_4__]);\n([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, _components_BookCard__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Favourites() {\n    const [favouritesList] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_2__.favouritesAtom);\n    if (!favouritesList.length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: \"Nothing Here\",\n                subtext: \"Add a book to favourites from its details page.\"\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\favourites.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: \"Favourites\",\n                subtext: \"Your favourite books\"\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\favourites.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                className: \"gy-4\",\n                children: favouritesList.map((workId)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        lg: 3,\n                        md: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            workId: workId\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web422-a2\\\\pages\\\\favourites.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    }, workId, false, {\n                        fileName: \"E:\\\\web422-a2\\\\pages\\\\favourites.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\favourites.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2Zhdm91cml0ZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDUTtBQUNOO0FBQ0U7QUFFOUIsU0FBU007SUFDdEIsTUFBTSxDQUFDQyxlQUFlLEdBQUdQLDhDQUFPQSxDQUFDQyxrREFBY0E7SUFFL0MsSUFBSSxDQUFDTSxlQUFlQyxNQUFNLEVBQUU7UUFDMUIscUJBQ0U7c0JBQ0UsNEVBQUNOLDhEQUFVQTtnQkFBQ08sTUFBSztnQkFBZUMsU0FBUTs7Ozs7OztJQUc5QztJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1IsOERBQVVBO2dCQUFDTyxNQUFLO2dCQUFhQyxTQUFROzs7Ozs7MEJBQ3RDLDhEQUFDTiwrRUFBR0E7Z0JBQUNPLFdBQVU7MEJBQ1pKLGVBQWVLLEdBQUcsQ0FBQyxDQUFDQyx1QkFDbkIsOERBQUNWLCtFQUFHQTt3QkFBY1csSUFBSTt3QkFBR0MsSUFBSTtrQ0FDM0IsNEVBQUNWLDREQUFRQTs0QkFBQ1EsUUFBUUE7Ozs7Ozt1QkFEVkE7Ozs7Ozs7Ozs7OztBQU9wQiIsInNvdXJjZXMiOlsiRTpcXHdlYjQyMi1hMlxccGFnZXNcXGZhdm91cml0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJztcclxuaW1wb3J0IHsgZmF2b3VyaXRlc0F0b20gfSBmcm9tICdAL3N0b3JlJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmF2b3VyaXRlcygpIHtcclxuICBjb25zdCBbZmF2b3VyaXRlc0xpc3RdID0gdXNlQXRvbShmYXZvdXJpdGVzQXRvbSk7XHJcblxyXG4gIGlmICghZmF2b3VyaXRlc0xpc3QubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQYWdlSGVhZGVyIHRleHQ9XCJOb3RoaW5nIEhlcmVcIiBzdWJ0ZXh0PVwiQWRkIGEgYm9vayB0byBmYXZvdXJpdGVzIGZyb20gaXRzIGRldGFpbHMgcGFnZS5cIiAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGV4dD1cIkZhdm91cml0ZXNcIiBzdWJ0ZXh0PVwiWW91ciBmYXZvdXJpdGUgYm9va3NcIiAvPlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImd5LTRcIj5cclxuICAgICAgICB7ZmF2b3VyaXRlc0xpc3QubWFwKCh3b3JrSWQpID0+IChcclxuICAgICAgICAgIDxDb2wga2V5PXt3b3JrSWR9IGxnPXszfSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxCb29rQ2FyZCB3b3JrSWQ9e3dvcmtJZH0gLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUF0b20iLCJmYXZvdXJpdGVzQXRvbSIsIlBhZ2VIZWFkZXIiLCJDb2wiLCJSb3ciLCJCb29rQ2FyZCIsIkZhdm91cml0ZXMiLCJmYXZvdXJpdGVzTGlzdCIsImxlbmd0aCIsInRleHQiLCJzdWJ0ZXh0IiwiY2xhc3NOYW1lIiwibWFwIiwid29ya0lkIiwibGciLCJtZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/favourites.js\n");

/***/ }),

/***/ "(pages-dir-node)/./public/styles/bootstrap.min.css":
/*!*****************************************!*\
  !*** ./public/styles/bootstrap.min.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   favouritesAtom: () => (/* binding */ favouritesAtom)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst favouritesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZCO0FBQ3RCLE1BQU1DLGlCQUFpQkQsMkNBQUlBLENBQUMsRUFBRSxFQUFFIiwic291cmNlcyI6WyJFOlxcd2ViNDIyLWEyXFxzdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tIH0gZnJvbSAnam90YWknO1xyXG5leHBvcnQgY29uc3QgZmF2b3VyaXRlc0F0b20gPSBhdG9tKFtdKTsiXSwibmFtZXMiOlsiYXRvbSIsImZhdm91cml0ZXNBdG9tIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/cjs/index.js":
/*!*******************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/cjs/index.js":
/*!***************************************************************************************!*\
  !*** __barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** __barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => E_web422_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useCallbackRef":
/*!************************************************!*\
  !*** external "@restart/hooks/useCallbackRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useCallbackRef");

/***/ }),

/***/ "@restart/hooks/useCommittedRef":
/*!*************************************************!*\
  !*** external "@restart/hooks/useCommittedRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useCommittedRef");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useIsomorphicEffect":
/*!*****************************************************!*\
  !*** external "@restart/hooks/useIsomorphicEffect" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useIsomorphicEffect");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/hooks/useTimeout":
/*!********************************************!*\
  !*** external "@restart/hooks/useTimeout" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useTimeout");

/***/ }),

/***/ "@restart/hooks/useUpdateEffect":
/*!*************************************************!*\
  !*** external "@restart/hooks/useUpdateEffect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useUpdateEffect");

/***/ }),

/***/ "@restart/hooks/useWillUnmount":
/*!************************************************!*\
  !*** external "@restart/hooks/useWillUnmount" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useWillUnmount");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Button":
/*!*************************************!*\
  !*** external "@restart/ui/Button" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Button");

/***/ }),

/***/ "@restart/ui/Dropdown":
/*!***************************************!*\
  !*** external "@restart/ui/Dropdown" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Dropdown");

/***/ }),

/***/ "@restart/ui/DropdownContext":
/*!**********************************************!*\
  !*** external "@restart/ui/DropdownContext" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownContext");

/***/ }),

/***/ "@restart/ui/DropdownItem":
/*!*******************************************!*\
  !*** external "@restart/ui/DropdownItem" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownItem");

/***/ }),

/***/ "@restart/ui/DropdownMenu":
/*!*******************************************!*\
  !*** external "@restart/ui/DropdownMenu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownMenu");

/***/ }),

/***/ "@restart/ui/DropdownToggle":
/*!*********************************************!*\
  !*** external "@restart/ui/DropdownToggle" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownToggle");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/NoopTransition":
/*!*********************************************!*\
  !*** external "@restart/ui/NoopTransition" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NoopTransition");

/***/ }),

/***/ "@restart/ui/Overlay":
/*!**************************************!*\
  !*** external "@restart/ui/Overlay" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Overlay");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "@restart/ui/TabContext":
/*!*****************************************!*\
  !*** external "@restart/ui/TabContext" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/TabContext");

/***/ }),

/***/ "@restart/ui/TabPanel":
/*!***************************************!*\
  !*** external "@restart/ui/TabPanel" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/TabPanel");

/***/ }),

/***/ "@restart/ui/Tabs":
/*!***********************************!*\
  !*** external "@restart/ui/Tabs" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Tabs");

/***/ }),

/***/ "@restart/ui/ssr":
/*!**********************************!*\
  !*** external "@restart/ui/ssr" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ssr");

/***/ }),

/***/ "@restart/ui/utils":
/*!************************************!*\
  !*** external "@restart/ui/utils" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/utils");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/addEventListener":
/*!***********************************************!*\
  !*** external "dom-helpers/addEventListener" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addEventListener");

/***/ }),

/***/ "dom-helpers/canUseDOM":
/*!****************************************!*\
  !*** external "dom-helpers/canUseDOM" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/canUseDOM");

/***/ }),

/***/ "dom-helpers/contains":
/*!***************************************!*\
  !*** external "dom-helpers/contains" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/contains");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/hasClass":
/*!***************************************!*\
  !*** external "dom-helpers/hasClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ "dom-helpers/ownerDocument":
/*!********************************************!*\
  !*** external "dom-helpers/ownerDocument" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/removeEventListener":
/*!**************************************************!*\
  !*** external "dom-helpers/removeEventListener" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeEventListener");

/***/ }),

/***/ "dom-helpers/scrollbarSize":
/*!********************************************!*\
  !*** external "dom-helpers/scrollbarSize" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/scrollbarSize");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("invariant");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("warning");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();