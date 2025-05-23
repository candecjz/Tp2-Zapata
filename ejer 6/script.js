function validar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseInt(document.getElementById("altura").value);
    const correo = document.getElementById("correo").value;
    
    let mensaje = "";
    let validacionAprobada = true;

    if (nombre === "" || nombre.length > 50) {
        mensaje += "El nombre no puede estar vacio ni tener más de 50 caracteres.<br>";
        validacionAprobada = false;
    }

    if (apellido === "" || apellido.length > 50) {
        mensaje += "El apellido no puede estar vacío ni tener más de 50 caracteres.<br>";
        validacionAprobada = false;
    }

    if (isNaN(edad) || edad < 0 || edad < 18) {
        mensaje += "La edad debe ser un número válido, mayor o igual a 18 años.<br>";
        validacionAprobada = false;
    }

    if (isNaN(altura) || altura < 0 || altura > 230) {
        mensaje += "La altura debe ser un número entre 0 y 230 cm.<br>";
        validacionAprobada = false;
    }
    
    if (correo === "" || !correo.includes("@")) {
        mensaje += "El correo no puede estar vacío y debe contener un '@'.<br>";
        validacionAprobada = false;
    }

    let parrafo = document.getElementById("validaciones");

    if (mensaje === "") {
    parrafo.innerHTML = "Todos los datos son válidos.";
    } else {
    parrafo.innerHTML = mensaje;
    }

    if (validacionAprobada) {
    parrafo.style.color = "green";
    } else {
    parrafo.style.color = "red";
    }
}