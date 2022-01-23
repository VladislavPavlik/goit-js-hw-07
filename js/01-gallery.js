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
const onPictureClick = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"width="1280" height="960">`);
  instance.show();

  window.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}
wrapper.addEventListener('click', onPictureClick);