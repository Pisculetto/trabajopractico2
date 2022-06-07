let texto = prompt("Ingrese un texto");

texto.toLowerCase;

let vocales = 0;

for(i = 0; i < texto.length; i++){


    if(
        texto.charAt(i) == "a" ||
        texto.charAt(i) == "e" ||
        texto.charAt(i) == "i" ||
        texto.charAt(i) == "o" ||
        texto.charAt(i) == "u" 
    )
        vocales++;
        
     
}
console.log(texto);
console.log(vocales);

document.write(`En el texto hay ${vocales} vocales.`)