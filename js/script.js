
const largeImageDiv = document.getElementById('largeImageDiv');
const smallImages = document.querySelectorAll('.small-image');


const originalText = 'Original text';
const emptyURL = ''; 


function updateLargeImage(imageElement) {
    largeImageDiv.style.backgroundImage = `url(${imageElement.src})`;
    largeImageDiv.textContent = imageElement.alt;
}


function resetLargeImage() {
    largeImageDiv.style.backgroundImage = emptyURL;
    largeImageDiv.textContent = originalText;
}


function addTabFocusAttribute() {
    smallImages.forEach((image, index) => {

        image.setAttribute('tabindex', index + 1);
    });
}


addTabFocusAttribute();


smallImages.forEach((image) => {
  
    image.addEventListener('mouseover', function() {
        updateLargeImage(this);
    });
    image.addEventListener('focus', function() {
        updateLargeImage(this);
    });

    
    image.addEventListener('mouseout', resetLargeImage);
    image.addEventListener('blur', resetLargeImage);
});