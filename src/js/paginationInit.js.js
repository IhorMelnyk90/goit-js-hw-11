import { refs } from "./refs";

let currentPage = 1;
let perPages = 40;

export function paginationInit(data) {
    currentPage = data.total / perPages;
    if (!Number.isInteger(currentPage)) {
      currentPage = Math.trunc(currentPage) + 1;
    }
    if (currentPage > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
    }
    return currentPage;
  };