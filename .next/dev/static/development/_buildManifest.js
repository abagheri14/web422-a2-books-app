self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/about": [
    "static/chunks/pages/about.js"
  ],
  "/books": [
    "static/chunks/pages/books.js"
  ],
  "/favourites": [
    "static/chunks/pages/favourites.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/books",
    "/favourites",
    "/login",
    "/register",
    "/works/[workId]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()