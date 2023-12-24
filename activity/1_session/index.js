// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
for(var i = 1; i<=100; i++){
  if(i%7 == 0){
    console.log(i);
  }
}
console.log(i);

// Ejercicio 5

// Ejercicio 6
const formatter = { 
  prefix: "Hello",
  append: function(str) {
    console.log(this.prefix + str);
  }
};
formatter.append("World"); 


formatter.__proto__.toLowerString = function(str) {
  console.log(str.toLowerCase());
};

formatter.toLowerString("I'm Diana");

