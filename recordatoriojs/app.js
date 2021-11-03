var variable =
  'Definir variables con var Se puede pero es de la forma anterior a ECMAScript 6';

//Por tanto es mejor definirlas con const o con let.
//Las variables con var se pueden dejar sin asignar/inicializar
//Las variables con var se pueden cambiar despues en el codigo

const Constante = 'Se tiene que inicializar si o si';
//Desta variable no se puede cambiar el valor despues

let variableLet = 'Se puede inicializar vacia o con un valor';
//El valor se puede cambiar despues.

//Scoope
/* var musica = 'rock';
if (musica) {
  var musica = 'Grunge';
  console.log('Dentro del if ', musica);
}

console.log('fuera del if ', musica); */
//En este ejemplo la variable dentro del bloque, cambia la variable que esta fuera del bloque

//El problema del scoope se soluciona con let o con const
/* let musica = 'Rock';

if (musica) {
  let musica = 'Metal';
  console.log('Dentro del IF: ', musica);
}

console.log('Dentro del IF: ', musica);

//Template strings
//Antes se concatenaba de esta forma
const nombre = 'Juan';
const trabajo = 'Desarrollador Web';

console.log('Nombre: ' + nombre + '. Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}. Trabajo: ${trabajo}`);

//String literals
const contenedorApp = document.querySelector('#App');

let html = `
    <ul>
        <li>Lemus el chido: ${nombre}</li>
        <li>Lemus el chido: ${trabajo}</li>
    </ul>
`;

contenedorApp.innerHTML = html; */

//Funciones y los distintos tipos de funciones
//Function declaration
//Se pueden primero llamar y luego declarar
/* function saludar(nombre) {
  console.log('Bienvenido ' + nombre);
}
saludar('Juan');

// Function expression
//Primero se tienen que declarar antes de llemar a la funcion
const cliente = function (nombreCliente) {
  console.log('Cliente: ' + nombreCliente);
};
cliente('Juan');
 */

//Parametros default
/* function actividad(nombre = 'LemusElChido', actividad = 'Rifa') {
  console.log(
    `La persona ${nombre} esta realizando la actividad "${actividad}"`
  );
} */
/* 
const actividad = function (nombre = 'LemusElChido', actividad = 'Rifa') {
  console.log(
    `La persona ${nombre} esta realizando la actividad "${actividad}"`
  );
};

actividad('Lemus', 'Desarrollo web');
actividad();

//Arrow Functions
//una funcion normal seria asi:
let Variable = function () {
  //Blque de codigo
};

//En el Arrow function se sustituye el Function por => y pasa a la derecha del parentesis
let Variabe = () => {
  //Bloque de codigo
};

//Puede ser de esta manera
let variable = (
  funcione
) => `Retorno implicito en las arrow functions, aparte de que
si se tiene un solo parametro puede no llevar parentesis, si tiene mas de 1 parametro
si lleva parentesis, tambien se le pueden quitar las llaves {} si es una sola linea`; */

//Objetos en JS
//Los objetos en JS son lo mas impoertante del lenguaje
//Object Literal
/* const persona = {
  nombre: 'Juan',
  profesion: 'Web',
  edad: 500,
};
console.log(persona.nombre); */

//object constructor
//permite crear objetos con distintos valores
/* function Tarea(nombre, prioridad) {
  this.nombre = nombre;
  this.urgencia = prioridad;
}

//la diferencia entre e Object literal y e object constructor es que con el
//object constructor puedes reutiliar el objeto y crear mas objetos solo cambiando parametros
//Aunque el literal sigue siendo el mas usado por que JS soporta clases
const tarea1 = new Tarea('aprender React', 'Urgente');
const tarea2 = new Tarea('aprender Trading', 'Alta');
const tarea3 = new Tarea('aprender PHP', 'Media');
const tarea4 = new Tarea('aprender HTML', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4); */

//Prototypes
const persona = {
  nombre: 'Juan',
  profesion: 'Web',
  edad: 500,
};
console.log(persona.nombre);

function Tarea(nombre, prioridad) {
  this.nombre = nombre;
  this.urgencia = prioridad;
}
const tarea1 = new Tarea('aprender React', 'Urgente');
console.log(tarea1);

function mostrarInformacionTarea() {}
