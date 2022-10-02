
import axios from 'axios';
import getRefs from './get-refs';

import { createMarkupElement } from './renderMarkup';
import { spinnerOn } from './loader';
import MoviesApi from '../js/moviesApi';
import createPagination from '../js/pagination';


const refs = getRefs();

const moviesApi = new MoviesApi();

export default  async function  onSearch (e) {
    e.preventDefault();
    await  fetchQMovies(refs.searchInput.value)
 
}


async function fetchQMovies(q) {
  try {
    moviesApi.query = q;
    const { results, total_results, page } =
      await moviesApi.fetchMovieQuery();

    results.length &&
      refs.imagesContainer.insertAdjacentHTML(
        'afterbegin',
        results.map(createMarkupElement).join('')
      );


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


