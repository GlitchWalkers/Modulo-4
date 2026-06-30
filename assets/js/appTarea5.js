//#region Promesa con demora
const datos =   {nombre: "Mario",apellido: "Bros",edad: 55,ciudad: "Reino Hongo"};
let demora = 1000;
const botonEjecutar = document.getElementById("ejecutar");
const panel = document.getElementById("panel1");
function mostrarDatos()
    {
    panel.innerHTML="";
    let check = document.querySelector('input[name="resp"]:checked').value;
    panel.innerHTML+=`Creando Promesa...<br>`;
    promesa(check).then(yep => panel.innerHTML+=`Respuesta: ${JSON.stringify(yep)}`).catch(nope => panel.innerHTML+=nope);
    }

function promesa(check)
    {
    return new Promise((resolve,reject) =>
                {
                setTimeout(() => {panel.innerHTML+=`Registrando Promesa...<br>`;},2*demora);
                setTimeout(() => {panel.innerHTML+=`Esperando respuesta...<br>`;},3*demora);
                setTimeout(() => {
                                    if (check=="si")
                                        {resolve(datos);} 
                                    else 
                                        {reject("No solicita informacion");}
                                 },4*demora);                 
                })
    };

botonEjecutar.addEventListener("click",()=>mostrarDatos());

//#endregion

//#region Promesa en funcion de tiempo
const botonEjecutar2 = document.getElementById("ejecutar2");
const panel2 = document.getElementById("panel2");

function checkHora()
    {
    let hora = new Date();
    console.log(hora);
    panel2.innerHTML="";
    promesa2(hora).then(ok => panel2.innerHTML+=`Respuesta: ${ok}`).catch(notOk => panel2.innerHTML+=notOk);
    };

function promesa2(hora)
    {
    let seg = hora.getSeconds();
    return new Promise((resolve,reject) =>
                {
                if (seg > 30)
                    {
                    console.log("Mas de 30 segundos");
                    if (seg % 2 == 0)
                        {
                        resolve(hora.toLocaleTimeString());
                        }
                    else
                        {
                        reject("Error - Impar")
                        };   
                    } 
                else 
                    {
                    console.log("30 segundos o menos");
                    if (seg % 2 !== 0)
                        {
                        resolve(hora.toLocaleTimeString());
                        }
                    else
                        {
                        reject("Error - Par")
                        };   
                    }
                });
    };
botonEjecutar2.addEventListener("click",()=>checkHora());
//#endregion

//#region Promesa con proceso pesado
const botonEjecutar3 = document.getElementById("ejecutar3");
const panel3 = document.getElementById("panel3");

function procesoPesado()
    {
    let fecha = new Date();
    console.log("Creando promesa");
    panel3.innerHTML="";
    panel3.innerHTML+=`Creando Promesa: ${fecha.toLocaleTimeString()}... <br>`;
    promesa3(fecha).then(yep => panel3.innerHTML+=`Respuesta: ${JSON.stringify(yep)}`).catch(nope => panel3.innerHTML+=nope);
    };

function promesa3(aux1)
    {
    return new Promise((resolve,reject) =>
                {
                console.time("Proceso Pesado");
                console.log("Inicio Proceso pesado");
                for (let i = 0; i < 1e9; i++);
                for (let i = 0; i < 1e9; i++);
                console.timeEnd("Proceso Pesado");
                panel3.innerHTML+=`Registrando Promesa...<br>`;
                panel3.innerHTML+=`Esperando respuesta...<br><br>`;
                if (true)
                    {
                    let aux2 = new Date();
                    resolve(`Listo a las ${aux2.toLocaleTimeString()} <br> El tiempo de respuesta aproximado fue de ${aux2-aux1} ms <br> El tiempo de respuesta lo condiciona la velocidad a la que se realiza el proceso de calculo`);
                    } 
                else 
                    {reject("No deberia haber pasado esto");}
         
                })
    };
botonEjecutar3.addEventListener("click",()=>procesoPesado());

//#endregion
