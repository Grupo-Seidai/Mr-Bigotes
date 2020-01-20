var TopButton= document.getElementById('returnH');

TopButton.addEventListener('click',scrollUP);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        TopButton.style.display = "block";
    } else {
        TopButton.style.display = "none";
    }
}

function scrollUP(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
