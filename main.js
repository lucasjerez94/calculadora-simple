const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (botonApretado === "C") {
            pantalla.textContent = "0";
            return;
        }

        if (botonApretado === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (botonApretado === "=") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});

document.addEventListener("keydown", event => {
    const teclaPresionada = event.key;

    if (/^[0-9+\-*/.=]$/.test(teclaPresionada)) {
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = teclaPresionada;
        } else {
            pantalla.textContent += teclaPresionada;
        }
    } else if (teclaPresionada === "Enter") {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Error!";
        }
    } else if (teclaPresionada === "Escape") {
        pantalla.textContent = "0";
    } else if (teclaPresionada === "Backspace") {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
    }
});
