import { valida } from "./validacionesMejorado.js";
 const inputs= document.querySelectorAll('input');
 inputs.forEach(input => {
    input.addEventListener("blur", (event)=>{
        valida(event.target);
    })
    
 });
