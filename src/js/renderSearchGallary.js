import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import imageDefaults from '../images/default.jpg'
import getRefs from './get-refs';

const pathImage = "https://image.tmdb.org/t/p/";

const refs = getRefs();


export default function  renderMarkupImageInfo (galleryItems) {
  const renderGallary =  galleryItems.results.map(({id, title, poster_path, genre_str, release_date, vote_average}) => {
    return `
          <li class="galary-list__item" data-movie-id = ${id}>
                <div class="galary-list-item-wraper">
                    <img
                      src=${!poster_path ? imageDefaults: `${pathImage}original${poster_path}`}
                      alt="galary"
                      class="galary-list-item-img"
                      data-movie-id=${id}
                      loading="lazy"
                    />
                  <div class="film-data first">
                    <p class="films-name">${title}</p>
                    <div class="film-data-wraper">
                      <p class="films-genre">
                        ${genre_str.join(", ")} &#124; ${release_date.slice(0,4)}
                      </p>
                      <p class="film-rating">${vote_average}</p>
                    </div>
                  </div>
                </div> 
            </li>
    `;
  }).join("");

  refs.imagesContainer.insertAdjacentHTML('beforeend', renderGallary);
  gallery.refresh();
}



const gallery = new SimpleLightbox(".galary-list a", {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  showCounter: false,
  nextOnImageClick: true,
  scrollZoom: false,
});