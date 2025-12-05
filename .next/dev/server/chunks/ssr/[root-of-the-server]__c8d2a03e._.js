module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
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
"[externals]/jwt-decode [external] (jwt-decode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("jwt-decode", () => require("jwt-decode"));

module.exports = mod;
}),
"[project]/lib/authenticate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateUser",
    ()=>authenticateUser,
    "getToken",
    ()=>getToken,
    "isAuthenticated",
    ()=>isAuthenticated,
    "readToken",
    ()=>readToken,
    "registerUser",
    ()=>registerUser,
    "removeToken",
    ()=>removeToken,
    "setToken",
    ()=>setToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/jwt-decode [external] (jwt-decode, cjs)");
;
function setToken(token) {
    localStorage.setItem("token", token);
}
function getToken() {
    return localStorage.getItem("token");
}
function removeToken() {
    localStorage.removeItem("token");
}
function readToken() {
    try {
        const token = getToken();
        return token ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__cjs$29$__["default"])(token) : null;
    } catch (err) {
        return null;
    }
}
function isAuthenticated() {
    const token = readToken();
    return token ? true : false;
}
async function authenticateUser(user, password) {
    const res = await fetch(`${("TURBOPACK compile-time value", "https://web422-a3-user-api-smoky.vercel.app/api/user")}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: user,
            password
        })
    });
    if (res.status === 200) {
        const data = await res.json();
        setToken(data.token);
        return true;
    } else {
        return false;
    }
}
async function registerUser(user, password, password2) {
    const res = await fetch(`${("TURBOPACK compile-time value", "https://web422-a3-user-api-smoky.vercel.app/api/user")}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: user,
            password,
            password2
        })
    });
    return res.status === 200;
}
}),
"[project]/lib/userData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToFavourites",
    ()=>addToFavourites,
    "getFavourites",
    ()=>getFavourites,
    "removeFromFavourites",
    ()=>removeFromFavourites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authenticate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/authenticate.js [ssr] (ecmascript)");
;
async function getFavourites() {
    const res = await fetch(`${("TURBOPACK compile-time value", "https://web422-a3-user-api-smoky.vercel.app/api/user")}/favourites`, {
        headers: {
            Authorization: `JWT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authenticate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])()}`
        }
    });
    if (res.status === 200) return res.json();
    return [];
}
async function addToFavourites(id) {
    const res = await fetch(`${("TURBOPACK compile-time value", "https://web422-a3-user-api-smoky.vercel.app/api/user")}/favourites/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `JWT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authenticate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])()}`
        }
    });
    if (res.status === 200) return res.json();
    return [];
}
async function removeFromFavourites(id) {
    const res = await fetch(`${("TURBOPACK compile-time value", "https://web422-a3-user-api-smoky.vercel.app/api/user")}/favourites/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `JWT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authenticate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])()}`
        }
    });
    if (res.status === 200) return res.json();
    return [];
}
}),
"[project]/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authenticate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/authenticate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$userData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/userData.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Form.js [ssr] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Alert.js [ssr] (ecmascript) <export default as Alert>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function Login() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [favouritesList, setFavouritesList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favouritesAtom"]);
    async function updateAtom() {
        setFavouritesList(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$userData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getFavourites"])());
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authenticate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["authenticateUser"])(user, password);
        if (success) {
            await updateAtom();
            router.push("/");
        } else {
            setWarning("Invalid login.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                variant: "danger",
                children: warning
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 34,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                children: "Username"
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                type: "text",
                                onChange: (e)=>setUser(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                type: "password",
                                onChange: (e)=>setPassword(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "submit",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 35,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__c8d2a03e._.js.map