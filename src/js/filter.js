import { genresNames } from './genres-names';

import {moviesApi, customPagination} from './gallery';

import getRefs from './get-refs';

// import { renderPaginationbyGenre } from './pagination';


const refs = getRefs();

// set genres
let selectedGenre = [];
let selectedGenreName = [];
setGenre();

async function setGenre() {

  try {
    const genre  = await moviesApi.getAllGenres();

    genre.forEach(genre => {
    const elem = document.createElement('li');
    elem.classList.add('filter__genre-item');
    elem.id = genre.id;
    elem.innerText = genre.name;
    elem.addEventListener('click', () => {
      if (selectedGenre.length === 0) {
        selectedGenre.push(genre.id);
        selectedGenreName.push(genre.name);
      } else {
        if (selectedGenre.includes(genre.id)) {
          selectedGenre.forEach((id, index) => {
            if (id === genre.id) {
              selectedGenre.splice(index, 1);
              selectedGenreName.splice(index, 1);
            }
          });
        } else {
          selectedGenre.push(genre.id);
          selectedGenreName.push(genre.name);
        }
      }
      
      moviesApi.genres = selectedGenre;
      moviesApi.currentFetch = moviesApi.fetchMovieByGenres;  
      customPagination.moveToPage(1)

      highlightSelection();
      updateFilterSelectBtn();
    });
    refs.filterGenreList.append(elem);
  });
  } catch (error) {
    
  }
}

// highlight selected genre
function highlightSelection() {
  const genres = document.querySelectorAll('.filter__genre-item');
  genres.forEach(genre => {
    genre.classList.remove('filter__genre-item--highlight');
  });
  if (selectedGenre.length !== 0) {
    refs.filterClear.classList.remove('filter--hidden');
    selectedGenre.forEach(id => {
      const filterHighlightedGenre = document.getElementById(id);
      filterHighlightedGenre.classList.add('filter__genre-item--highlight');
    });
  } else {
    refs.filterClear.classList.add('filter--hidden');
    moviesApi.currentFetch = moviesApi.fetchTrendWeekMovies;
    customPagination.moveToPage(1)
  }
}

// render movies by genre

export async function showMovies() {
  try {
    const { results, page, total_pages } = await moviesApi.fetchMovieByGenres(
      selectedGenre
    );
    refs.imagesContainer.innerHTML = '';

    results.length &&
      refs.imagesContainer.insertAdjacentHTML(
        'afterbegin',
        results.map(createMarkupElement).join('')
      );
    renderPaginationbyGenre(page, total_pages);
  } catch (error) {
    console.log(error);
  }
}

// clear filter
refs.filterClear.addEventListener('click', onFilterClearBtn);

function onFilterClearBtn() {
  if (selectedGenre.length != 0) {
    selectedGenre.forEach(id => {
      const filterHighlightedGenre = document.getElementById(id);
      filterHighlightedGenre.classList.remove('filter__genre-item--highlight');
    });
  }
  selectedGenre = [];
  selectedGenreName = [];
  refs.filterClear.classList.add('filter--hidden');
  // refs.filterWrap.classList.remove('filter--active');
  refs.filterSelectBtn.innerHTML = 'Select genre';
  
  moviesApi.currentFetch = moviesApi.fetchTrendWeekMovies
  customPagination.moveToPage(1);
}

// custom select
refs.filterSelectBtn.addEventListener('click', onFilterSelectBtn);

function onFilterSelectBtn() {
  refs.filterWrap.classList.toggle('filter--active');
}

function updateFilterSelectBtn() {
  if (selectedGenreName.length === 0) {
    refs.filterSelectBtn.innerHTML = 'Select genre';
    return;
  }
  if (selectedGenreName.length === 1) {
    refs.filterSelectBtn.innerHTML = selectedGenreName[0];
    return;
  }
  if (selectedGenreName.length > 1) {
    refs.filterSelectBtn.innerHTML = selectedGenreName[0] + '...';
    return;
  }
}
