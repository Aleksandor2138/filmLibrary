import getRefs from "../get-refs";
import { makeSkeletonLoader } from '../../js/skeleton-loader';
import MoviesApi from "./moviesApi";

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

import { Pagination as CustomPagination } from '../custom/pagination/pagination'

import { createMarkupElementGallery } from "./renderMarkup";

const refs = getRefs();

window.matchMedia("(max-width: 768px)").addEventListener("change", (w) => {

  console.log("matches", w.matches);
  customPagination.mobileVersion = w.matches;
  customPagination.moveToPage(customPagination.currentPage);

  if (w.matches) { // If media query matches
  
  document.body.style.backgroundColor = "yellow";
} else {
  document.body.style.backgroundColor = "pink";
}}
)

function renderMovies({ results, total_results, total_pages, page }){

  refs.imagesContainer.innerHTML = "";  

  if (results.length === 0) {
    Notiflix.Notify.warning(
      '❌ Sorry, there are no images matching your search query. Please try again.',
      {
        timeout: 3000,
      }
    );
    return
  }

  if (results.length > 0 && page === 1) {
    Notiflix.Notify.success (
      ` We found ${total_results} images.`, {
        timeout: 3000,}
    )
  }
    
  results.length && refs.imagesContainer.insertAdjacentHTML(
      'afterbegin',
      results.map(createMarkupElementGallery).join(''));

  customPagination.setTotalPages(total_pages);
  
  // Skeleton
  makeSkeletonLoader();
}
const moviesApi = new MoviesApi(renderMovies);
  
const customPagination = new CustomPagination(refs.paginationList,{
    countPoint : 5,
    totalPages : 10,
    onShow: (currentPage) => {
      moviesApi.currentPage = currentPage;
      window.scrollTo({ top: 240, behavior: 'smooth' });
      moviesApi.currentFetch();
    }
    }
  );

export {moviesApi, customPagination}