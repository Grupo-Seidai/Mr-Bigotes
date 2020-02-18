function make_cart(){
    var k=document.cookie.split(";");
    var j;
    var subt;
    var ccontent_l=document.getElementById("cc_L");
    var ccontent_s=document.getElementById("cc_S");
    var cols_l=document.createElement("div");
    cols_l.setAttribute('style','width:98%;height:25px;margin:0px 1%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
    cols_l.setAttribute('id','Columns');
    
    var namen_l=document.createElement("p");
    namen_l.setAttribute('style','float:left;text-align:center;margin:2px 0;width:30%;color:rgba(0,0,0,1);font-weight: bold;font-size: 15px;font-family: \'Arvo\', serif;');
    namen_l.innerHTML="Producto";
    
    
    cols_l.appendChild(namen_l);
    
    var unin_l=document.createElement("p");
    unin_l.setAttribute('style','float:left;text-align:center;margin:2px 0;width:20%;color:rgba(0,0,0,1);font-weight: bold;font-size: 15px;font-family: \'Arvo\', serif;');
    unin_l.innerHTML="Cantidad";
    
    
    cols_l.appendChild(unin_l);
    
    var p_unin_l=document.createElement("p");
    p_unin_l.setAttribute('style','float:left;text-align:center;margin:2px 0;width:30%;color:rgba(0,0,0,1);font-weight: bold;font-size: 15px;font-family: \'Arvo\', serif;');
    p_unin_l.innerHTML="Precio unitario";
    
    cols_l.appendChild(p_unin_l);
    
    
    var precn_l=document.createElement("p");
    precn_l.setAttribute('style','float:left;text-align:center;margin:2px 0;width:15%;color:rgba(0,0,0,1);font-weight: bold;font-size: 15px;font-family: \'Arvo\', serif;');
    precn_l.innerHTML="Precio";
    
    
    cols_l.appendChild(precn_l);
    
    
    ccontent_l.appendChild(cols_l);
    
    var stot, tot, ship;
    stot=0;
    
    for(j=0;j<k.length;j++){
        var prod_info=k[j].split('=')[1].split('+');
        var div_p_l=document.createElement("div");
        var div_p_s=document.createElement("div");
        div_p_l.setAttribute('style','width:98%;height:60px;margin:1px 1%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
        div_p_s.setAttribute('style','width:96%;height:75px;margin:5px 0% 5px 4%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
        
        
        var name_l=document.createElement("p");
        var name_s=document.createElement("p");
        name_l.setAttribute('style','float:left;text-align:center;width:30%;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
        name_s.setAttribute('style','text-align:center; margin:0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
            name_l.innerHTML=prod_info[1];
            name_s.innerHTML=prod_info[1];
            
            
            div_p_l.appendChild(name_l);
            div_p_s.appendChild(name_s);
            
            var uni_l=document.createElement("p");
            var uni_s=document.createElement("p");
            uni_l.setAttribute('style','float:left;text-align:center;width:20%;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
            uni_s.setAttribute('style','text-align:center; margin:5px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
            if(prod_info[0]=='U'){
                uni_l.innerHTML=1;
                uni_s.innerHTML="Cantidad: "+1;
            }else{
                uni_l.innerHTML=prod_info[4];
                uni_s.innerHTML="Cantidad: "+prod_info[4];
            }
            
            
            div_p_l.appendChild(uni_l);
            div_p_s.appendChild(uni_s);
            
            var p_uni_l=document.createElement("p");
            var p_uni_s=document.createElement("p");
            p_uni_l.setAttribute('style','float:left;text-align:center;width:30%;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
            p_uni_s.setAttribute('style','text-align:center; margin:5px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
            p_uni_l.innerHTML="$"+prod_info[2];
            p_uni_s.innerHTML="Precio u: $"+prod_info[2];
            
            
            div_p_l.appendChild(p_uni_l);
            div_p_s.appendChild(p_uni_s);
                 
            var prec_l=document.createElement("p");
            var prec_s=document.createElement("p");
            prec_l.setAttribute('style','float:left;text-align:center;width:15%;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
            prec_s.setAttribute('style','text-align:center; margin:5px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
            prec_l.setAttribute('class','p_Precio_l');
            prec_s.setAttribute('class','p_Precio_s');
            if(prod_info[0]=='U'){
                prec_l.innerHTML="$"+prod_info[2];
                prec_s.innerHTML="Precio: $"+prod_info[2];
                stot+=parseFloat(prod_info[2]);
            }else{
                prec_l.innerHTML="$"+prod_info[2]*prod_info[4];
                prec_s.innerHTML="Precio: $"+prod_info[2]*prod_info[4];
                stot+=parseFloat(prod_info[2]*prod_info[4]);
            }
            
            
            div_p_l.appendChild(prec_l);
            div_p_s.appendChild(prec_s);
            
            
            
            ccontent_l.appendChild(div_p_l);
            ccontent_s.appendChild(div_p_s);
        }
        
        var total_l=document.createElement("div");
        var total_s=document.createElement("div");
        total_l.setAttribute('style','width:98%;width:25%;float:right;height:60px;margin:10px 1%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
        total_s.setAttribute('style','width:30%;height:40px;float:right;margin:5px 10% 5px 0%');
        total_l.setAttribute('id','A_Pagar');
        total_s.setAttribute('id','A_Pagar');
        
        var stot_l=document.createElement("div");
        var stot_s=document.createElement("div");
        stot_l.setAttribute('style','text-align:left;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
        stot_s.setAttribute('style','text-align:left; margin:0px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
        stot_l.setAttribute('id','Subtotal_l');
        stot_s.setAttribute('id','Subtotal_s');
        stot_l.innerHTML="Subtotal:$   "+stot;
        stot_s.innerHTML="Subtotal:$   "+stot;
        
        total_l.appendChild(stot_l);
        total_s.appendChild(stot_s);
        
        
        var ship_l=document.createElement("div");
        var ship_s=document.createElement("div");
        ship_l.setAttribute('style','text-align:left;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
        ship_s.setAttribute('style','text-align:left; margin:0px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
        ship_l.setAttribute('id','Ship_l');
        ship_s.setAttribute('id','Ship_s');
        if(stot<100000){
            ship=parseFloat(8000);
            ship_l.innerHTML="Envío:$   "+ship;
            ship_s.innerHTML="Envío:$   "+ship;
        }else{
            ship=parseFloat(0);
            ship_l.innerHTML="Envío:$   "+ship;
            ship_s.innerHTML="Envío:$   "+ship;                 
        }
        
        total_l.appendChild(ship_l);
        total_s.appendChild(ship_s);
        
        
        tot=parseFloat(stot)+parseFloat(ship)
        
        var tot_l=document.createElement("div");
        var tot_s=document.createElement("div");
        tot_l.setAttribute('style','text-align:left;color:rgba(0,0,0,1);font-size: 15px;font-family: \'Playfair Display\', serif;');
        tot_s.setAttribute('style','text-align:left; margin:0px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
        tot_l.setAttribute('id','Total_l');
        tot_s.setAttribute('id','Total_s');
        tot_l.innerHTML="Total:$   "+tot;
        tot_s.innerHTML="Total:$   "+tot;
        
        total_l.appendChild(tot_l);
        total_s.appendChild(tot_s);
        
        
        ccontent_l.appendChild(total_l);
        ccontent_s.appendChild(total_s);

}

make_cart();


function R_Com(){
    if(parseFloat(document.documentElement.clientWidth)>=993){
        var a=document.forms["R_pago_l"]["Nombres"].value;
        var b=document.forms["R_pago_l"]["Apellidos"].value;
        var c=document.forms["R_pago_l"]["Dirección"].value;
        var f=document.forms["R_pago_l"]["Celular"].value;
        var d=document.forms["R_pago_l"]["e-mail"].value;
        var e=document.forms["R_pago_l"]["medio_de_pago_l"].value;

        if(a=="" || b=="" || c=="" || d=="" || f==""){
            alert("¡Por favor llena los campos!");
            return false;
        }else if(!validateEmail(d)){
            alert("¡Por favor ingresa una dirección de correo válida! es para poder contactarte");
            return false;
        }else{
            alert("¡Muchas gracias por adquirir nuestros productos!\n en breve te llegará un correo con las instrucciones de acuerdo al modo de pago que selecionaste.");
            return true;
        }
    }else{
       var a=document.forms["R_pago_s"]["Nombres"].value;
        var b=document.forms["R_pago_s"]["Apellidos"].value;
        var c=document.forms["R_pago_s"]["Dirección"].value;
        var f=document.forms["R_pago_s"]["Celular"].value;
        var d=document.forms["R_pago_s"]["e-mail"].value;
        var e=document.forms["R_pago_s "]["medio_de_pago_s"].value;

        if(a=="" || b=="" || c=="" || d=="" || f==""){
            alert("¡Por favor llena los campos!");
            return false;
        }else if(!validateEmail(d)){
            alert("¡Por favor ingresa una dirección de correo válida! es para poder contactarte");
            return false;
        }else{
            alert("¡Muchas gracias por adquirir nuestros productos!\n en breve te llegará un correo con las instrucciones de acuerdo al modo de pago que selecionaste.");
            return true;
        }
    }
}

function validateEmail(email) 
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  return re.test(email);
}

