let texto = prompt("Ingrese el texto: ");

for(let i=0; i <texto.length; i++){

    document.write(texto[i]);

    if(i <= texto.length - 1){

        document.write("-");
    }
}