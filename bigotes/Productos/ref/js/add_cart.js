function Submit() {
    var description = document.getElementById("description").children[0].innerHTML;
    var price = document.getElementById("price").innerHTML.split(/\s+/).join("");
    var image = document.getElementsByClassName("image-item")[0].children[0].src;

    if (confirm("Mr. Bigotes pregunta si desea añadir "
                + description + " a su carrito.")) {
        setCookie(description, price, image);
    }
    
    console.log(document.cookie);
}


// Cookie structure
// description1+price1+image1&description2+price2+image2&...
//
// The "&" simbol separe products and the "+" sign separe info.

function setCookie(description, price, image) {
    var cookie = description + "+" + price + "+" + image;
    var previousCookie = getCookie();
    if (previousCookie == "") {
        // If cookie is empty just add the info.
        document.cookie = "products" + "=" + cookie + ";path=/";
    }

    else {
        // If cookie is not empty append an "&" sign.
        document.cookie = "products" + "=" + previousCookie + "&" + cookie + ";path=/";
    }
}

function getCookie() {
    var name = "products" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    var c;
    for (c of ca) {
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
