

function scrollOnce() {
    var carouselItemWidth = document.getElementsByClassName('carousel-item')[0].offsetWidth;
    document.getElementsByClassName('carousel-viewport')[0].scrollLeft += carouselItemWidth;
}

function scrollBackwardsOnce() {
    var carouselItemWidth = document.getElementsByClassName('carousel-item')[0].offsetWidth;
    document.getElementsByClassName('carousel-viewport')[0].scrollLeft -= carouselItemWidth;
}

function prepareCarousel() {
    var items = document.getElementsByClassName('carousel-item');

    for(var i = 0; i < items.length; i++) {
        items[i].innerHTML = '<div class="navigation-button previous-element-button" onclick="scrollBackwardsOnce()">←</div>' +
            '<div class="navigation-button next-element-button" onclick="scrollOnce()"><span>→</span></div>';
    }

    window.setInterval(scrollOnce, 2000);
}
