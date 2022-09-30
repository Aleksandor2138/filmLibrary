import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getRefs from '../get-refs';

const refs = getRefs();

export default function addToWatchOrQueue(movieDetails) {
  const { id, title, poster_path, genres, release_date, vote_average } = movieDetails;

  const addWatchBtn = refs.modalContent.querySelector('.add-watch-js');
  const removeWatchBtn = refs.modalContent.querySelector('.remove-watch-js');
  const addQueueBtn = refs.modalContent.querySelector('.add-queue-js');
  const removeQueueBtn = refs.modalContent.querySelector('.remove-queue-js');

  let watched = localStorage.getItem('Watched');
  let queue = localStorage.getItem('Queue');

  const filmInfo = {
    id,
    title,
    poster_path,
    genres,
    release_date,
    vote_average,
  };

  if (watched !== null) {
    watched = JSON.parse(watched);
    const isFilmWatched = watched.find(film => film.id === id);
    if (isFilmWatched !== undefined) {
      addWatchBtn.classList.add('vissualy-hidden');
      removeWatchBtn.classList.remove('vissualy-hidden');
    }
  } else {
    localStorage.setItem('Watched', JSON.stringify([]));
    watched = JSON.parse(localStorage.getItem('Watched'));
  }

  if (queue !== null) {
    queue = JSON.parse(queue);
    const isFilmQueue = queue.find(film => film.id === id);
    if (isFilmQueue !== undefined) {
      addQueueBtn.classList.add('vissualy-hidden');
      removeQueueBtn.classList.remove('vissualy-hidden');
    }
  } else {
    localStorage.setItem('Queue', JSON.stringify([]));
    queue = JSON.parse(localStorage.getItem('Queue'));
  }

  function addFilmToWatched() {
    if (watched !== null) {
      watched.push(filmInfo);
      localStorage.setItem('Watched', JSON.stringify(watched));
    }

    if (queue !== null) {
      const isFilmQueue = queue.find(film => film.id === id);
      if (isFilmQueue !== undefined) {
        removeFilmFromQueue();
      }
    }

    addWatchBtn.classList.add('vissualy-hidden');
    removeWatchBtn.classList.remove('vissualy-hidden');

    Notify.success(`The movie "${title}" has been added to watched`);
  }

  function addFilmToQueue() {
    if (queue !== null) {
      queue.push(filmInfo);
      localStorage.setItem('Queue', JSON.stringify(queue));
    }

    if (watched !== null) {
      const isFilmWatched = watched.find(film => film.id === id);
      if (isFilmWatched !== undefined) {
        removeFilmFromWatched();
      }
    }

    addQueueBtn.classList.add('vissualy-hidden');
    removeQueueBtn.classList.remove('vissualy-hidden');

    Notify.success(`The movie "${title}" has been added to the queue`);
  }

  function removeFilmFromWatched() {
    const index = watched.indexOf(watched.find(film => film.id === id));

    watched.splice(index, 1);
    localStorage.setItem('Watched', JSON.stringify(watched));

    addWatchBtn.classList.remove('vissualy-hidden');
    removeWatchBtn.classList.add('vissualy-hidden');

    Notify.info(`The film "${title}" has been removed from watched`);
  }

  function removeFilmFromQueue() {
    const index = queue.indexOf(queue.find(film => film.id === id));

    queue.splice(index, 1);
    localStorage.setItem('Queue', JSON.stringify(queue));

    addQueueBtn.classList.remove('vissualy-hidden');
    removeQueueBtn.classList.add('vissualy-hidden');

    Notify.info(`The film "${title}" been removed from the queue`);
  }

  addWatchBtn.addEventListener('click', addFilmToWatched);
  addQueueBtn.addEventListener('click', addFilmToQueue);

  removeWatchBtn.addEventListener('click', removeFilmFromWatched);
  removeQueueBtn.addEventListener('click', removeFilmFromQueue);
}
