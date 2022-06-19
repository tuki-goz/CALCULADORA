window.addEventListener('load', ()=>{ /* ESCUCHAMOS CUANDO SE CARGA EL DOCUMENTO */
    /* CREAMOS 2 CONSTANTES Y NOS GUARDAMOS LOS ELEMENTOS QUE NECESITAMOS */
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /* CREAMOS OTRA CONSTANTE PARA CONVERTIR EL HTMLCOLLECTION EN ARRAY */
    const keypadButtonsArray = Array.from(keypadButtons);

    /* ITERAMOS POR NUESTRO NUEVO ARRAY DE BOTONES */
    keypadButtonsArray.forEach( (button) => {
        /* A CADA BOTON LE AGREGAMOS UN LISTENER */
        button.addEventListener('click', ()=>{
            calculadora(button, display)
        })
    })
});

function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML) /* TOMA EL STRING, RESOLVEMOS Y LO GUAARDAMOS */
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}