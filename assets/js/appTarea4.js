const botonValidar = document.getElementById("validacion");
botonValidar.addEventListener("click",()=> pedirNum());

let numero = 0;

function pedirNum()
    {
    let loop = true;
        while (loop)
        {
        numero = prompt("Ingrese un Numero Valido");
        loop = validar_numero(numero,respuesta);    
        }
    console.log("El numero validado es: " + numero);
    document.getElementById("numValido").innerHTML=`El numero ${numero} es un numero valido`;
    }

function validar_numero(num,resp)
    {
    if(!isNaN(num))
        {
        resp(true);
        return false;     
        }
    else
        {
        resp(false);
        return true;
        };
    }

function respuesta(check)
    {
    if (check)
        {
        alert("Es un numero valido")
        } 
    else
        {
        alert("Ingreso caracteres incorrectos");
        }
    }

const botonSumatoria = document.getElementById("calcularSumatoria");

botonSumatoria.addEventListener("click", ()=> calcular_avisar(numero,avisar));

function calcular_avisar(num,aviso)
{
let sumatoria = 0;
for (let i = 1; i <= num; i++)
    {
    if (i%2 !== 0)
        {
        sumatoria += i;
        }
    }
setTimeout(() => { aviso(sumatoria);}, 5000);
}

function avisar (sum)
    {
    console.log(`El valor de la sumatoria es ${sum} y se obtuvo hace 5 segundos`);   
    document.getElementById("resultadoSumatoria").innerHTML=`El valor de la sumatoria es ${sum} y se obtuvo hace 5 segundos`; 
    }

const botonSumatoriaCondicion = document.getElementById("sumatoriaCondicion");

botonSumatoriaCondicion.addEventListener("click", ()=> calcular_avisar_condicion(numero, avisarOk, avisarError))

function calcular_avisar_condicion(num, aviso, avisoError)
{
    let sumatoria = 0;
    for (let i = 1; i <= num; i++) 
        {
        for (let j = 1; j <= i; j++)
            {
            sumatoria += j;            
            }     
        }
    
    if (sumatoria < 1000)
        {
        aviso(sumatoria);
        }
    else
        {
        avisoError(sumatoria);
        }
}

function avisarOk(sum)
{
console.log(`Las sumatorias sucesivas de ${numero} es ${sum}`);
document.getElementById("resultadoSumatoriaCondicion").innerHTML = `Las sumatorias sucesivas de ${numero} es ${sum}`;
}

function avisarError(sum)
{
console.log(`El valor de la sumatoria es  ${sum} y sobrepasa el objetivo de la funcion`);
document.getElementById("resultadoSumatoriaCondicion").innerHTML = `El valor de la sumatoria es  ${sum} y sobrepasa el objetivo de la funcion`;
}