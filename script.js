function calculo(){
// var sel= document.getElementById("categoria");

        var sel= document.getElementById("inputGroupSelect01");
    var valorseleccionado=parseFloat(sel.options[sel.selectedIndex].value);
    var cant =document.getElementById("cantidad").value;
    var total = 0; 
    switch(valorseleccionado) {
        case 1: 
          
            total= (200*cant)-((200*cant)*80)/100
            document.getElementById("total").value=total;
            console.log(total); 
            
        break;
        case 2:
            total= (200*cant)-((200*cant)*50)/100
            document.getElementById("total").value=total;
        break;
        case 3:
            total= (200*cant)-((200*cant)*15)/100 
            document.getElementById("total").value=total;
            break; 
    }
    function NuevoBoton()
        { 
            var boton= document.createElement("button");
            
            boton.appendChild(nuevo);
            document.body.appendChild(boton); 
        } 
 }
