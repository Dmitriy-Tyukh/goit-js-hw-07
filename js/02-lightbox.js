import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItem = document.querySelector('.gallery');

console.log('galleryItem', galleryItem);

const ItemsMarkup = galleryItemsMarkup(galleryItems);

galleryItem.innerHTML = ItemsMarkup;

let imageLightBox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
});

function galleryItemsMarkup(gallery) {
    return galleryItems.map(({ preview, original, description }) =>
        ` <a class="gallery__item" loading="lazy" href="${original}">
            <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
        </a> `)
        .join('');
}