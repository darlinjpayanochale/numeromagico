let numeroSecreto;
let contadorIntentos;

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    contadorIntentos = 0;

    document.getElementById("mensaje").textContent = "";
    document.getElementById("intentos").textContent = "";
    document.getElementById("numeroIngresado").value = "";

    console.log("Número secreto generado:", numeroSecreto);
}

function verificarNumero() {
    const entrada = document.getElementById("numeroIngresado");
    let numero = entrada.value;

    if (numero === "") {
        alert("Debe ingresar un número.");
        return;
    }

    numero = parseInt(numero);
    contadorIntentos++;

    if (numero > numeroSecreto) {
        document.getElementById("mensaje").textContent = "El número secreto es menor.";
    } else if (numero < numeroSecreto) {
        document.getElementById("mensaje").textContent = "El número secreto es mayor.";
    } else {
        document.getElementById("mensaje").textContent = "¡Correcto! Adivinaste el número secreto.";
        document.getElementById("intentos").textContent =
            `Adivinaste el número en ${contadorIntentos} intento(s).`;
    }

    entrada.value = "";
}

function nuevoJuego() {
    iniciarJuego();
    document.getElementById("mensaje").textContent = "Nuevo juego iniciado.";
}

iniciarJuego();
