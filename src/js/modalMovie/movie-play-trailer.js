import getRefs from '../get-refs';

const refs = getRefs();

export default function playTrailer({key: trailer, site}) {
  const playTrailerBtnMarkup = `<button class="button-modal play-trailer" type="button">
                                Watch trailer
                            </button>`;

  const btnContainer = document.querySelector('.md-modal-buttons');
  btnContainer.insertAdjacentHTML('beforeend', playTrailerBtnMarkup);

  const playerWidth = Math.round(window.innerWidth * 0.8);
  const playerHeight = Math.round(playerWidth / 1.77777);

  const playTrailerBtn = document.querySelector('.play-trailer');
  playTrailerBtn.addEventListener('click', onPlayTrailerClick);

  function onPlayTrailerClick(e) {
    const iframe = `<iframe class="player" id="player" type="text/html" width="${playerWidth}" height="${playerHeight}"
                      src="http://www.youtube.com/embed/${trailer}?enablejsapi=1"
                      frameborder="0">
                    </iframe>`;
    //const playerContainer = document.querySelector('.player');
    //playerContainer.insertAdjacentHTML('beforeend', iframe);
    refs.player.insertAdjacentHTML('beforeend', iframe);
    
    // const playerBackdrop = document.querySelector('.player-backdrop');
    // playerBackdrop.classList.remove('is-hidden');
    refs.playerBackdrop.classList.remove('is-hidden');
    
    refs.playerBackdrop.addEventListener('click', onPlayerBackdropClick);
    function onPlayerBackdropClick(e) {
      if (e.target === refs.playerBackdrop) {
        refs.playerBackdrop.classList.add('is-hidden');
        refs.player.innerHTML = '';
      }
    }
  }
  
  window.addEventListener('keydown', onEscPress);

  function onEscPress(e) {
    if (e.code === 'Escape') {
      refs.playerBackdrop.classList.add('is-hidden');
      refs.player.innerHTML = '';
      document.removeEventListener('keydown', onEscPress);
    }
  }
}