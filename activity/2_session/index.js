// Ejercicio 1
const getProperties = obj => Object.keys(obj);

let person = { name: "Diana", lastname: "Florez", profession: "Developer" };

let properties = getProperties(person);
console.log(properties); 



// Ejercicio 2

// 1. Global Scope: Cuando se usa fuera de cualquier función o método, this hace referencia al objeto global, que en un navegador sería window.

console.log(this === window); // true

// 2. Objeto en un método: En este caso, this se refiere al objeto que contiene el método siendo ejecutado.

const obj = {
  prop: 'Hola',
  saludo() {
    console.log(this.prop);
  }
};

obj.saludo(); // print 'Hola'

// 3. Función Constructora: Dentro de una función constructora, this apunta al objeto que está siendo creado.

function Persona(nombre) {
  this.nombre = nombre;
  this.saludo = function() {
    console.log('Hola, soy ' + this.nombre);
  };
}

const persona1 = new Persona('Diana');
persona1.saludo(); // Imprimirá 'Hola, soy Diana'

// 4. Métodos call(), apply(), bind(): Estos métodos permiten establecer explícitamente el valor de this.

function saludo() {
  console.log('Hola, ' + this.nombre);
}

const persona = { nombre: 'Diana' };

// Usando call para establecer this a persona
saludo.call(persona); // Imprimirá 'Hola, Diana'

// Usando apply para establecer this a persona
saludo.apply(persona); // Imprimirá 'Hola, Diana'

// Usando bind para crear una nueva función con this vinculado a persona
const saludoPersona = saludo.bind(persona);
saludoPersona(); // Imprimirá 'Hola, Diana'


// 1. Uso de new:
// Arrow functions: No se pueden utilizar como constructoras con new.
// Function expressions: Se pueden usar como constructoras con new.

const FuncExpression = function() {
  // Código constructor
};

const ArrowFunc = () => {
  // Esto dará un error si se intenta utilizar con 'new'
};

// 2. Argumento arguments:
// Arrow functions: No tienen su propio objeto arguments.
// Function expressions: Tienen acceso al objeto arguments que contiene los argumentos pasados a la función.

// 3. Sintaxis:
// Arrow functions: Tienen una sintaxis más concisa y se definen utilizando =>.
// Function expressions: Se definen usando la palabra clave function.

// 4. this contextual:
// Arrow functions: No tienen su propio this. this dentro de una arrow function se toma del contexto en el que se definió la función.
// Function expressions: Tienen su propio this, que se determina en el momento en que se llama a la función.

// Ejercicio 3
class InvertirCadena {
  constructor() {
    this.cadenaInvertir = ''; // Atributo cadenaInvertir como una cadena vacía
  }

  invertir() {
    if (this.cadenaInvertir === '') {
      throw new Error('La cadena está vacía. Se requiere una cadena para invertir.');
    } else {
      // Función para invertir la cadena y mostrar el resultado en consola
      const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
      console.log(cadenaInvertida);
    }
  }

  nuevoMetodo() {
    console.log('¡Este es un nuevo método!');
  }
}

const invertirCadena = new InvertirCadena();

try {
  invertirCadena.invertir(); // Ejecución inicial sin cambiar cadenaInvertir
} catch (error) {
  console.error(error.message);
}

invertirCadena.cadenaInvertir = 'Hola mundo'; // Cambio del valor de cadenaInvertir

try {
  invertirCadena.invertir(); // Llamada a invertir después de cambiar cadenaInvertir
} catch (error) {
  console.error(error.message);
}

// Accediendo a nuevoMetodo de forma segura
if (invertirCadena.nuevoMetodo instanceof Function) {
  invertirCadena.nuevoMetodo();
} else {
  console.log('El método nuevoMetodo no está definido en el objeto invertirCadena.');
}

// Ejercicio 4
class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('Usuario logeado');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

let login = new Login('admin', 'passwd');
let logbad = new Login('diana', 'test');

login.login(); // Alerta -> Usuario logeado
logbad.login(); // Alerta -> Usuario o contraseña incorrectos


// Ejercicio 5
// esta en el activity/2_session/index.html. 



// Ejercicio 6
// esta en el activity/2_session/index.html. 



let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
