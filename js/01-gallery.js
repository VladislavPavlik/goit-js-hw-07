import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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
</a>
    `
    );
});
 
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}"width="1280" height="960">`);
  instance.show();

  window.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}