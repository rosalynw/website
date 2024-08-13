const galleryContainer =document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    this.isAutoPlaying = true;
    this.autoPlayInterval = null;
  }

  updateGallery() {
    this.carouselArray.forEach((el, i) => {
      el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3');
      el.classList.add(`gallery-item-${i + 1}`);
    });
  }

  setCurrentState(direction){
    if (direction.className.includes('gallery-controls-previous')) {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      const controlButton = document.createElement('button');
      controlButton.className = `gallery-controls-${control}`;
      controlButton.innerText = control;
      galleryControlsContainer.appendChild(controlButton);
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();