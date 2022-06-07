let texto = prompt("Ingrese un texto: ");

for (i = 0; i < texto.length; i++) {
  if (
    texto.charAt(i) == "a" ||
    texto.charAt(i) == "e" ||
    texto.charAt(i) == "i" ||
    texto.charAt(i) == "o" ||
    texto.charAt(i) == "u"
  ) {
    let vocal = i;
    document.write(`La primer vocal está en la posición ${i + 1}.`)
    break;
  }
}
