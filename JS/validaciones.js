const inputNacimiento=document.querySelector("#birth");
//evento se dispara cuando un elemento ha perdido el foco.
inputNacimiento.addEventListener("blur", (event)=>{
    validarNacimiento(event.target);
})


function validarNacimiento(inputNacimiento){
    const fechaCliente=new Date(inputNacimiento.value);
    let mensaje="";
    if(!mayorEdad(fechaCliente)){
        mensaje="Debes tener al menos 18 años de edad."
    }
    inputNacimiento.setCustomValidity(mensaje);
}

function mayorEdad(fecha){
    const fechaActual=new Date();
    const diferenciaFechas= new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
    return fechaActual>=diferenciaFechas;

}