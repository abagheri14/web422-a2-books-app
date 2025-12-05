module.exports = [
"[project]/components/PageHeader.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function PageHeader({ text, subtext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "display-5 fw-semibold",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/PageHeader.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            subtext ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-muted fs-5 mt-2",
                children: subtext
            }, void 0, false, {
                fileName: "[project]/components/PageHeader.js",
                lineNumber: 5,
                columnNumber: 18
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/PageHeader.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[externals]/swr [external] (swr, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("swr");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/jotai [external] (jotai, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("jotai");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/store.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "favouritesAtom",
    ()=>favouritesAtom
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const favouritesAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])([]);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/BookDetails.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>BookDetails
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/swr [external] (swr, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [ssr] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [ssr] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Spinner$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Spinner.js [ssr] (ecmascript) <export default as Spinner>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const fetcher = (...args)=>fetch(...args).then((r)=>r.json());
function coverUrl(works) {
    const c = works?.covers?.[0];
    return c ? `https://covers.openlibrary.org/b/id/${c}-L.jpg` : '/no_image.png';
}
function BookDetails({ book, workId, showFavouriteBtn = true }) {
    const shouldFetch = !book && workId;
    const { data, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$29$__["default"])(shouldFetch ? `https://openlibrary.org/works/${workId}.json` : null, fetcher);
    const resolved = book || data;
    const [favouritesList, setFavouritesList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favouritesAtom"]);
    const initiallyAdded = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>favouritesList.includes(workId ?? ''), [
        favouritesList,
        workId
    ]);
    const [showAdded, setShowAdded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initiallyAdded);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>setShowAdded(initiallyAdded), [
        initiallyAdded
    ]);
    function favouritesClicked() {
        if (!workId) return;
        if (showAdded) {
            setFavouritesList((current)=>current.filter((fav)=>fav !== workId));
            setShowAdded(false);
        } else {
            setFavouritesList((current)=>[
                    ...current,
                    workId
                ]);
            setShowAdded(true);
        }
    }
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Failed to load book."
    }, void 0, false, {
        fileName: "[project]/components/BookDetails.js",
        lineNumber: 43,
        columnNumber: 21
    }, this);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Spinner$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__["Spinner"], {
        animation: "border",
        role: "status"
    }, void 0, false, {
        fileName: "[project]/components/BookDetails.js",
        lineNumber: 44,
        columnNumber: 25
    }, this);
    if (!resolved) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
        children: "No data."
    }, void 0, false, {
        fileName: "[project]/components/BookDetails.js",
        lineNumber: 46,
        columnNumber: 25
    }, this);
    const title = resolved.title || '';
    const description = typeof resolved.description === 'string' ? resolved.description : resolved.description?.value || 'No description available.';
    const firstPublished = (()=>{
        const w = resolved;
        if (w.first_publish_date) return w.first_publish_date;
        if (w.first_publish_year) return String(w.first_publish_year);
        if (w.created?.value) return w.created.value.slice(0, 10);
        return 'N/A';
    })();
    const subjects = resolved.subjects || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
        className: "gy-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                lg: "4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    src: coverUrl(resolved),
                    alt: title || 'Cover image',
                    className: "img-fluid rounded border",
                    onError: (e)=>{
                        e.currentTarget.src = '/no_image.png';
                    }
                }, void 0, false, {
                    fileName: "[project]/components/BookDetails.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BookDetails.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                lg: "8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "h3 mb-3",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/BookDetails.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "First Published:"
                            }, void 0, false, {
                                fileName: "[project]/components/BookDetails.js",
                                lineNumber: 74,
                                columnNumber: 29
                            }, this),
                            " ",
                            firstPublished
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookDetails.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Subjects:"
                            }, void 0, false, {
                                fileName: "[project]/components/BookDetails.js",
                                lineNumber: 75,
                                columnNumber: 29
                            }, this),
                            " ",
                            subjects.length ? subjects.join(', ') : 'N/A'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookDetails.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            whiteSpace: 'pre-wrap'
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/BookDetails.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    showFavouriteBtn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: showAdded ? 'primary' : 'outline-primary',
                        onClick: favouritesClicked,
                        className: "mt-3",
                        children: showAdded ? '+ Favourite (added)' : '+ Favourite'
                    }, void 0, false, {
                        fileName: "[project]/components/BookDetails.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/BookDetails.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BookDetails.js",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/about.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageHeader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PageHeader.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BookDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BookDetails.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BookDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BookDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function About() {
    const workId = 'OL45883W';
    const book = {
        title: 'Sample Book',
        covers: [],
        subjects: [],
        first_publish_date: 'N/A'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageHeader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                text: "About",
                subtext: "Assignment 2 demo page"
            }, void 0, false, {
                fileName: "[project]/pages/about.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BookDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                book: book,
                workId: workId,
                showFavouriteBtn: false
            }, void 0, false, {
                fileName: "[project]/pages/about.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a493308._.js.map