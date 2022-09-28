
// import Notiflix from 'notiflix';
// import axios from 'axios';
import getRefs from './get-refs';
// import renderMarkupImageInfo from './renderMarkup';
import createPagination from './js/pagination';
import openMovieDetails from './js/movie-details-open';

import { createMarkupElement } from './js/renderMarkup';
import MoviesApi from './js/moviesApi';

const refs = getRefs();

const moviesApi = new MoviesApi();

document.addEventListener('DOMContentLoaded', () => {
  fetchTrendMovies();
});

document.querySelector('.galary-list').addEventListener('click', onMovieCardClick);

function onMovieCardClick(e) {
  if (e.target.classList.contains('galary-list-item-img')) {
    const movieId = e.target.dataset.movieId;
    openMovieDetails(movieId);
  }
}

async function fetchTrendMovies () {
  try {
    const {results} = await moviesApi.fetchTrendWeekMovies();

    results.length && refs.imagesContainer.insertAdjacentHTML("afterbegin", results.map(createMarkupElement).join(""))
    
  } catch (error) {
    console.log(error);
  }
}
