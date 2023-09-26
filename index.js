const Coche = {
    marca: "Toyota",
    modelo: "Corolla",
    matricula: "ABC-123"
  };

const Casa = {
    codPostal: 48100,
    calle: "Calle 1",
    portal: 5,
    piso: 1,
};

const FullStackDeveloper = {
    lenguajes:["JavaScript", "HTML", "CSS"],
    proyectos:["Bikram", "Landing", "Chauchat"],
};

const Perro = {
    nombre: "Frank",
    raza: "Pug",
    color: "Fawn",
    edad: 6,
    ladrar:function(){
        console.log("Ladrido");
    },
    
    popo:function(){
        return Math.random()*3;
    }
};


let marcaPortatil = Portatil.marca;


let marcaPortatil2 = Portatil["marca"];

let grupos = Concierto.grupos;

let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date(26/9/2023);



let nuevoObjeto = {
    nombreArchivo: "documento",
    copias: 3,
    numPaginas: 10,
  };

Impresora.imprimiendo = nuevoObjeto;

const Noticia = {
    titular: "Hola",
    cuerpo: "Hola mundo",
}

const Persona = {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 25,
}

const Avion = {
    numPasajeros: 20,
    despegar: function(){
        console.log("despegando");
    },

    volar: function(){
        console.log("llegando al destino");
    },

    aterrizar: function(){
        console.log("aterrizando");
    },
}

const Paquete = {contenido: []};

const Pais = {
    numHabitantes: 100,
    continente: "Europa",
    gentilicio: "Europeo",
};


let codError = O_Error.codigo;

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

Led.encendido = !Led.encendido;

Movil.temperatura = "20º";






        






