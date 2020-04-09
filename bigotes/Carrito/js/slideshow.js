var photo = 0;

function changeSlideShow() {
    var slideShows = document.getElementsByClassName("slideshow");
    var slideShow;
    
    for (slideShow of slideShows) {
        var images = slideShow.children;
        var image;

        var img = 0;
        for (image of images) {
            if (img == photo) {
                image.style.display = "block";
            }

            else {
                image.style.display = "none";
            }
            img = img + 1;
        }
    }
    photo = photo + 1;

    if (photo > 2) photo = 0;
}

var interval = setInterval(changeSlideShow, 5000);
changeSlideShow();
