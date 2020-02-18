function rec_cart(){
    if(parseFloat(document.documentElement.clientWidth)>=993){
        var tot=0;
        var stot=0;
        var ship=0;
        
        var Prices=document.getElementsByClassName("p_Precio_l");
        Array.prototype.forEach.call(Prices,function(item){
            if(item.parentNode.style.display=="none"){
                return;
            }else{
                stot+=parseFloat(item.innerHTML.split("$")[1]);
            }
        });
        document.getElementById("Subtotal_l").innerHTML="Subtotal:$   "+stot;
        if(stot<100000){
            ship=parseFloat(8000);
        }else{
            ship=parseFloat(0);
        }
        document.getElementById("Ship_l").innerHTML="Envío:$   "+ship;
        
        tot=parseFloat(ship)+parseFloat(stot);
        
        document.getElementById("Total_l").innerHTML="Total:$   "+tot;
    }else{
        var tot=0;
        var stot=0;
        var ship=0;
        
        var Prices=document.getElementsByClassName("p_Precio_s");
        Array.prototype.forEach.call(Prices,function(item){
            if(item.parentNode.style.display=="none"){
                return;
            }else{
                stot+=parseFloat(item.innerHTML.split("$")[1]);
            }
        });
        document.getElementById("Subtotal_s").innerHTML="Subtotal:$   "+stot;
        if(stot<100000){
            ship=parseFloat(8000);
        }else{
            ship=parseFloat(0);
        }
        document.getElementById("Ship_s").innerHTML="Envío:$   "+ship;
        
        tot=parseFloat(ship)+parseFloat(stot);
        
        document.getElementById("Total_s").innerHTML="Total:$   "+tot;
        
    }
};

function make_cart(){
    var k=document.cookie.split(";");
    if(k!=0){
        var j;
        var subt;
        var ccontent_l=document.getElementById("cc_L");
        var ccontent_s=document.getElementById("cc_S");
        var cols_l=document.createElement("div");
        cols_l.setAttribute('style','width:98%;height:25px;margin:0px 1%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
        cols_l.setAttribute('id','Columns');
        
        var phtn_l=document.createElement("p");
        phtn_l.setAttribute('style','float:left;text-align:center;margin:0px;width:100PX;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;');
        phtn_l.innerHTML="Imagen";
        
        cols_l.appendChild(phtn_l);
        
        var namen_l=document.createElement("p");
        namen_l.setAttribute('style','float:left;text-align:center;margin:0px;width:40%;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;');
        namen_l.innerHTML="Producto";
        
        
        cols_l.appendChild(namen_l);
        
        var unin_l=document.createElement("p");
        unin_l.setAttribute('style','float:left;text-align:center;margin:0px;width:10%;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;');
        unin_l.innerHTML="Cantidad";
        
        
        cols_l.appendChild(unin_l);
        
        var p_unin_l=document.createElement("p");
        p_unin_l.setAttribute('style','float:left;text-align:center;margin:0px;width:20%;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;');
        p_unin_l.innerHTML="Precio unitario";
        
        cols_l.appendChild(p_unin_l);
        
        
        var precn_l=document.createElement("p");
        precn_l.setAttribute('style','float:left;text-align:center;margin:0px;width:15%;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;');
        precn_l.innerHTML="Precio";
        
        
        cols_l.appendChild(precn_l);
        
        
        ccontent_l.appendChild(cols_l);
        
        var stot, tot, ship;
        stot=0;
        
        for(j=0;j<k.length;j++){
            var prod_info=k[j].split('=')[1].split('+');
            var div_p_l=document.createElement("div");
            var div_p_s=document.createElement("div");
            div_p_l.setAttribute('style','width:98%;height:100px;margin:10px 1%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
            div_p_s.setAttribute('style','width:96%;height:110px;margin:10px 0% 20px 4%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
            
            var cancelc_l=document.createElement("div");
            var cancelc_s=document.createElement("div");
            cancelc_l.setAttribute('style','float:left;text-align:center;width:5%;');
            cancelc_s.setAttribute('style','text-align:center; margin:10px 0 0px 0;');
            
            
            var cancel_l=document.createElement("i");
            var cancel_s=document.createElement("i");
            cancel_l.setAttribute('class','material-icons md-24 md-dark Cancel');
            cancel_s.setAttribute('class','material-icons md-18 md-dark Cancel');
            cancel_l.setAttribute('style','background-color:rgba(126, 72, 174,1);');
            cancel_s.setAttribute('style','background-color:rgba(126, 72, 174,1);');
            cancel_l.innerHTML="cancel";
            cancel_s.innerHTML="cancel";
            let cancel_b_l=cancel_l;
            let cancel_b_s=cancel_s;
            let prod_c_l=div_p_l;
            let prod_c_s=div_p_s;
            let prod_n_l=prod_info[1];
            let prod_n_s=prod_info[1];
            cancel_b_l.onclick=function(){prod_c_l.style.display='none';
                                          document.cookie=prod_n_l+'=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; '
                                          if(document.cookie==0){
                                              document.getElementById("A_Pagar").style.display='none';
                                              document.getElementById("Columns").style.display='none';
                                              make_cart();
                                          }else{
                                              rec_cart();
                                          }
                                         };
            cancel_b_s.onclick=function(){prod_c_s.style.display='none';
                                          document.cookie=prod_n_s+'=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; '
                                          if(document.cookie==0){
                                              document.getElementById("A_Pagar").style.display='none';
                                              make_cart();
                                          }else{
                                              rec_cart();
                                          }
                                         };
            
            
            cancelc_l.appendChild(cancel_l);
            cancelc_s.appendChild(cancel_s);
            
            
            div_p_s.appendChild(cancelc_s);
            
            var phtc_l=document.createElement("div");
            var phtc_s=document.createElement("div");
            phtc_l.setAttribute('style','float:left;width:100px;display: flex;align-items: center;justify-content: center;');
            phtc_s.setAttribute('style','float:left;width:100px;display: flex;align-items: center;justify-content: center;');
            var pht_l=document.createElement("img");
            var pht_s=document.createElement("img");
            pht_l.setAttribute('style','width:100%;');
            pht_s.setAttribute('style','width:100%;');
            pht_l.setAttribute("src",'Productos'+prod_info[3].split('..')[1]);
            pht_s.setAttribute("src",'Productos'+prod_info[3].split('..')[1]);
            
            phtc_l.appendChild(pht_l);
            phtc_s.appendChild(pht_s);
            
            div_p_l.appendChild(phtc_l);
            div_p_s.appendChild(phtc_s);
            
            var name_l=document.createElement("p");
            var name_s=document.createElement("p");
            name_l.setAttribute('style','float:left;text-align:center;width:40%;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
            name_s.setAttribute('style','text-align:center; margin:0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
            name_l.innerHTML=prod_info[1];
            name_s.innerHTML=prod_info[1];
            
            
            div_p_l.appendChild(name_l);
            div_p_s.appendChild(name_s);
            
            var uni_l=document.createElement("p");
            var uni_s=document.createElement("p");
            uni_l.setAttribute('style','float:left;text-align:center;width:10%;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
            uni_s.setAttribute('style','text-align:center; margin:10px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
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
            p_uni_l.setAttribute('style','float:left;text-align:center;width:20%;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
            p_uni_s.setAttribute('style','text-align:center; margin:10px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
            p_uni_l.innerHTML="$"+prod_info[2];
            p_uni_s.innerHTML="Precio u: $"+prod_info[2];
            
            
            div_p_l.appendChild(p_uni_l);
            div_p_s.appendChild(p_uni_s);
                 
            var prec_l=document.createElement("p");
            var prec_s=document.createElement("p");
            prec_l.setAttribute('style','float:left;text-align:center;width:15%;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
            prec_s.setAttribute('style','text-align:center; margin:10px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
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
            
            
            div_p_l.appendChild(cancelc_l);
            
            
            ccontent_l.appendChild(div_p_l);
            ccontent_s.appendChild(div_p_s);
        }
        
        var total_l=document.createElement("div");
        var total_s=document.createElement("div");
        total_l.setAttribute('style','width:98%;width:20%;float:right;height:100px;margin:10px 1%;border-bottom: 1px solid rgba(193, 53, 132 ,1)');
        total_s.setAttribute('style','width:30%;height:50px;float:right;margin:10px 10% 10px 0%');
        total_l.setAttribute('id','A_Pagar');
        total_s.setAttribute('id','A_Pagar');
        
        var stot_l=document.createElement("div");
        var stot_s=document.createElement("div");
        stot_l.setAttribute('style','text-align:left;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
        stot_s.setAttribute('style','text-align:left; margin:0px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
        stot_l.setAttribute('id','Subtotal_l');
        stot_s.setAttribute('id','Subtotal_s');
        stot_l.innerHTML="Subtotal:$   "+stot;
        stot_s.innerHTML="Subtotal:$   "+stot;
        
        total_l.appendChild(stot_l);
        total_s.appendChild(stot_s);
        
        
        var ship_l=document.createElement("div");
        var ship_s=document.createElement("div");
        ship_l.setAttribute('style','text-align:left;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
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
        tot_l.setAttribute('style','text-align:left;color:rgba(0,0,0,1);font-size: 20px;font-family: \'Playfair Display\', serif;');
        tot_s.setAttribute('style','text-align:left; margin:0px 0 0px 0;color:rgba(0,0,0,1);font-size: 10px;font-family: \'Arvo\', serif;');
        tot_l.setAttribute('id','Total_l');
        tot_s.setAttribute('id','Total_s');
        tot_l.innerHTML="Total:$   "+tot;
        tot_s.innerHTML="Total:$   "+tot;
        
        total_l.appendChild(tot_l);
        total_s.appendChild(tot_s);
        
        
        ccontent_l.appendChild(total_l);
        ccontent_s.appendChild(total_s);
        
        
        var cpay_l=document.getElementById("cpay_L");
        var cpay_s=document.getElementById("cpay_S");
        
        
        
        var pay_b_l=document.createElement("a");
        var pay_b_s=document.createElement("a");
        pay_b_l.setAttribute('style','float:right; background: rgba(126, 72, 174,1); text-align:center;padding:10px;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;text-decoration:none');
        pay_b_s.setAttribute('style','float:right;background: rgba(126, 72, 174,1); text-align:center; padding:10px;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;text-decoration:none');
        pay_b_l.innerHTML="Confirmar Compra";
        pay_b_s.innerHTML="Confirmar Compra";
        pay_b_l.setAttribute('href',"Compra.html");
        pay_b_s.setAttribute('href',"Compra.html");
        pay_b_s.onmouseover = function(){pay_b_s.style.background="rgba(126, 72, 174,.5)"};
        pay_b_l.onmouseover = function(){pay_b_l.style.background="rgba(126, 72, 174,.5)"};
        pay_b_s.onmouseout = function(){pay_b_s.style.background="rgba(126, 72, 174,1)"};
        pay_b_l.onmouseout = function(){pay_b_l.style.background="rgba(126, 72, 174,1)"};
        pay_b_s.onclick = function(){
            mk_cookie();
        };
        pay_b_l.onclick = function(){
            mk_cookie();
        };
        
        
        cpay_l.appendChild(pay_b_l);
        cpay_s.appendChild(pay_b_s);
        
    }else{
        var ccontent_l=document.getElementById("cc_L");
        var ccontent_s=document.getElementById("cc_S");
        var div_p_l=document.createElement("p");
        var div_p_s=document.createElement("p");
        div_p_l.setAttribute('style','text-align:center;margin:50px 0 10px 0;color:rgba(0,0,0,1);font-weight: bold;font-size: 50px;font-family: \'Arvo\', serif;');
        div_p_s.setAttribute('style','text-align:center; margin:35px 0 10px 0;color:rgba(0,0,0,1);font-weight: bold;font-size: 30px;font-family: \'Arvo\', serif;');
        div_p_l.innerHTML="Tu carrito está vacio";
        div_p_s.innerHTML="Tu carrito está vacio";
        
        
        var div_p_l_A=document.createElement("p");
        var div_p_s_A=document.createElement("p");
        div_p_l_A.setAttribute('style','text-align:center;margin:50px 0 10px 0;color:rgba(0,0,0,1);font-weight: bold;font-size: 50px;font-family: \'Arvo\', serif;');
        div_p_s_A.setAttribute('style','text-align:center; margin:35px 0 10px 0;color:rgba(0,0,0,1);font-weight: bold;font-size: 30px;font-family: \'Arvo\', serif;');
        div_p_l_A.innerHTML="¡Ve a antojarte de nuestros productos!";
        div_p_s_A.innerHTML="¡Ve a antojarte de nuestros productos!";
        
        
        var div_p_l_B=document.createElement("div");
        var div_p_s_B=document.createElement("div");
        div_p_l_B.setAttribute('style','margin:50px 0 30px 0;text-align:center');
        div_p_s_B.setAttribute('style','margin:35px 0 30px 0;text-align:center');
        
        
        var div_p_l_C=document.createElement("a");
        var div_p_s_C=document.createElement("a");
        div_p_l_C.setAttribute('style','background: rgba(126, 72, 174,1); text-align:center;padding:10px;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;text-decoration:none');
        div_p_s_C.setAttribute('style','background: rgba(126, 72, 174,1); text-align:center; padding:10px;color:rgba(0,0,0,1);font-weight: bold;font-size: 20px;font-family: \'Arvo\', serif;text-decoration:none');
        div_p_l_C.innerHTML="Nuestros Productos";
        div_p_s_C.innerHTML="Nuestros Productos";
        div_p_l_C.setAttribute('href',"Productos.html");
        div_p_s_C.setAttribute('href',"Productos.html");
        div_p_s_C.onmouseover = function(){div_p_s_C.style.background="rgba(126, 72, 174,.5)"};
        div_p_l_C.onmouseover = function(){div_p_l_C.style.background="rgba(126, 72, 174,.5)"};
        div_p_s_C.onmouseout = function(){div_p_s_C.style.background="rgba(126, 72, 174,1)"};
        div_p_l_C.onmouseout = function(){div_p_l_C.style.background="rgba(126, 72, 174,1)"};
        
        div_p_l_B.appendChild(div_p_l_C);
        div_p_s_B.appendChild(div_p_s_C);
        
        ccontent_l.appendChild(div_p_l);
        ccontent_s.appendChild(div_p_s);
        ccontent_l.appendChild(div_p_l_A);
        ccontent_s.appendChild(div_p_s_A);
        ccontent_l.appendChild(div_p_l_B);
        ccontent_s.appendChild(div_p_s_B);
    }
}

make_cart();

var c_ck;

function mk_cookie(){
    c_ck=document.cookie;
}
