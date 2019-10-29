const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
let cantArray;
const alerta = `
<div class="container">
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Lo sentimos!</strong> Tienes que Ingresar numeros Naturales para que funcione correctamente.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</div>
`
const alerta2 = `
<div class="container">
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Lo sentimos!</strong> preciona el boton limpiar para poder calcular de nuevo.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</div>
`
//Funcion Principal
function calcular() {
   if (document.getElementById("mostrar")) {
      document.getElementById("alerta").innerHTML = alerta2
   } else {
      if (num1.value % num2.value == 0) {
         let elemento1 = document.createElement("div");
         elemento1.setAttribute("id", "mostrar")
         elemento1.setAttribute("class", "text-center")
         elemento1.innerHTML = `
         <h4>
         ${ num1.value} = ${num2.value} * ${Math.trunc(num1.value / num2.value)} + 0
         </h4>
      `
         document.body.appendChild(elemento1);

         let elemento2 = document.createElement("div");
         elemento2.setAttribute("id", "mostrar")
         elemento2.setAttribute("class", "text-center")
         elemento2.innerHTML = `
      <p class="text-center">EL MCD es el último residuo no nulo, por lo tanto es: ${ num2.value}</p>
      `
         document.body.appendChild(elemento2);

         cantArray = 1;
      } else {

         if (validar(num1) == false || validar(num2) == false) {
            document.getElementById("alerta").innerHTML = alerta;
         } else {
            algoritmo(num1.value, num2.value);
         }
      }

   }

};


//Funciones
// Validamos si el dato ingresado realmente es un numero;
function validar(valor) {
   let dato = parseInt(valor.value);
   dato * 1;
   if (isNaN(dato) == true || valor.value % 1 > 0) {
      console.log("Ingrese un numero Natural ya que " + valor.value + " No lo es");
      return false;
   }
   return true;
}

// Division Euclídeana ALGORITMO
function algoritmo(dato1, dato2) {
   let array = [];
   let suma;
   let resultado;
   do {
      let elemento = document.createElement("div");
      elemento.setAttribute("id", "mostrar")
      elemento.setAttribute("class", "text-center")
      resultado = Math.trunc(dato1 / dato2);
      suma = (dato1 - (dato2 * resultado));
      array.push(suma);
      elemento.innerHTML = `
      <h4>
      ${ dato1} = ${dato2} * ${resultado} + ${suma}
      </h4>`
      document.body.appendChild(elemento);
      dato1 = dato2;
      dato2 = suma;

   } while (suma > 0);

   cantArray = array.length;   
   

   if (array[cantArray-2] == 1) {
      let elemento1 = document.createElement("div");
      elemento1.setAttribute("id", "mostrar")
      elemento1.setAttribute("class", "text-center")
      elemento1.innerHTML = `
      <p class="text-center">EL MCD es el último residuo no nulo, por lo tanto es: 1 , y como es 1 deducimos que son primos entre ellos</p>
      `
      document.body.appendChild(elemento1);
   } else {
      let elemento2 = document.createElement("div");
      elemento2.setAttribute("id", "mostrar")
      elemento2.setAttribute("class", "text-center")
      elemento2.innerHTML = `
      <p class="text-center">EL MCD es el último residuo no nulo, por lo tanto es: ${array[array.length - 2]}</p>
      `
      document.body.appendChild(elemento2);
   }
}

//Limpiar la consulta
function limpiar() {

   if (cantArray > 0) {
      for (let i = 0; i <= cantArray; i++) {
         let idName = document.getElementById("mostrar");
         idName.parentNode.removeChild(idName);
      }

   }
   num1.value = "";
   num2.value = "";

}