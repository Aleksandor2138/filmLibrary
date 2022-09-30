import getRefs from '../get-refs';

const refs = getRefs();

export default async function playTrailer({trailer, site}) {
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
    // const iframe = ;
    //const playerContainer = document.querySelector('.player');
    //playerContainer.insertAdjacentHTML('beforeend', iframe);
    refs.player.insertAdjacentElement('beforeend', `<iframe class="player" id="player" type="text/html" width="${playerWidth}" height="${playerHeight}"
                          src="http://www.youtube.com/embed/${trailer}?enablejsapi=1"
                      frameborder="0"></iframe>`);
    
    // const playerBackdrop = document.querySelector('.player-backdrop');
    // playerBackdrop.classList.remove('is-hidden');
    refs.playerBackdrop.classList.remove(is-hidden);
  
    refs.playerBackdrop.addEventListener('click', onPlayerBackdropClick);
  }
  
  window.addEventListener('keydown', onEscPress);

  function onEscPress(e) {
    if (e.code === 'Escape') {
      playerBackdrop.classList.add('is-hidden');
      playerContainer.innerHTML = '';
      document.removeEventListener('keydown', onEscPress);
    }
  }
}

function onPlayerBackdropClick(e) {
      console.log(e);
      if (e.target === refs.playerBackdrop) {
        refs.playerBackdrop.classList.add('is-hidden');
        refs.player.innerHTML = '';
      }
    }