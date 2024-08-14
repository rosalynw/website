const galleryContainer = document.querySelector('.gallery-container');
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

  setCurrentState(direction) {
    if (direction.className.includes('gallery-controls-previous')) {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  // setControls() {
  //   this.carouselControls.forEach(control => {
  //     const controlButton = document.createElement('button');
  //     controlButton.className = `gallery-controls-${control}`;
  //     controlButton.innerText = control;
  //     galleryControlsContainer.appendChild(controlButton);
  //   });
  // }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
        this.stopAutoplay();
      });
    });
  }

  useImageClicks() {
    this.carouselArray.forEach((el) => {
      el.addEventListener('click', () => {
        const targetIndex = this.carouselArray.indexOf(el);
        const currentIndex = 1; // The center image index
        const moves = targetIndex - currentIndex;
        
        // Move the target image to the center
        if (moves > 0) {
          // Move right
          for (let j = 0; j < moves; j++) {
            this.carouselArray.push(this.carouselArray.shift());
          }
        } else {
          // Move left
          for (let j = 0; j < Math.abs(moves); j++) {
            this.carouselArray.unshift(this.carouselArray.pop());
          }
        }
        
        this.updateGallery();
        this.stopAutoplay(); // Stop autoplay when an image is clicked
      });
    });
  }
  
  autoplayGallery() {
    if (this.isAutoPlaying) {
      this.autoPlayInterval = setInterval(() => {
        this.setCurrentState({ className: 'gallery-controls-next' });
      }, 3000);
    }
  }

  stopAutoplay() {
    if (this.isAutoPlaying) {
      clearInterval(this.autoPlayInterval);
      this.isAutoPlaying = false;
    }
  }

  start() {
    //this.setControls();
    this.useControls();
    this.useImageClicks();
    this.updateGallery();
    this.autoplayGallery();
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// Start the carousel
exampleCarousel.start();


//Code Typewriter effect
const codeText = `function hellowWorld() {
  console.log("Hello, Whorld!");
}
  
helloWorld();`;

let i = 0;
const speed = 50;
function typeWriter() {
  if (i < codeText.length) {
    document.getElementById("code-text").innerHTML += codeText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);