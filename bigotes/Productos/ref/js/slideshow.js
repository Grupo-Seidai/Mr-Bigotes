var imageSlideshows = document.getElementsByClassName("image-slideshow");
var imageSlideshow;

for (imageSlideshow of imageSlideshows) {
    var items = imageSlideshow.getElementsByClassName("image-item");
    var item;
    
    for (item of items) {

        // Event listeners reciben una variable llamada event que
        // almacena toda la informacion del evento, incluyendo a que
        // le dio click.  En este caso, el elemento img
        item.addEventListener('click', function (event) {
            var element = event.target;

            console.log("element\n",element);

            var parent = element.parentElement.parentElement.parentElement;
            
            console.log(parent);

            // Solamente necesito el primer elemento, pues no hay más.
            var container = parent.getElementsByClassName("image-container")[0];

            
            console.log(container);

            // Cambio la imagen.
            container.src = element.src;
        });
    }
}
