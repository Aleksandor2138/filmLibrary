!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var r=i("d43SW");i("5jy86");var s=i("3vKGz"),d=i("5118m"),l=i("kvC6y"),o=(s=i("3vKGz"),i("iU1Pc")),c=i("cHsZg"),u=(0,s.default)(),g=u.galleryList,f=u.watchedBtn,v=u.queuedBtn,h=u.paginationList;function L(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;try{f.classList.add("selected"),v.classList.remove("selected")}catch(e){return}var i="";try{var r;n=localStorage.getItem("Watched"),g.innerHTML="";var s=JSON.parse(n);s.slice((t-1)*a,t*a).map((function(e){r=e.genreNames,delete e.genres,e.genre_str=r,i+=(0,d.createMarkupElementGallery)(e)})),h.classList.remove("is-hidden"),c.customPagination.setTotalPages(Math.ceil(s.length/a)),!s.length&&h.classList.add("is-hidden")}catch(t){return e(o).Notify.warning("There is no watched list!"),h.classList.add("is-hidden"),void(0,l.spinnerOn)()}g.insertAdjacentHTML("beforeend",i),(0,l.spinnerOn)()}d=i("5118m"),l=i("kvC6y"),s=i("3vKGz"),o=i("iU1Pc"),c=i("cHsZg");var m=(0,s.default)(),p=m.galleryList,y=m.watchedBtn,T=m.queuedBtn,w=m.paginationList;function P(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;try{T.classList.add("selected"),y.classList.remove("selected")}catch(e){return}var i="";try{var r;n=localStorage.getItem("Queue"),p.innerHTML="";var s=JSON.parse(n);s.slice((t-1)*a,t*a).map((function(e){r=e.genreNames,delete e.genres,e.genre_str=r,i+=(0,d.createMarkupElementGallery)(e)})),w.classList.remove("is-hidden"),c.customPagination.setTotalPages(Math.ceil(s.length/a)),!s.length&&w.classList.add("is-hidden")}catch(t){return e(o).Notify.warning("There is no queue list!"),w.classList.add("is-hidden"),void(0,l.spinnerOn)()}p.insertAdjacentHTML("beforeend",i),(0,l.spinnerOn)()}var M=i("gBkTQ"),b=i("2EooH");c=i("cHsZg");i("euqRf"),(0,r.default)();var O=(0,s.default)(),k=O.watchedBtn,B=O.queuedBtn,E=O.galleryList;c.renderLibrary.functionRender=L,c.customPagination.moveToPage(1),k.addEventListener("click",(function(){c.renderLibrary.functionRender=L,c.customPagination.moveToPage(1)})),B.addEventListener("click",(function(){c.renderLibrary.functionRender=P,c.customPagination.moveToPage(1)})),E.addEventListener("click",(function(e){if(e.target.classList.contains("gallery__img")){e.preventDefault();var t=e.target.dataset.movieId;(0,M.default)(c.moviesApi.fetchMovieByID(t))}})),(0,b.default)()}();
//# sourceMappingURL=my-library.6faf378e.js.map
