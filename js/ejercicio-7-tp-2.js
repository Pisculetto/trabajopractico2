let numIngresado = parseInt(prompt("ingrese un numero del 1 al 50:"));

if (numIngresado >= 1 && numIngresado <= 50) {
  for (let numero = numIngresado ; numero >= 1 ; numero--) {

    for (let repetir = numero; repetir >= 1; repetir--) {
      document.write(`${numero}`);
    }
    document.write(`<br>`);
  }
}

else{
    alert("Ingrese un numero valido.")
}