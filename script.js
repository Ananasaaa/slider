const images = ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg']; 
let currentIndex = 0; 

const sliderImage = document.querySelector('.sliderImage');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const dots = document.querySelectorAll('.dot');

function updateImage() {
    sliderImage.src = images[currentIndex];
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'inline-block';
} 

function currentSlide(index) {
        currentIndex = index;
        updateImage(); 
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateImage();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    }
    updateImage();
});
 updateImage();