import { galleryItems } from './gallery-items.js';
// Change code below this line
const wrapper = document.querySelector('.gallery');
galleryItems.forEach((element) => {
    wrapper.insertAdjacentHTML('beforeend', `
    <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
</a>`
    );
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['<', '>'],
});

