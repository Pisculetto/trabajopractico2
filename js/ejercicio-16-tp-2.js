let texto = prompt("Ingrese un texto: ");
console.log(texto);

for (let i = texto.length; i >= 0; i--) {
  document.write(texto.charAt(i));
  console.log(texto.charAt(i));
}