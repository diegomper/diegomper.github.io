var div = document.getElementById('certificados1')
var display = 0

function vermas() {
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }
}


function validar(){

    var miform = document.miform;

    if(miform.nombre.value==0){
        alert("el campo nombre esta vacio");
        miform.nombre.value="";
        miform.nombre.focus();
        return false;
    }
    
    if(miform.apellido.value==0){
        alert("el campo apellido esta vacio");
        miform.apellido.value="";
        miform.apellido.focus();
        return false;
    }
   
    if(miform.email.value==0){
        alert("el email nombre esta vacio");
        miform.email.value="";
        miform.email.focus();
        return false;
    }

    if(miform.mensaje.value==0){
        alert("el campo mensaje esta vacio");
        miform.mensaje.value="";
        miform.mensaje.focus();
        return false;
    }

    alert("Mensaje Enviado!");
    miform.submit();

}
