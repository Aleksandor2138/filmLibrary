export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    searchInput: document.querySelector('.search-input'),
    searchBtn: document.querySelector('.search-button'),
    imagesContainer: document.querySelector('.galary-list'),
    checkBoxEl: document.querySelector('[name="ligthswitcher"]'),
    bodyEl: document.querySelector('body'),
  };
}
