function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const estatura = document.getElementById('estatura').value;

    let imc = peso / (estatura * estatura)
    alert(imc.toFixed(2))
}