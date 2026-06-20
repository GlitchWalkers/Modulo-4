//#region clase de taxis
class taxis
    {
    constructor(patente, marca, modelo)
        {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        }
    };

class tradicional extends taxis
    {
    constructor(patente,marca,modelo)
        {
        super(patente,marca,modelo);
        this.techo = "Techo Amarillo"; //podria ser condicion true/False
        this.licencia = "Licencia Clase A1";
        }
    }
class particular extends taxis
    {
    constructor(patente,marca,modelo)
        {
        super(patente,marca,modelo);
        this.licencia = "Licencia Clase B";
        }    
    }
class express extends particular
    {
    constructor(patente,marca,modelo)
        {
        super(patente,marca,modelo);
        this.tipo = "Express";   
        }
    }

class premium extends particular
    {
    constructor(patente,marca,modelo)
        {
        super(patente,marca,modelo);
        this.tipo = "Premium";   
        }
    }

class cargo extends taxis
    {
    constructor(patente,marca,modelo,peso)  
        {
        super(patente,marca,modelo);
        this.peso = peso;
        }  
    }

const autos =[];

autos.push(new taxis("BXTT", "Suzuki", "Celerio"))
autos.push(new tradicional("JYFF", "Mg", "MG3"));
autos.push(new express("ACDC44", "mazda", "mazda 6"));
autos.push(new premium("DLJJ12", "audi", "modelo 3"));
autos.push(new cargo("RBBG68", "changan", "Ultimo", "2500kg"));

for (let index = 0; index < autos.length; index++)
    {
    let aux = document.getElementById("datosTaxi");
    aux.innerHTML += `El constructor es ${autos[index].constructor.name} y los datos del taxi son ${JSON.stringify(autos[index])} <br/> ` 
    console.log(autos[index].constructor.name);
    console.log(autos[index]);    
    }
//#endregion

//#region clases de Sony
class producto
    {
    constructor(codigo, nombre, precio, stock)
        {
        this.id = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = parseInt(stock);
        }
        mostrarDatos()
            {
            console.log(`El producto ${this.id} ${this.nombre} tiene un valor de $${this.precio} clp y quedan disponibles ${this.stock} unidades`);
            }
        reservarStock()
            {
            this.stock = this.stock -1;
            }
    };    

class consolas extends producto
    {
    constructor(codigo, nombre, precio, stock, categoria, descripcion)
        {
        super(codigo, nombre, precio, stock);
        this.categoria = categoria;
        this.descripcion = descripcion;
        }
    }

const producto2 = new consolas(2, "PS5", 790000, 15, "Consolas y Juegos", "Consola PS5 version digital"); //
const botoninfo = document.getElementById("infoSony");
const botonReserva = document.getElementById("reservarStock");

botoninfo.addEventListener("click", ()=> producto2.mostrarDatos());
botonReserva.addEventListener("click", ()=> producto2.reservarStock());

//#endregion

//#region clase Sumatoria
/* 
Define la clase Sumatoria, cuyo constructor reciba un número base.

Implementa el método sumar() que calcule y muestre la sumatoria acumulada, avanzando progresivamente con cada ejecución.

Implementa una página con un botón para ejecutar el método sumar() desde un objeto de la clase Sumatoria.

El objeto debe ser creado con un número base aleatorio entre 1 y 10.

La primera línea de salida debe ser generada por el constructor, y las siguientes por el método sumar().
 */
let acumulado = 0;
let sumatoria1;
const botonGenerar = document.getElementById("generarNum");
const botonSumar = document.getElementById("sumar");
const botonReset = document.getElementById("reset");

class sumatoria {
    constructor(base,acumulado)
    {
    this.base = base;
    this.total = acumulado;
    }
    sumar()
    {
    this.total = this.total + this.base;
    acumulado = this.total;
    return this.total;
    }
}

botonGenerar.addEventListener("click",
    () =>   {sumatoria1 = new sumatoria((Math.floor(Math.random()*10)+1),acumulado)
            document.getElementById("numGenerado").innerText=sumatoria1.base;
            });

botonSumar.addEventListener("click",
    ()=>    {sumatoria1.sumar();
            document.getElementById("acumulado").innerText=sumatoria1.total;
            });

botonReset.addEventListener("click", 
    ()=>    {acumulado = 0;
            sumatoria1.total = 0;
            document.getElementById("acumulado").innerText=acumulado;
            });

//#endregion