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
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "(pages-dir-node)/./components/BookDetails.js":
/*!***********************************!*\
  !*** ./components/BookDetails.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Col_Row_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Row,Spinner!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Button,Col,Row,Spinner!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"(pages-dir-node)/./store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__]);\n([swr__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst fetcher = (...args)=>fetch(...args).then((r)=>r.json());\nfunction coverUrl(works) {\n    const c = works?.covers?.[0];\n    return c ? `https://covers.openlibrary.org/b/id/${c}-L.jpg` : '/no_image.png';\n}\nfunction BookDetails({ book, workId, showFavouriteBtn = true }) {\n    // If \"book\" prop not provided, fetch using workId\n    const shouldFetch = !book && workId;\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shouldFetch ? `https://openlibrary.org/works/${workId}.json` : null, fetcher);\n    const resolved = book || data;\n    const [favouritesList, setFavouritesList] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.favouritesAtom);\n    const initiallyAdded = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)({\n        \"BookDetails.useMemo[initiallyAdded]\": ()=>favouritesList.includes(workId ?? '')\n    }[\"BookDetails.useMemo[initiallyAdded]\"], [\n        favouritesList,\n        workId\n    ]);\n    const [showAdded, setShowAdded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initiallyAdded);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"BookDetails.useEffect\": ()=>setShowAdded(initiallyAdded)\n    }[\"BookDetails.useEffect\"], [\n        initiallyAdded\n    ]);\n    function favouritesClicked() {\n        if (!workId) return;\n        if (showAdded) {\n            setFavouritesList((current)=>current.filter((fav)=>fav !== workId));\n            setShowAdded(false);\n        } else {\n            setFavouritesList((current)=>[\n                    ...current,\n                    workId\n                ]);\n            setShowAdded(true);\n        }\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-danger\",\n        children: \"Failed to load book.\"\n    }, void 0, false, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n        lineNumber: 44,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n        animation: \"border\",\n        role: \"status\"\n    }, void 0, false, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n        lineNumber: 45,\n        columnNumber: 25\n    }, this);\n    if (!resolved) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No data.\"\n    }, void 0, false, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n        lineNumber: 47,\n        columnNumber: 25\n    }, this);\n    const title = resolved.title || '';\n    const description = typeof resolved.description === 'string' ? resolved.description : resolved.description?.value || 'No description available.';\n    const firstPublished = (()=>{\n        const w = resolved;\n        if (w.first_publish_date) return w.first_publish_date;\n        if (w.first_publish_year) return String(w.first_publish_year);\n        if (w.created?.value) return w.created.value.slice(0, 10);\n        return 'N/A';\n    })();\n    const subjects = resolved.subjects || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n        className: \"gy-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                lg: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: coverUrl(resolved),\n                    alt: title || 'Cover image',\n                    className: \"img-fluid rounded border\",\n                    onError: (e)=>{\n                        e.currentTarget.src = '/no_image.png';\n                    }\n                }, void 0, false, {\n                    fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                lg: \"8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"h3 mb-3\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"First Published:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, this),\n                            \" \",\n                            firstPublished\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Subjects:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, this),\n                            \" \",\n                            subjects.length ? subjects.join(', ') : 'N/A'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            whiteSpace: 'pre-wrap'\n                        },\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    showFavouriteBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        variant: showAdded ? 'primary' : 'outline-primary',\n                        onClick: favouritesClicked,\n                        className: \"mt-3\",\n                        children: showAdded ? '+ Favourite (added)' : '+ Favourite'\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\web422-a2\\\\components\\\\BookDetails.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQm9va0RldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUM0QjtBQUNPO0FBQzVCO0FBQ1M7QUFFekMsTUFBTVUsVUFBVSxDQUFDLEdBQUdDLE9BQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsSUFBSTtBQUU1RCxTQUFTQyxTQUFTQyxLQUFLO0lBQ3JCLE1BQU1DLElBQUlELE9BQU9FLFFBQVEsQ0FBQyxFQUFFO0lBQzVCLE9BQU9ELElBQUksQ0FBQyxvQ0FBb0MsRUFBRUEsRUFBRSxNQUFNLENBQUMsR0FBRztBQUNoRTtBQUVlLFNBQVNFLFlBQVksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLG1CQUFtQixJQUFJLEVBQUU7SUFDM0Usa0RBQWtEO0lBQ2xELE1BQU1DLGNBQWMsQ0FBQ0gsUUFBUUM7SUFDN0IsTUFBTSxFQUFFRyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUczQiwrQ0FBTUEsQ0FDdkN3QixjQUFjLENBQUMsOEJBQThCLEVBQUVGLE9BQU8sS0FBSyxDQUFDLEdBQUcsTUFDL0RaO0lBR0YsTUFBTWtCLFdBQVdQLFFBQVFJO0lBRXpCLE1BQU0sQ0FBQ0ksZ0JBQWdCQyxrQkFBa0IsR0FBR3RCLDhDQUFPQSxDQUFDQyxrREFBY0E7SUFDbEUsTUFBTXNCLGlCQUFpQjdCLDhDQUFPQTsrQ0FDNUIsSUFBTTJCLGVBQWVHLFFBQVEsQ0FBQ1YsVUFBVTs4Q0FDeEM7UUFBQ087UUFBZ0JQO0tBQU87SUFFMUIsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUcvQiwrQ0FBUUEsQ0FBQzRCO0lBRTNDOUIsZ0RBQVNBO2lDQUFDLElBQU1pQyxhQUFhSDtnQ0FBaUI7UUFBQ0E7S0FBZTtJQUU5RCxTQUFTSTtRQUNQLElBQUksQ0FBQ2IsUUFBUTtRQUNiLElBQUlXLFdBQVc7WUFDYkgsa0JBQWtCTSxDQUFBQSxVQUFXQSxRQUFRQyxNQUFNLENBQUNDLENBQUFBLE1BQU9BLFFBQVFoQjtZQUMzRFksYUFBYTtRQUNmLE9BQU87WUFDTEosa0JBQWtCTSxDQUFBQSxVQUFXO3VCQUFJQTtvQkFBU2Q7aUJBQU87WUFDakRZLGFBQWE7UUFDZjtJQUNGO0lBRUEsSUFBSVIsT0FBTyxxQkFBTyw4REFBQ2E7UUFBRUMsV0FBVTtrQkFBYzs7Ozs7O0lBQzdDLElBQUliLFdBQVcscUJBQU8sOERBQUNwQixrR0FBT0E7UUFBQ2tDLFdBQVU7UUFBU0MsTUFBSzs7Ozs7O0lBRXZELElBQUksQ0FBQ2QsVUFBVSxxQkFBTyw4REFBQ1c7a0JBQUU7Ozs7OztJQUV6QixNQUFNSSxRQUFRZixTQUFTZSxLQUFLLElBQUk7SUFDaEMsTUFBTUMsY0FDSixPQUFPaEIsU0FBU2dCLFdBQVcsS0FBSyxXQUM1QmhCLFNBQVNnQixXQUFXLEdBQ3BCaEIsU0FBU2dCLFdBQVcsRUFBRUMsU0FBUztJQUN2QyxNQUFNQyxpQkFBaUIsQ0FBQztRQUN0QixNQUFNQyxJQUFJbkI7UUFDVixJQUFJbUIsRUFBRUMsa0JBQWtCLEVBQUUsT0FBT0QsRUFBRUMsa0JBQWtCO1FBQ3JELElBQUlELEVBQUVFLGtCQUFrQixFQUFFLE9BQU9DLE9BQU9ILEVBQUVFLGtCQUFrQjtRQUM1RCxJQUFJRixFQUFFSSxPQUFPLEVBQUVOLE9BQU8sT0FBT0UsRUFBRUksT0FBTyxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQyxHQUFHO1FBQ3RELE9BQU87SUFDVDtJQUNFLE1BQU1DLFdBQVd6QixTQUFTeUIsUUFBUSxJQUFJLEVBQUU7SUFFeEMscUJBQ0UsOERBQUMvQyw4RkFBR0E7UUFBQ2tDLFdBQVU7OzBCQUNiLDhEQUFDbkMsOEZBQUdBO2dCQUFDaUQsSUFBRzswQkFDTiw0RUFBQ0M7b0JBQ0NDLEtBQUt4QyxTQUFTWTtvQkFDZDZCLEtBQUtkLFNBQVM7b0JBQ2RILFdBQVU7b0JBQ1ZrQixTQUFTLENBQUNDO3dCQUFRQSxFQUFFQyxhQUFhLENBQUNKLEdBQUcsR0FBRztvQkFBaUI7Ozs7Ozs7Ozs7OzBCQUc3RCw4REFBQ25ELDhGQUFHQTtnQkFBQ2lELElBQUc7O2tDQUNOLDhEQUFDTzt3QkFBR3JCLFdBQVU7a0NBQVdHOzs7Ozs7a0NBQ3pCLDhEQUFDSjt3QkFBRUMsV0FBVTs7MENBQU8sOERBQUNzQjswQ0FBTzs7Ozs7OzRCQUF5Qjs0QkFBRWhCOzs7Ozs7O2tDQUN2RCw4REFBQ1A7d0JBQUVDLFdBQVU7OzBDQUFPLDhEQUFDc0I7MENBQU87Ozs7Ozs0QkFBa0I7NEJBQUVULFNBQVNVLE1BQU0sR0FBR1YsU0FBU1csSUFBSSxDQUFDLFFBQVE7Ozs7Ozs7a0NBQ3hGLDhEQUFDekI7d0JBQUUwQixPQUFPOzRCQUFFQyxZQUFZO3dCQUFXO2tDQUFJdEI7Ozs7OztvQkFFdENyQixpQ0FDQyw4REFBQ25CLGlHQUFNQTt3QkFDTCtELFNBQVNsQyxZQUFZLFlBQVk7d0JBQ2pDbUMsU0FBU2pDO3dCQUNUSyxXQUFVO2tDQUVUUCxZQUFZLHdCQUF3Qjs7Ozs7K0JBRXJDOzs7Ozs7Ozs7Ozs7O0FBSVoiLCJzb3VyY2VzIjpbIkU6XFx3ZWI0MjItYTJcXGNvbXBvbmVudHNcXEJvb2tEZXRhaWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUF0b20gfSBmcm9tICdqb3RhaSc7XHJcbmltcG9ydCB7IGZhdm91cml0ZXNBdG9tIH0gZnJvbSAnQC9zdG9yZSc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcblxyXG5mdW5jdGlvbiBjb3ZlclVybCh3b3Jrcykge1xyXG4gIGNvbnN0IGMgPSB3b3Jrcz8uY292ZXJzPy5bMF07XHJcbiAgcmV0dXJuIGMgPyBgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtjfS1MLmpwZ2AgOiAnL25vX2ltYWdlLnBuZyc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzKHsgYm9vaywgd29ya0lkLCBzaG93RmF2b3VyaXRlQnRuID0gdHJ1ZSB9KSB7XHJcbiAgLy8gSWYgXCJib29rXCIgcHJvcCBub3QgcHJvdmlkZWQsIGZldGNoIHVzaW5nIHdvcmtJZFxyXG4gIGNvbnN0IHNob3VsZEZldGNoID0gIWJvb2sgJiYgd29ya0lkO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKFxyXG4gICAgc2hvdWxkRmV0Y2ggPyBgaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcvd29ya3MvJHt3b3JrSWR9Lmpzb25gIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zdCByZXNvbHZlZCA9IGJvb2sgfHwgZGF0YTtcclxuXHJcbiAgY29uc3QgW2Zhdm91cml0ZXNMaXN0LCBzZXRGYXZvdXJpdGVzTGlzdF0gPSB1c2VBdG9tKGZhdm91cml0ZXNBdG9tKTtcclxuICBjb25zdCBpbml0aWFsbHlBZGRlZCA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBmYXZvdXJpdGVzTGlzdC5pbmNsdWRlcyh3b3JrSWQgPz8gJycpLFxyXG4gICAgW2Zhdm91cml0ZXNMaXN0LCB3b3JrSWRdXHJcbiAgKTtcclxuICBjb25zdCBbc2hvd0FkZGVkLCBzZXRTaG93QWRkZWRdID0gdXNlU3RhdGUoaW5pdGlhbGx5QWRkZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0U2hvd0FkZGVkKGluaXRpYWxseUFkZGVkKSwgW2luaXRpYWxseUFkZGVkXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGZhdm91cml0ZXNDbGlja2VkKCkge1xyXG4gICAgaWYgKCF3b3JrSWQpIHJldHVybjtcclxuICAgIGlmIChzaG93QWRkZWQpIHtcclxuICAgICAgc2V0RmF2b3VyaXRlc0xpc3QoY3VycmVudCA9PiBjdXJyZW50LmZpbHRlcihmYXYgPT4gZmF2ICE9PSB3b3JrSWQpKTtcclxuICAgICAgc2V0U2hvd0FkZGVkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZhdm91cml0ZXNMaXN0KGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIHdvcmtJZF0pO1xyXG4gICAgICBzZXRTaG93QWRkZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkZhaWxlZCB0byBsb2FkIGJvb2suPC9wPjtcclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiIC8+O1xyXG5cclxuICBpZiAoIXJlc29sdmVkKSByZXR1cm4gPHA+Tm8gZGF0YS48L3A+O1xyXG5cclxuICBjb25zdCB0aXRsZSA9IHJlc29sdmVkLnRpdGxlIHx8ICcnO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAgIHR5cGVvZiByZXNvbHZlZC5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZydcclxuICAgICAgPyByZXNvbHZlZC5kZXNjcmlwdGlvblxyXG4gICAgICA6IHJlc29sdmVkLmRlc2NyaXB0aW9uPy52YWx1ZSB8fCAnTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlLic7XHJcbmNvbnN0IGZpcnN0UHVibGlzaGVkID0gKCgpID0+IHtcclxuICBjb25zdCB3ID0gcmVzb2x2ZWQ7XHJcbiAgaWYgKHcuZmlyc3RfcHVibGlzaF9kYXRlKSByZXR1cm4gdy5maXJzdF9wdWJsaXNoX2RhdGU7XHJcbiAgaWYgKHcuZmlyc3RfcHVibGlzaF95ZWFyKSByZXR1cm4gU3RyaW5nKHcuZmlyc3RfcHVibGlzaF95ZWFyKTtcclxuICBpZiAody5jcmVhdGVkPy52YWx1ZSkgcmV0dXJuIHcuY3JlYXRlZC52YWx1ZS5zbGljZSgwLCAxMCk7XHJcbiAgcmV0dXJuICdOL0EnO1xyXG59KSgpO1xyXG4gIGNvbnN0IHN1YmplY3RzID0gcmVzb2x2ZWQuc3ViamVjdHMgfHwgW107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IGNsYXNzTmFtZT1cImd5LTNcIj5cclxuICAgICAgPENvbCBsZz1cIjRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2NvdmVyVXJsKHJlc29sdmVkKX1cclxuICAgICAgICAgIGFsdD17dGl0bGUgfHwgJ0NvdmVyIGltYWdlJ31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkIGJvcmRlclwiXHJcbiAgICAgICAgICBvbkVycm9yPXsoZSkgPT4geyBlLmN1cnJlbnRUYXJnZXQuc3JjID0gJy9ub19pbWFnZS5wbmcnOyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPVwiOFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMyBtYi0zXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPjxzdHJvbmc+Rmlyc3QgUHVibGlzaGVkOjwvc3Ryb25nPiB7Zmlyc3RQdWJsaXNoZWR9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj48c3Ryb25nPlN1YmplY3RzOjwvc3Ryb25nPiB7c3ViamVjdHMubGVuZ3RoID8gc3ViamVjdHMuam9pbignLCAnKSA6ICdOL0EnfTwvcD5cclxuICAgICAgICA8cCBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnIH19PntkZXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICAgIHtzaG93RmF2b3VyaXRlQnRuID8gKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXtzaG93QWRkZWQgPyAncHJpbWFyeScgOiAnb3V0bGluZS1wcmltYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17ZmF2b3VyaXRlc0NsaWNrZWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2hvd0FkZGVkID8gJysgRmF2b3VyaXRlIChhZGRlZCknIDogJysgRmF2b3VyaXRlJ31cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbCIsIlJvdyIsIlNwaW5uZXIiLCJ1c2VBdG9tIiwiZmF2b3VyaXRlc0F0b20iLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiY292ZXJVcmwiLCJ3b3JrcyIsImMiLCJjb3ZlcnMiLCJCb29rRGV0YWlscyIsImJvb2siLCJ3b3JrSWQiLCJzaG93RmF2b3VyaXRlQnRuIiwic2hvdWxkRmV0Y2giLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJyZXNvbHZlZCIsImZhdm91cml0ZXNMaXN0Iiwic2V0RmF2b3VyaXRlc0xpc3QiLCJpbml0aWFsbHlBZGRlZCIsImluY2x1ZGVzIiwic2hvd0FkZGVkIiwic2V0U2hvd0FkZGVkIiwiZmF2b3VyaXRlc0NsaWNrZWQiLCJjdXJyZW50IiwiZmlsdGVyIiwiZmF2IiwicCIsImNsYXNzTmFtZSIsImFuaW1hdGlvbiIsInJvbGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJmaXJzdFB1Ymxpc2hlZCIsInciLCJmaXJzdF9wdWJsaXNoX2RhdGUiLCJmaXJzdF9wdWJsaXNoX3llYXIiLCJTdHJpbmciLCJjcmVhdGVkIiwic2xpY2UiLCJzdWJqZWN0cyIsImxnIiwiaW1nIiwic3JjIiwiYWx0Iiwib25FcnJvciIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaDIiLCJzdHJvbmciLCJsZW5ndGgiLCJqb2luIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwidmFyaWFudCIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/BookDetails.js\n");

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

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\about.js */ \"(pages-dir-node)/./pages/about.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_about_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_about_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/about\",\n        pathname: \"/about\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_about_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/about\",\n    config,\n    userland: _pages_about_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZhYm91dCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYWJvdXQuanMmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUM4QztBQUNrQztBQUNoRjtBQUNBLGlFQUFlLHdFQUFLLENBQUMsNENBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNENBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDRDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDRDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNENBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNENBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBb0MsSUFBSSxDQUFFO0FBQ3ZELHdCQUF3QixNQUF1QztBQUMvRDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQztBQUNNLGdCQUFnQiw4RkFBVTtBQUNqQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhYm91dC5qc1wiO1xuaW1wb3J0IHsgZ2V0SGFuZGxlciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvcGFnZXMtaGFuZGxlclwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvYWJvdXRcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2Fib3V0XCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgZGlzdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX0RJU1RfRElSIHx8ICcnLFxuICAgIHJlbGF0aXZlUHJvamVjdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX1BST0pFQ1RfRElSIHx8ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gZ2V0SGFuZGxlcih7XG4gICAgc3JjUGFnZTogXCIvYWJvdXRcIixcbiAgICBjb25maWcsXG4gICAgdXNlcmxhbmQsXG4gICAgcm91dGVNb2R1bGUsXG4gICAgZ2V0U3RhdGljUGF0aHMsXG4gICAgZ2V0U3RhdGljUHJvcHMsXG4gICAgZ2V0U2VydmVyU2lkZVByb3BzXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/bootstrap.min.css */ \"(pages-dir-node)/./public/styles/bootstrap.min.css\");\n/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MainNav */ \"(pages-dir-node)/./components/MainNav.js\");\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                className: \"pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\web422-a2\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRDtBQUNDO0FBRTdCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0U7OzBCQUNFLDhEQUFDSiwyREFBT0E7Ozs7OzBCQUNSLDhEQUFDQyx1RkFBU0E7Z0JBQUNJLFdBQVU7MEJBQ25CLDRFQUFDRjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJFOlxcd2ViNDIyLWEyXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgTWFpbk5hdiBmcm9tICdAL2NvbXBvbmVudHMvTWFpbk5hdic7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW5OYXYgLz5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1haW5OYXYiLCJDb250YWluZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PageHeader */ \"(pages-dir-node)/./components/PageHeader.js\");\n/* harmony import */ var _components_BookDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BookDetails */ \"(pages-dir-node)/./components/BookDetails.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_BookDetails__WEBPACK_IMPORTED_MODULE_2__]);\n_components_BookDetails__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction About() {\n    // Example hard-coded book; replace with any valid workId & minimal book stub if you want.\n    const workId = 'OL45883W'; // The Hobbit, for example; safe to leave if not guaranteed\n    const book = {\n        title: 'Sample Book',\n        covers: [],\n        subjects: [],\n        first_publish_date: 'N/A'\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"About\",\n                subtext: \"Assignment 2 demo page\"\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\about.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                book: book,\n                workId: workId,\n                showFavouriteBtn: false\n            }, void 0, false, {\n                fileName: \"E:\\\\web422-a2\\\\pages\\\\about.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2Fib3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNFO0FBRXBDLFNBQVNFO0lBQ3RCLDBGQUEwRjtJQUMxRixNQUFNQyxTQUFTLFlBQVksMkRBQTJEO0lBQ3RGLE1BQU1DLE9BQU87UUFBRUMsT0FBTztRQUFlQyxRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO1FBQUVDLG9CQUFvQjtJQUFNO0lBRXpGLHFCQUNFOzswQkFDRSw4REFBQ1IsOERBQVVBO2dCQUFDUyxNQUFLO2dCQUFRQyxTQUFROzs7Ozs7MEJBQ2pDLDhEQUFDVCwrREFBV0E7Z0JBQUNHLE1BQU1BO2dCQUFNRCxRQUFRQTtnQkFBUVEsa0JBQWtCOzs7Ozs7OztBQUdqRSIsInNvdXJjZXMiOlsiRTpcXHdlYjQyMi1hMlxccGFnZXNcXGFib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9QYWdlSGVhZGVyJztcclxuaW1wb3J0IEJvb2tEZXRhaWxzIGZyb20gJ0AvY29tcG9uZW50cy9Cb29rRGV0YWlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICAvLyBFeGFtcGxlIGhhcmQtY29kZWQgYm9vazsgcmVwbGFjZSB3aXRoIGFueSB2YWxpZCB3b3JrSWQgJiBtaW5pbWFsIGJvb2sgc3R1YiBpZiB5b3Ugd2FudC5cclxuICBjb25zdCB3b3JrSWQgPSAnT0w0NTg4M1cnOyAvLyBUaGUgSG9iYml0LCBmb3IgZXhhbXBsZTsgc2FmZSB0byBsZWF2ZSBpZiBub3QgZ3VhcmFudGVlZFxyXG4gIGNvbnN0IGJvb2sgPSB7IHRpdGxlOiAnU2FtcGxlIEJvb2snLCBjb3ZlcnM6IFtdLCBzdWJqZWN0czogW10sIGZpcnN0X3B1Ymxpc2hfZGF0ZTogJ04vQScgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYWdlSGVhZGVyIHRleHQ9XCJBYm91dFwiIHN1YnRleHQ9XCJBc3NpZ25tZW50IDIgZGVtbyBwYWdlXCIgLz5cclxuICAgICAgPEJvb2tEZXRhaWxzIGJvb2s9e2Jvb2t9IHdvcmtJZD17d29ya0lkfSBzaG93RmF2b3VyaXRlQnRuPXtmYWxzZX0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2VIZWFkZXIiLCJCb29rRGV0YWlscyIsIkFib3V0Iiwid29ya0lkIiwiYm9vayIsInRpdGxlIiwiY292ZXJzIiwic3ViamVjdHMiLCJmaXJzdF9wdWJsaXNoX2RhdGUiLCJ0ZXh0Iiwic3VidGV4dCIsInNob3dGYXZvdXJpdGVCdG4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/about.js\n");

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

/***/ "(pages-dir-node)/__barrel_optimize__?names=Button,Col,Row,Spinner!=!./node_modules/react-bootstrap/cjs/index.js":
/*!******************************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Col,Row,Spinner!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \******************************************************************************************************/
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();