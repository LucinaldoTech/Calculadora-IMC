
let msg = window.document.querySelector(".msg-resultado");


function calcularIMC() {
    const msg = window.document.querySelector(".msg-resultado");
    const entrada1 = document.querySelector("#peso");
    const entrada2 = document.querySelector("#altura");
    const bott = document.querySelector("#botao");
    

    function calcularResultado() {
        const valor1 = parseFloat(entrada1.value);
        const valor2 = parseFloat(entrada2.value);

        if (isNaN(valor1) || isNaN(valor2) || valor1 <= 0 || valor2 <= 0) {
            msg.textContent = "Digite um peso e altura válidos";
            msg.classList.add("msg-resultado5");
            msg.classList.remove("msg-resultado");
        } else {
            const resultado = valor1 / (valor2 * valor2);

            if (resultado < 17) {
                msg.textContent = "Muito abaixo do peso";
                msg.classList.remove("msg-resultado3");
                msg.classList.add("msg-resultado4");
                msg.classList.remove("msg-resultado5");

            } else if (resultado <= 18.49) {
                msg.textContent = "Abaixo do peso";
                msg.classList.remove("msg-resultado3");
                msg.classList.add("msg-resultado4");
                msg.classList.remove("msg-resultado5");

            } else if (resultado <= 24.99) {
                msg.textContent = "Peso normal";
                msg.classList.remove("msg-resultado3");
                msg.classList.remove("msg-resultado4");
                msg.classList.remove("msg-resultado5");

            } else if (resultado <= 29.99) {
                msg.textContent = "Acima do peso";
                msg.classList.remove("msg-resultado3");
                msg.classList.add("msg-resultado4");
                msg.classList.remove("msg-resultado5");

            } else if (resultado <= 34.99) {
                msg.textContent = "Obesidade I";
                msg.classList.add("msg-resultado3");
                msg.classList.remove("msg-resultado4");
                msg.classList.remove("msg-resultado5");

            } else if (resultado <= 39.99) {
                msg.textContent = "Obesidade II";
                msg.classList.add("msg-resultado3");
                msg.classList.remove("msg-resultado4");
                msg.classList.remove("msg-resultado5");
                

            } else {
                msg.textContent = "Obesidade III";
                msg.classList.add("msg-resultado3");
                msg.classList.remove("msg-resultado4");
                msg.classList.remove("msg-resultado5");

            }
            msg.classList.add("msg-resultado2");
            msg.classList.remove("msg-resultado");
        }
    }

    function clicar(event) {
        event.preventDefault();
        calcularResultado();
    }

    bott.addEventListener("click", clicar);
}

window.onload = calcularIMC;