const e=document.querySelector(".top"),t=document.querySelector(".top__svg--path"),o=t.getTotalLength();t.style.strokeDasharray=`${o} ${o}`,t.style.transition="stroke-dashoffset 20ms";const c=()=>window.pageXOffset||document.documentElement.scrollTop;function r(){return{searchForm:document.querySelector("#search-form"),searchInput:document.querySelector(".search-input"),searchBtn:document.querySelector(".search-button"),imagesContainer:document.querySelector(".galary-list"),paginationList:document.querySelector(".pagination"),checkBoxEl:document.querySelector('[name="ligthswitcher"]'),bodyEl:document.querySelector("body"),addWatchBtn:document.querySelector(".add-watch-js"),removeWatchBtn:document.querySelector(".remove-watch-js"),addQueueBtn:document.querySelector(".add-queue-js"),removeQueueBtn:document.querySelector(".remove-queue-js")}}window.addEventListener("scroll",(()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,r=o-c()*o/e;t.style.strokeDashoffset=r})(),c()>600?e.classList.add("top--active"):e.classList.remove("top--active")})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var s={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};"off"===s.load("light")&&(r().checkBoxEl.checked=!0,r().bodyEl.classList.add("night")),r().checkBoxEl.addEventListener("change",(function(){r().checkBoxEl.checked?(s.save("light","off"),r().bodyEl.classList.add("night")):(r().bodyEl.classList.remove("night"),s.save("light","on"))}));
//# sourceMappingURL=my-library.798c731f.js.map
