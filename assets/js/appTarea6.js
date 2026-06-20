let informacion;

document.getElementById("cargaDatos").addEventListener("click", ()=> llamadaApi());
const activarBotones = document.querySelectorAll(".Acciones");
activarBotones.forEach(activarBotones => {activarBotones.disabled = true;}); //al refrescar no se mantenian desabilitados

function llamadaApi ()
    {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
        .then(Response => Response.json())
        .then(data => {informacion = data;});
    document.getElementById("cargaDatos").disabled=true;
    setTimeout(()=>activarBotones.forEach(activarBotones => {activarBotones.disabled = false;}),1000); //revisar un valor optimo
    };

const botonMostrarInfo = document.getElementById("mostrarInfo");
const botonAgruparPjs = document.getElementById("agruparPjs");
const botonCrearFicha = document.getElementById("crearFicha");
const panelDeMuestra = document.getElementById("panelInfo");

botonMostrarInfo.addEventListener("click", () => mostrarInfo(informacion));

function mostrarInfo(datos)
    {
    panelDeMuestra.innerHTML = "";
    datos.map(recorrido =>
        {console.log(`Identificador: ${recorrido.id} - Nombre: ${recorrido.name} - Especie ${recorrido.species} `);
        panelDeMuestra.innerHTML = ` ${panelDeMuestra.innerHTML} <br><br> Identificador: ${recorrido.id} - Nombre: ${recorrido.name} - Especie ${recorrido.species} - <br> Foto: <img src="${recorrido.image}" alt="Imagen No cargada">` 
        });
    }

botonAgruparPjs.addEventListener("click", ()=> clasificar(informacion));

function clasificar(data)
    {
    panelDeMuestra.innerHTML = "";
    let aux = [];
    for (let i = 0; i < data.length; i++)
        {
        aux.push(data[i].species);
        }
    let aux2 = new Set(aux);
    let unicos = Array.from(aux2);
    console.log(unicos);
    for (let i = 0; i < unicos.length; i++)
        {
        panelDeMuestra.innerHTML = `${panelDeMuestra.innerHTML} Personajes de la especie: ${unicos[i]} <br>` ;
        for(let j = 0; j < data.length; j++)
            {
            if (unicos[i] == data[j].species)
            {
            panelDeMuestra.innerHTML = `${panelDeMuestra.innerHTML} - Nombre ${data[j].name} Identificador ${data[j].id} <br>` ;
            };
            }        
        };
    }

botonCrearFicha.addEventListener("click", ()=> creacionDeFicha(informacion));

function creacionDeFicha(data)
    {
    let numero = Math.floor(Math.random()*10);
    panelDeMuestra.innerHTML = "";
    console.log(numero);
    const marco = document.createElement("div"); //creo el elemento, le asigno clase y despues lo que contiene
    marco.classList.add("cajaTarea");
    marco.innerHTML =`Identificador: ${data[numero].id} - Nombre: ${data[numero].name} - Especie ${data[numero].species}`;
    const marcoFoto = document.createElement("div");
    marcoFoto.classList.add("cajaTarea");
    marcoFoto.innerHTML =`Foto: <br> <img src="${data[numero].image}" alt="Imagen No cargada">`;
    panelDeMuestra.appendChild(marco);
    panelDeMuestra.appendChild(marcoFoto);
    }


