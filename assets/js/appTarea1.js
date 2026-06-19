//#region clase alumno
class alumno //clase
    {
    constructor(nombre, edad,carrera)
        {
        this.nombre = nombre; //propiedades
        this.edad = edad;
        this.carrera = carrera;
        }
    mostrarInfo() //metodos
        {
        document.getElementById("regNuevo").innerHTML = (`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
        }   
    };

const cargaDatos = document.getElementById("datosFormulario");
cargaDatos.addEventListener("submit", ()=> agregarAlumno());
let aluId = 0;
const planillaAlumnos = [];

function agregarAlumno()
    {
    event.preventDefault();
    let auxNombre = document.getElementById("aluNombre").value;
    let auxEdad = document.getElementById("aluEdad").value;
    let auxCarrera = document.getElementById("aluCarrera").value;
    cargaDatos.reset();
    planillaAlumnos.push(new alumno (auxNombre, auxEdad, auxCarrera));
    planillaAlumnos[aluId].mostrarInfo();
    mostrarListado();
    aluId++;
    };
 
    function mostrarListado ()
    {
    const historial = document.getElementById("regAnteriores");
    historial.innerHTML =`${aluId},${planillaAlumnos[aluId].nombre},${planillaAlumnos[aluId].edad},${planillaAlumnos[aluId].carrera} <br> ${historial.innerHTML} `;
    console.log(planillaAlumnos);
    };
//#endregion clade alumno

//#region clase banda Musical
class banda_musical 
    {
    constructor(nombre, genero, integrantes, discos)
        {
        this.nombre = nombre;
        this.genero = genero;
        this.integrantes = integrantes;
        this.discos = discos;
        }
        mostrarInfo()
            {
             console.log(`Banda: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes}`);
             alert(`Banda: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes}`);     
            }
        
        listarDiscos()
            {
            console.log("Discos:", this.discos.join(", "));    
            alert(`Discos: ${this.discos.join(", ")}`);    
            }
    }

const registroBanda = document.getElementById("datosBanda");
const datosBanda = document.getElementById("mostrarInfoBanda");
const discosBanda = document.getElementById("listarDiscos");
let laBanda;

registroBanda.addEventListener("submit", ()=>{laBanda = capturarBanda()});

function capturarBanda()
    {
    event.preventDefault();
    let aux1 = document.getElementById("bandaNombre").value;
    let aux2 = document.getElementById("bandaGenero").value;
    let aux3 = document.getElementById("bandaIntegrantes").value.split(" ");
    let aux4 = document.getElementById("bandaDiscos").value.split(" ");

    console.log(aux1,aux2,aux3,aux4);
    
    return new banda_musical(aux1, aux2,aux3,aux4);
    }

datosBanda.addEventListener("click",()=>laBanda.mostrarInfo());
discosBanda.addEventListener("click",()=>laBanda.listarDiscos());

//#endregion clase banda

//#region clase perro
class perro
    {
    constructor(nombre,raza,edad)
        {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        }   
    mostrarDatos()
        {
        console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad}`); 
        alert(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad}`);
        }
    ladrar()
        {
        console.log("¡Guau guau!")
        alert("¡Guau guau!");
        }
    };

const perroInfo = document.getElementById("datosPerro");
const perroMostraDatos = document.getElementById("mostrarInfoPerro");
const ladrar = document.getElementById("ladrar");
document.getElementById("ladrar").disabled=true; /* no deja ladrar si no se ha ingresado datos del perro */
let mascota = new perro ("Sin Datos Ingresados", "Sin datos ingresados", NaN);

perroInfo.addEventListener("submit", ()=> {mascota = agregarPerro(document.querySelector(".perroNombre").value,document.querySelector(".perroRaza").value, document.querySelector(".perroEdad").value)}); /* al apretar el boton entro con los campos del formulario llamados con el query.value y le asigno a la variable mascota lo que retorna mi funcion, que es crear un nuevo objeto perro se  */

perroMostraDatos.addEventListener("click", ()=>mascota.mostrarDatos());
ladrar.addEventListener("click", ()=>mascota.ladrar());

function agregarPerro(nombre, raza, edad)
    {
    event.preventDefault();
    perroInfo.reset();
    document.getElementById("ladrar").disabled=false;
    return new perro(nombre, raza, edad);
    }
//#endregion


    
    