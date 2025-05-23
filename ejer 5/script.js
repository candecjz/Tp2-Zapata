const boton = document.getElementById("boton");
const resultado = document.getElementById('resultado');

boton.addEventListener("click", () => {
const ladoA = parseFloat(document.getElementById('ladoA').value);
const ladoB = parseFloat(document.getElementById('ladoB').value);
const ladoC = parseFloat(document.getElementById('ladoC').value);    
const ladoD = (ladoA-ladoC) + ladoB

let area = ladoA + ladoB + ladoC + ladoD
resultado.innerHTML = "Resultado: " + area + " m"
})