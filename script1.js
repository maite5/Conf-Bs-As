
//let elemento;
//elemento = document.links; 
//elemento= document.getElementsByClassName('resu'); 


//console.log(elemento); 
contadortr=0; contadorjun=0; contadore=0;
const formulario = document.querySelector('.formulario');
//formulario.addEventListener('click', validarFormulario); 
 //function validarFormulario(e){
    formulario.addEventListener('click', e=>{  
   // console.log('buscando..');
   // console.log(e.target);  
   //if(e.target.form_select.contains('trainee')) { 
    if(('1')) { 
   console.log('h');
       contadortr++  } 

       if(('Junior')) { 
        console.log('j');
            contadorjun++  } 
        
            if(('Estudiante')) { 
                console.log('E');
                    contadore++  } 
                
}); 

function Numeros(){
    n1=document.getElementById("uno").value;
    n2=document.getElementById("dos").value;
     if (n1>n2) {
        r=n1+n2;
    } 
    else if(n2>n1){
        n1c=n1*n1;
        n2c=n2*n2;
        r=n1c+n2c;
    }
    else {
        r=n1/n2;
    }
    document.getElementById("r").innerHTML = r;
}  