// Import our custom CSS
import './scss/styles.scss';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// import { Offcanvas, Collapse } from 'bootstrap';

const gallery = document.querySelector('.gallery');
let msnry;

if (gallery) {
  imagesLoaded(gallery, () => {
    console.log('loaded');
    msnry = new Masonry(gallery, {
      itemSelector: '.gallery-item',
      columnWidth: '.gallery-sizer',
      gutter: '.gallery-gutter-sizer',
      percentPosition: true
    });
  });
}
