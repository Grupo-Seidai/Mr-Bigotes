function R_Com_pers(){
    if(parseFloat(document.documentElement.clientWidth)>=993){
        
    }else{
        
    }
}

if(parseFloat(document.documentElement.clientWidth)>=993){
    var d= new Date();
    var M=document.getElementById("Mes_l");
    M.innerHTML="<option value=\"\" disabled selected>Mes</option>";
    var Mon=d.getMonth();
    var Mon_1=document.createElement("option");
    var Mon_2=document.createElement("option");
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    Mon_1.setAttribute("value",month[Mon]);
    Mon_2.setAttribute("value",month[Mon+1]);
    Mon_1.innerHTML=month[Mon];
    Mon_2.innerHTML=month[Mon+1];
    M.appendChild(Mon_1);
    M.appendChild(Mon_2);
}else{
    var d= new Date();
    var M=document.getElementById("Mes_s");
    M.innerHTML="<option value=\"\" disabled selected>Mes</option>";
    var Mon=d.getMonth();
    var Mon_1=document.createElement("option");
    var Mon_2=document.createElement("option");
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    Mon_1.setAttribute("value",month[Mon]);
    Mon_2.setAttribute("value",month[Mon+1]);
    Mon_1.innerHTML=month[Mon];
    Mon_2.innerHTML=month[Mon+1];
    M.appendChild(Mon_1);
    M.appendChild(Mon_2);
}


function Fecha_m(){
    if(parseFloat(document.documentElement.clientWidth)>=993){
    var d= new Date();
    var M=document.getElementById("Mes_l");
    var D=document.getElementById("Dia_l");
    var Day=d.getDate();
    var Mon=d.getMonth();
    var Mon_1=document.createElement("option");
    var Mon_2=document.createElement("option");
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
        if(document.forms["Persolanizalo_l"]["Mes"].value==month[Mon]){
            var ld=new Date(d.getYear(), Mon +1, 0).getDate();
            D.innerHTML="<option value=\"\" disabled selected>Día</option>";
            for(var i=Day;i<=ld;i++){
                var Day_i=document.createElement("option");
                Day_i.setAttribute("value",i);
                Day_i.innerHTML=i;
                D.appendChild(Day_i);
            }
        }else if(document.forms["Persolanizalo_l"]["Mes"].value==month[Mon+1]){
            var ld=new Date(d.getYear(), Mon +2, 0).getDate();
            D.innerHTML="<option value=\"\" disabled selected>Día</option>";
            for(var i=1;i<=ld;i++){
                var Day_i=document.createElement("option");
                Day_i.setAttribute("value",i);
                Day_i.innerHTML=i;
                D.appendChild(Day_i);
            }
        }
        
    }else{
        var d= new Date();
        var M=document.getElementById("Mes_s");
        var D=document.getElementById("Dia_s");
        var Day=d.getDate();
        var Mon=d.getMonth();
        var Mon_1=document.createElement("option");
        var Mon_2=document.createElement("option");
        var month = new Array();
        month[0] = "Enero";
        month[1] = "Febrero";
        month[2] = "Marzo";
        month[3] = "Abril";
        month[4] = "Mayo";
        month[5] = "Junio";
        month[6] = "Julio";
        month[7] = "Agosto";
        month[8] = "Septiembre";
        month[9] = "Octubre";
        month[10] = "Noviembre";
        month[11] = "Diciembre";
        if(document.forms["Persolanizalo_s"]["Mes"].value==month[Mon]){
            var ld=new Date(d.getYear(), Mon +1, 0).getDate();
            D.innerHTML="<option value=\"\" disabled selected>Día</option>";
            for(var i=Day;i<=ld;i++){
                var Day_i=document.createElement("option");
                Day_i.setAttribute("value",i);
                Day_i.innerHTML=i;
                D.appendChild(Day_i);
            }
        }else if(document.forms["Persolanizalo_s"]["Mes"].value==month[Mon+1]){
            var ld=new Date(d.getYear(), Mon +2, 0).getDate();
            D.innerHTML="<option value=\"\" disabled selected>Día</option>";
            for(var i=1;i<=ld;i++){
                var Day_i=document.createElement("option");
                Day_i.setAttribute("value",i);
                Day_i.innerHTML=i;
                D.appendChild(Day_i);
            }
        }
    }
    
}
