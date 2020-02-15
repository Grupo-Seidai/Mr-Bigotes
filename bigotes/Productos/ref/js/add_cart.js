var x;
function Sumbit(){
    alert(document.getElementById("Pname").innerHTML);
    document.cookie=document.getElementById("Pname").innerHTML +'='+document.getElementById("Pname").innerHTML+','+document.getElementById("Pprice").innerHTML+document.getElementsByClassName("chngP").src+','+';';
    x=document.cookie;
    alert(x);
}

function ask(){
    

    alert(x);

}
