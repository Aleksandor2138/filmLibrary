import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import axios from 'axios';
import getRefs from './get-refs';
import renderMarkupImageInfo from '../js/renderSearchGallary';
import { createMarkupElement } from './renderMarkup';
import { makeSkeletonLoader } from './skeleton-loader';


const refs = getRefs();


const API_KEY = 'bb9be7856d820d280efdc8865f07d5b2';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher



let perPage = 12;
let totalFilmsOfResponse;
let totalPageOfResponse;
let page = 1;




// ==============================

export default  async function  onSearch (e) {
    e.preventDefault();
    page = 1;
    let searchQuery = refs.searchInput.value.toLowerCase().trim();
    try {
    const URL = await axios.get(`${BASE_URL}?api_key=${API_KEY}&query=${searchQuery}&per_page=${perPage}&page=${page}`);

    if (URL.data.results.length === 0) {
        Notiflix.Notify.warning('❌ Sorry, there are no images matching your search query. Please try again.', {
            timeout: 2000,
            });
    } 
    totalFilmsOfResponse = URL.data.total_results;
    totalPageOfResponse = Math.floor(totalFilmsOfResponse / perPage);

  
    console.log(URL.data);

    // const {results} = URL.data;
    // if (URL.data.results.length > 0) {
    //     Notiflix.Notify.success (
    //       ` We found ${totalFilmsOfResponse} images.`, {
    //         timeout: 2000,}
    //     )
    //     }
        

        refs.imagesContainer.innerHTML = '';
        refs.imagesContainer.insertAdjacentHTML(
          'afterbegin',
          URL.data.results.map(createMarkupElement).join('')
        );
        makeSkeletonLoader();
    } catch (error) {
        console.log(error);
      }
    }


//  fetchImages() 


    async function fetchImages() {
      const searchQuery = refs.searchInput.value;
      try {
        const URL = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
        );
        if (URL.data.results.length === 0 || totalPageOfResponse === page) {
          Notiflix.Notify.warning("We're sorry, but this is the last page.");
        }
        console.log(page);
        // renderMarkupImageInfo(URL.data);
        refs.imagesContainer.insertAdjacentHTML(
          'afterbegin',
          URL.data.results.map(createMarkupElement).join(''));
      } catch (error) {
        console.log(error);
      }
    }

    function addMore() {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          fetchImages();
          page += 1;
        }
      }