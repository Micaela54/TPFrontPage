
var nombre=document.getElementById ('name');
var phone=document.getElementById ('phone');
var mail=document.getElementById ('mail');
var consulta=document.getElementById ('consulta');
var error=document.getElementById ('error');

function enviarFormulario () {
    
    var mensajeError = [];
    
    if (nombre.value === null || nombre.value === '') {
        mensajeError.push ('Ingresa tu nombre');   
    }
       

   if (phone.value === null || phone.value === '') {
        mensajeError.push ('Ingresa tu número de teléfono');
    }

    if (mail.value === null || mail.value === '') {
        mensajeError.push ('Ingresa tu mail');
    }

    

    if (consulta.value === null || consulta.value === '') {
        mensajeError.push ('Ingresa tu consulta');

    }

    error.innerHTML = mensajeError.join (', ');


    return false;

}