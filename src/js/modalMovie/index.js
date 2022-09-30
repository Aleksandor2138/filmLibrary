import getRefs from '../get-refs';
import renderMovieDetails from './movie-details-render';
import playTrailer from './movie-play-trailer';
import addToWatchOrQueue from './add-to-watch-queue'; // FT-18, FT-19 (Функціонал для кнопок "Додати до переглянутих", "Додати до черги")

const refs = getRefs();

export default async function openMovieDetails(movieDetailsPromise) {
  refs.backdrop.classList.remove('is-hidden');

  try {
    const movieDetails = await movieDetailsPromise; 
    
    renderMovieDetails(movieDetails);
    addToWatchOrQueue(movieDetails); // FT-18, FT-19 (Функціонал для кнопок "Додати до переглянутих", "Додати до черги")
    // console.log(movieDetails.data);
    refs.modalContent.focus();
    if ( Object.keys(movieDetails).includes("resultVideo") &&  movieDetails.resultVideo.length) {
      playTrailer(movieDetails.resultVideo[0]);
    }

    // ----------------------------------------- CLOSE MODAL ---------------------------------------------

    const closeBtn = refs.backdrop.querySelector('.btn-close');
    closeBtn.addEventListener('click', onCloseBtnClick);
    function onCloseBtnClick() {
      // document.getElementById('first-btn').blur();
      refs.backdrop.classList.add('is-hidden');
      refs.modalContent.innerHTML = '';
    }

    refs.backdrop.addEventListener('click', onBackdropClick);
    function onBackdropClick(e) {
      if (e.target === refs.backdrop) {
        refs.modalContent.getElementById('first-btn').blur();
        refs.backdrop.classList.add('is-hidden');
        refs.modalContent.innerHTML = '';
      }
    }

    document.addEventListener('keydown', onEscPress);
    function onEscPress(event) {
      if (event.code === 'Escape') {
        refs.modalContent.getElementById('first-btn').blur();
        refs.backdrop.classList.add('is-hidden');
        refs.modalContent.innerHTML = '';
        document.removeEventListener('keydown', onEscPress);
      }
    }
  }
  catch (error) {
  console.log(error);
}
}