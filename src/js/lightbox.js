import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function initLightBox() {
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
  });
}

export function resetLightBox() {
  lightbox.destroy();
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
  });
}