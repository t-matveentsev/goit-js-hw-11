import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/render-functions.js';
import { getInform } from './js/pixabay-api.js';

const form = document.querySelector('.form-inline');
const list = document.querySelector('.js-list');
const loader = document.querySelector('.loader');

form.addEventListener('submit', searchImages);

function loaderShow() {
  loader.classList.toggle('is-visible');
}

const lightbox = new SimpleLightbox('.images a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function searchImages(event) {
  event.preventDefault();
  list.innerHTML = '';
  const { query } = event.currentTarget.elements;
  let searchInput = query.value.trim();
  if (searchInput === '') {
    iziToast.error({
      title: 'Error',
      message: 'The field cannot be empty!!!',
      position: 'topRight',
    });
    form.reset();
    return;
  }

  loaderShow();

  getInform(searchInput)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
        lightbox.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching data. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => loaderShow());
  form.reset();
}
