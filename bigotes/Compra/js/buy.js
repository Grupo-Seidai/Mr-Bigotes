var cartTable = document.getElementById("cart-table");
var cartTotal = document.getElementById("cart-total");
var products = document.getElementById("products");
var display = true;

function updateCart() {
    var cookie = getCookie();

    // Products on Cookie. Start parsing.
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
            setBuyItems(elements);
        }

        total = total + parseInt(elements[1]);
    }

    updateTotal(total);

    display = false;
}

function setBuyItems(elements) {
    products.value = products.value + "\n"
        + elements[0] + " " + elements[1] + " " + elements[2];
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

function clear() {
    document.cookie = "products=;path=/";
}
