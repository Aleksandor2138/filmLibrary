!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=i);var r=i("bpxeT"),o=i("2TvXO"),l=i("3vKGz"),c=i("gBkTQ");var s=function(){var e={footerModalOpen:document.querySelector(".footer-modal-open"),footerModalClose:document.querySelector(".btn-close"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function n(n){n.preventDefault(),console.log("closed"),e.modal.classList.add("is-hidden")}function t(e){"Escape"===e.code&&n(e)}e.footerModalOpen.addEventListener("click",(function(n){n.preventDefault(),console.log("kurva open"),window.addEventListener("keydown",t),e.modal.classList.remove("is-hidden")})),e.footerModalClose.addEventListener("click",n),e.backdrop.addEventListener("click",n),document.addEventListener("keypress",(function(e){console.log(e.code),"Escape"===e.code&&n()}))},d=i("5118m"),u=i("KcxNJ");i("5jy86"),i("d43SW");i("bpxeT"),i("2TvXO");var p=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];i("5118m"),r=i("bpxeT"),o=i("2TvXO"),u=i("KcxNJ"),l=i("3vKGz"),d=i("5118m");i("9iflO");var f=(0,l.default)(),m=new(0,u.default);document.addEventListener("DOMContentLoaded",(function(){g(1)}));function g(){return v.apply(this,arguments)}function v(){return(v=e(r)(e(o).mark((function n(){var t,a,i,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.fetchTrendWeekMovies();case 3:t=e.sent,a=t.results,i=t.page,r=t.total_pages,f.imagesContainer.innerHTML="",a.length&&f.imagesContainer.insertAdjacentHTML("afterbegin",a.map(d.createMarkupElement).join("")),_(i,r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function _(e,n){e;var t="",a=e-1,i=e+2,r=e+1;e>1&&(t+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),e>2&&(t+='<li class="pagination__number display-none">1</li>'),e>4&&(t+='<li class="pagination__number display-none">...</li>'),e>3&&(t+='<li class="pagination__number">'.concat(e-2,"</li>")),e>=2&&(t+='<li class="pagination__number">'.concat(a,"</li>")),t+='<li class="pagination__number active">'.concat(e,"</li>"),e<n-1&&(t+='<li class="pagination__number">'.concat(r,"</li>")),e<n-2&&(t+='<li class="pagination__number">'.concat(i,"</li>")),e<=n-1&&(e<n-3&&(t+='<li class="pagination__number display-none">...</li>'),t+='<li class="pagination__number display-none">'.concat(n,"</li>")),e<n&&(t+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),f.paginationList.innerHTML=t,f.paginationList.addEventListener("click",h)}function h(e){if("LI"===e.target.nodeName){var n=e.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),n){case"←":m.previousPage();break;case"→":m.nextPage();break;case"...":break;default:m.eventPage(n)}g()}}function L(e,n){e;var t="",a=e-1,i=e+2,r=e+1;e>1&&(t+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),e>2&&(t+='<li class="pagination__number display-none">1</li>'),e>4&&(t+='<li class="pagination__number display-none">...</li>'),e>3&&(t+='<li class="pagination__number">'.concat(e-2,"</li>")),e>=2&&(t+='<li class="pagination__number">'.concat(a,"</li>")),t+='<li class="pagination__number active">'.concat(e,"</li>"),e<n-1&&(t+='<li class="pagination__number">'.concat(r,"</li>")),e<n-2&&(t+='<li class="pagination__number">'.concat(i,"</li>")),e<=n-1&&(e<n-3&&(t+='<li class="pagination__number display-none">...</li>'),t+='<li class="pagination__number display-none">'.concat(n,"</li>")),e<n&&(t+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),f.paginationList.innerHTML=t,f.paginationList.addEventListener("click",b)}function b(e){if("LI"===e.target.nodeName){var n=e.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),n){case"←":m.previousPage();break;case"→":m.nextPage();break;case"...":break;default:m.eventPage(n)}M()}}u=i("KcxNJ"),l=i("3vKGz");var y=new(0,u.default),k=(0,l.default)(),w=[],E=[];function M(){return T.apply(this,arguments)}function T(){return(T=e(r)(e(o).mark((function n(){var t,a,i,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.fetchMovieByGenres(w);case 3:t=e.sent,a=t.results,i=t.page,r=t.total_pages,k.imagesContainer.innerHTML="",a.length&&k.imagesContainer.insertAdjacentHTML("afterbegin",a.map(d.createMarkupElement).join("")),L(i,r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}p.forEach((function(e){var n=document.createElement("li");n.classList.add("filter__genre-item"),n.id=e.id,n.innerText=e.name,n.addEventListener("click",(function(){0===w.length?(w.push(e.id),E.push(e.name)):w.includes(e.id)?w.forEach((function(n,t){n===e.id&&(w.splice(t,1),E.splice(t,1))})):(w.push(e.id),E.push(e.name)),M(),document.querySelectorAll(".filter__genre-item").forEach((function(e){e.classList.remove("filter__genre-item--highlight")})),0!==w.length?(k.filterClear.classList.remove("filter--hidden"),w.forEach((function(e){document.getElementById(e).classList.add("filter__genre-item--highlight")}))):(k.filterClear.classList.add("filter--hidden"),g()),0!==E.length?1!==E.length?E.length>1&&(k.filterSelectBtn.innerHTML=E[0]+"..."):k.filterSelectBtn.innerHTML=E[0]:k.filterSelectBtn.innerHTML="Select genre"})),k.filterGenreList.append(n)})),k.filterClear.addEventListener("click",(function(){0!=w.length&&w.forEach((function(e){document.getElementById(e).classList.remove("filter__genre-item--highlight")}));w=[],E=[],k.filterClear.classList.add("filter--hidden"),k.filterContainer.classList.remove("filter--active"),k.filterSelectBtn.innerHTML="Select genre",g()})),k.filterSelectBtn.addEventListener("click",(function(){k.filterContainer.classList.toggle("filter--active")}));var x=i("9iflO"),C=(0,l.default)(),S=new(0,u.default);function H(){return(H=e(r)(e(o).mark((function n(){var t,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.fetchTrendWeekMovies();case 3:t=e.sent,a=t.results,t.total_results,t.page,a.length&&C.imagesContainer.insertAdjacentHTML("afterbegin",a.map(d.createMarkupElement).join("")),(0,x.makeSkeletonLoader)(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){!function(){H.apply(this,arguments)}()})),C.imagesContainer.addEventListener("click",(function(e){if(e.target.classList.contains("gallery__img")){e.preventDefault();var n=e.target.dataset.movieId;(0,c.default)(n)}})),s()}();
//# sourceMappingURL=index.d6a9cb13.js.map
