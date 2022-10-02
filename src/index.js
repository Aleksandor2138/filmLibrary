// import Notiflix from 'notiflix';
// import axios from 'axios';
import getRefs from './js/get-refs';
// import renderMarkupImageInfo from './renderMarkup';
import openMovieDetails from './js/movie-details-open';
import footerModal from './js/footer-modal-open';
import { createMarkupElement } from './js/renderMarkup';
import MoviesApi from './js/moviesApi';
import './js/nightMode';
import topUp from './js/top.js';
import './js/filter';

import { spinnerOn } from './js/loader';
import onSearch  from './js/onSearch';


import renderPagination from './js/pagination';

import userAuth from './js/auth'


const refs = getRefs();

const moviesApi = new MoviesApi();

document.addEventListener('DOMContentLoaded', () => {
  fetchTrendMovies();
});

// ------------ OPEN MOVIE MODAL --------------------

refs.imagesContainer.addEventListener('click', onMovieCardClick);
function onMovieCardClick(e) {
  if (e.target.classList.contains('gallery__img')) {
    e.preventDefault();
    const movieId = e.target.dataset.movieId;
    openMovieDetails(movieId);
  }
}
// ---------- OPEN MOVIE MODAL END -------------------

footerModal();

async function fetchTrendMovies() {
  try {
    const { results, total_results, page } =
      await moviesApi.fetchTrendWeekMovies();

    results.length &&
      refs.imagesContainer.insertAdjacentHTML(
        'afterbegin',
        results.map(createMarkupElement).join('')
      );

    spinnerOn();
  } catch (error) {
    console.log(error);
  }
}

refs.searchForm.addEventListener('submit', onSearch);
topUp();
