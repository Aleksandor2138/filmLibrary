!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("d43SW");r("5jy86");var a=r("3vKGz"),o=r("74192"),d=r("5cZrK"),l=r("gBkTQ"),f=r("2EooH"),u=r("cHsZg");r("euqRf"),(0,i.default)();var c=(0,a.default)(),s=c.watchedBtn,v=c.queuedBtn,g=c.galleryList;u.renderLibrary.functionRender=o.default,u.customPagination.moveToPage(1),s.addEventListener("click",(function(){u.renderLibrary.functionRender=o.default,u.customPagination.moveToPage(1)})),v.addEventListener("click",(function(){u.renderLibrary.functionRender=d.default,u.customPagination.moveToPage(1)})),g.addEventListener("click",(function(e){if(e.target.classList.contains("gallery__img")){e.preventDefault();var n=e.target.dataset.movieId;(0,l.default)(u.moviesApi.fetchMovieByID(n))}})),(0,f.default)()}();
//# sourceMappingURL=my-library.eecd776b.js.map