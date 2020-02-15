var x;
var ck;
function Submit(){
    document.cookie=document.getElementById("Pname").innerHTML +'=U+'+document.getElementById("Pname").innerHTML+'+'+document.getElementById("Pprice").innerHTML.split("$")[1]+'+'+$('.chngP').attr("src")+';path=/';
    x=document.cookie;
};

x=document.cookie;
