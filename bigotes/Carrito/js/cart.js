var cart = document.getElementById("cart");
var cartTable = document.getElementById("cart-table");
var cartTotal = document.getElementById("cart-total");
var empty = document.getElementById("empty");
var display = true;

function updateCart() {
    var cookie = getCookie();

    if (cookie == "") {
        // No products on cookie. So print default.
        empty.style.display = "block";
        cart.style.display = "none";
    }

    else {
        // Products on Cookie. Start parsing.
        cart.style.display = "block";
        empty.style.display = "none";
        var total = 0;

        // Get all products array. Separarted by &.
        var products = cookie.split("&");
        var product;
        
        for (product of products) {
            // Get every item in the products. Separated by +.
            var elements = product.split("+");
            console.log(elements);

            if (display) {
                addProduct(elements);
            }

            total = total + parseInt(elements[1]);
        }

        updateTotal(total);

        display = false;
    }
}

function updateTotal(value) {
    var subtotal = document.getElementById("subtotal");
    var ship = document.getElementById("ship");
    var total = document.getElementById("total");

    subtotal.innerHTML = value;
    if (value > 100000) {
        ship.innerHTML = 0;
        total.innerHTML = value;
    } else {
        ship.innerHTML = 12000;
        total.innerHTML = value + 12000;
    }
}

function addProduct(elements) {
    var row = document.createElement("tr");
    var cell;

    // Append image
    var image = document.createElement("img");
    image.src = elements[2];

    cell = document.createElement("td");
    cell.classList.add("hide-small");
    cell.appendChild(image);
    
    row.appendChild(cell);

    // Append description
    var description = elements[0];
    cell = document.createElement("td");
    cell.innerHTML = description;
    
    row.appendChild(cell);

    // Append quantity
    var quantity = 1;
    cell = document.createElement("td");
    cell.innerHTML = quantity;
    
    row.appendChild(cell);

    // Append price
    var price = elements[1];
    cell = document.createElement("td");
    cell.classList.add("price");
    cell.classList.add("hide-small");
    cell.innerHTML = price;
    
    row.appendChild(cell);

    // Append total price
    var Total = quantity * price;
    cell = document.createElement("td");
    cell.classList.add("price");
    cell.innerHTML = Total;
    
    row.appendChild(cell);

    // Append cancel button
    var cancel = document.createElement("a");
    cell = document.createElement("td");
    cancel.classList.add("material-icons");
    cancel.classList.add("md-24");
    cancel.innerHTML = "remove_shopping_cart";
    cell.appendChild(cancel);
    cell.addEventListener("click", function (event) {
        var element = event.target;

        // Get the parent Row
        var parent = element.parentElement.parentElement;

        cartTable.removeChild(parent);

        document.cookie = "products=;path=/";

        var left = cartTable.getElementsByTagName("tr");

        for (var i = 1; i < left.length; i++) {
            var image = left[i].children[0].children[0].src;
            var description = left[i].children[1].innerHTML;
            var price = left[i].children[3].innerHTML;

            setCookie(description, price, image);
        }

        updateCart();
    });

    row.appendChild(cell);

    cartTable.appendChild(row);
}

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
