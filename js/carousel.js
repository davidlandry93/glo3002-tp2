
var timer;

function resetTimer() {
    clearInterval(timer);
    timer = window.setInterval(scrollOnce, 2000);
}

function carouselItemWidth() {
    return document.getElementsByClassName('carousel-item')[0].offsetWidth;
}

function scrollOnce() {
    var itemWidth = carouselItemWidth();
    document.getElementsByClassName('carousel-viewport')[0].scrollLeft += itemWidth;
    resetTimer();
}

function scrollBackwardsOnce() {
    var itemWidth = carouselItemWidth();
    document.getElementsByClassName('carousel-viewport')[0].scrollLeft -= itemWidth;
    resetTimer();
}

function scrollToPicture(index) {
    var itemWidth = carouselItemWidth();

    document.getElementsByClassName('carousel-viewport')[0].scrollLeft = index * itemWidth;
    resetTimer();
}

function bullets(pictureIndex, nOfPictures) {
    stringOfBullets = '<div class="navigation-bullets">';
    for(var i = 0; i < nOfPictures; i++) {
        if(i === pictureIndex) {
            stringOfBullets += '◉';
        } else {
            stringOfBullets += '<span onclick="scrollToPicture(' + i + ')">○</span>';
        }
    }
    return stringOfBullets + '</div>';
}

function prepareCarousel() {
    var items = document.getElementsByClassName('carousel-item');

    for(var i = 0; i < items.length; i++) {
        items[i].innerHTML =
            '<div class="navigation-button previous-element-button"' +
            ' onclick="scrollBackwardsOnce()">←</div>' +
            bullets(i, items.length) +
            '<div class="navigation-button next-element-button" onclick="scrollOnce()"><span>→</span></div>';
    }

    resetTimer();
}
