export default function getRefs() {
    return {
        searchForm: document.querySelector('#search-form'),
        searchInput: document.querySelector('.search-input'),
        searchBtn: document.querySelector('.search-button'),
        imagesContainer: document.querySelector('.galary-list'),

        // ++ ADD
        backdrop: document.querySelector('.backdrop'),
        modalContent: document.querySelector('.modal-content'),
        playerBackdrop: document.querySelector('.player-backdrop'),
        player: document.querySelector('.player')
    }
  }

