var icon = document.getElementById("menu");
var body = document.body;
var topbar = document.getElementById("topbar");
var sidebar = document.getElementById("sidebar");

document.addEventListener("scroll",closeSidebar);

function openSidebar() {
    if(icon.innerHTML === "close") {
        closeSidebar();
    } else {
        icon.innerHTML = "close";
        body.style.transform = "translate(-300px,0px)";
        topbar.style.transform = "translate(300px,0px)";
        sidebar.style.width = "300px";
    }
}

function closeSidebar() {
    icon.innerHTML = "menu";
    body.style.transform = "translate(0px,0px)";
    topbar.style.transform = "translate(0px,0px)";
    sidebar.style.width = "0px";
}

function dropdown(event) {
    var div = event.target.nextElementSibling;
    if(div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    };
}
