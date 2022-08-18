import { resetLightBox } from "./lightbox";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from "./refs";
import { renderImagesMore } from "./renderImages";
import { paginationInit } from "./paginationInit.js";

const axios = require('axios');

let page = 1;

export async function pagination() {
    const searchRequest = refs.form.elements.searchQuery.value;
  
    page += 1;
  
    const data = await axios
      .get(
        `?key=6233847-6e262c1189fcf23cdea715b95&q=${searchRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`,
      )
      .then(r => r.data);
      renderImagesMore(data.hits);
  
    let totalPages = paginationInit(data);
  
    resetLightBox();
    if (page === totalPages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      Notify.success(`All images loaded!`);
    }
  }

