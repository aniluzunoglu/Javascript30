const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {   // make your function work once only after wait parameter 
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function checkSlide(e) {
    // loop over every single image and figure out where the image need to be shown
    // once the image is picking, the image should be shown.

    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // half way through the image
        //bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;  // offsetTop = how far the top of the image is from the top of the page
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast)
        {
            sliderImage.classList.add('active');
        }
        else{
            sliderImage.classList.remove('active');
        }
    });

}

window.addEventListener('scroll', debounce(checkSlide));