var x;
function Sumbit(){
    document.cookie=document.getElementById("Pname").innerHTML +'=U+'+document.getElementById("Pname").innerHTML+'+'+document.getElementById("Pprice").innerHTML+'+'+$('.chngP').attr("src")+';expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';
    x=document.cookie;
}

x=document.cookie;
