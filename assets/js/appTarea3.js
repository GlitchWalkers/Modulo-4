const botonRepetir = document.getElementById("botonRepeticion");
botonRepetir.addEventListener("click", ()=> generarRepeticiones());

function generarRepeticiones()
    {
    let palabra = document.getElementById("palabraRepetir").value;
    let veces = document.getElementById("vecesRepetir").value;
    const marco = document.createElement("div");
    let fraseCreada ="";
 
    for (let i = 0; i < veces; i++)
        {
        fraseCreada += `${palabra} `;      
        };
    console.log(fraseCreada);
    marco.innerHTML= `La repeticion de frase es: <b>${fraseCreada} </b>`;
    document.getElementById("seccionRepeticion").appendChild(marco);
    }


const botonAplicarColor = document.getElementById("aplicacion");

botonAplicarColor.addEventListener("click", (colorElegido) => 
    {
    colorElegido = document.getElementById("colorElegido").value;
    document.getElementById("textoMuestra").style.backgroundColor = colorElegido;
    console.log("Cambio de color a: " + colorElegido);
    });


const botonOperaciones = document.getElementById("operaciones");
botonOperaciones.addEventListener("click", ()=> calculos());

function calculos()
    {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    const marco = document.createElement("div");
    let resultados = (
        `<pre> Las operaciones matematicas son:
        ${num1} + ${num2} = ${num1 + num2}
        ${num1} - ${num2} = ${num1 - num2}
        ${num1} * ${num2} = ${num1 * num2}
        ${num1} / ${num2} = ${num1 / num2}
        La suma de los resultados es ${(num1 + num2)+(num1 - num2)+(num1 * num2)+(num1 / num2)}
        </pre>`);
    console.log(resultados);
    marco.innerHTML = resultados;
    document.getElementById("seccionOperaciones").appendChild(marco);
    }


const botonInvertir = document.getElementById("invertir");
botonInvertir.addEventListener("click", ()=> invertirCadena());

function invertirCadena()
    {
    let cadena = document.getElementById("textoInvertir").value;
    let textoInvertido = "";
    const marco = document.createElement("div");
    
    for (let i = 0; i < cadena.length; i++)
        {
        textoInvertido += cadena.at((cadena.length-1)-i);
        }
    console.log(textoInvertido);
    marco.innerHTML = textoInvertido;
    document.getElementById("seccionInvertir").appendChild(marco);
    }