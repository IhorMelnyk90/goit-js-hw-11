import './scss/main.scss'

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from './js/refs';
import { fetchImages } from './js/fetchImages';
import { renderImages } from './js/renderImages'
import { initLightBox } from './js/lightbox';
import { paginationInit } from './js/paginationInit.js';
import { pagination} from './js/pangination.js';




refs.form.addEventListener('submit', renderGallery);
refs.loadMoreBtn.addEventListener('click', pagination);

async function renderGallery(event) {
  event.preventDefault();
  refs.loadMoreBtn.classList.add('is-hidden');

  const searchRequest = event.target.searchQuery.value.trim();
  if (!searchRequest) {
    Notify.failure('Please, enter some words');
    return;
  }

  try {
    const data = await fetchImages(searchRequest).then(response => response.data);
    if (data.total === 0) {
      Notify.failure('Sorry, no images were found for your request.');
      return;
    }
    renderImages(data.hits);
    initLightBox();
    Notify.success(`Hooray! We found  ${data.total} images.`);
    paginationInit(data);
    console.log(data);
  } catch {
    console.dir(error);
  }
}


