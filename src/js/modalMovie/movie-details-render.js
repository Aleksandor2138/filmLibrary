import getRefs from '../get-refs';

const refs = getRefs();

export default function renderMovieDetails(movieDetails) {
  const {
    genres: genres_original,
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = movieDetails;

  const genres = genres_original.map(genre => genre.name).join(', ');

  const movieDetailsMarkup = `
    <img class="modal-image" src="https://image.tmdb.org/t/p/w500${poster_path}" />
    <div class="modal-data-box">
        <h2 class="modal-title">${title}</h2>
        <table class="modal-table-box">
            <tr>
              <td class="modal-data">Vote / Votes</td>
              <td class="modal-data-value">
                <span class="modal-rating">${vote_average}</span>/
                <span class="modal-rating-two">${vote_count}</span>
              </td>
            </tr>
            <tr>
              <td class="modal-data">Popularity</td>
              <td class="modal-data-value">${popularity}</td>
            </tr>
            <tr>
              <td class="modal-data">Original Title</td>
              <td class="modal-data-value">${original_title}</td>
            </tr>
            <tr>
              <td class="modal-data">Genre</td>
              <td class="modal-data-value">${genres}</td>
            </tr>
          </table>
          <h3 class="modal-title-about">ABOUT</h3>
          <p class="modal-description">
            ${overview}
          </p>
          <div class="md-modal-buttons">
            <button class="button-modal add-watch-js" type="button" id="first-btn">
              Add to watch
            </button>
            <button class="button-modal vissualy-hidden remove-watch-js" type="button" id="first-btn">
              Remove from watch
            </button>
            <button class="button-modal add-queue-js" type="button">Add to queue</button>
            <button class="button-modal vissualy-hidden remove-queue-js" type="button">Remove from queue</button>
          </div>
        </div>
`;
  refs.modalContent.insertAdjacentHTML('beforeend', movieDetailsMarkup);
}
