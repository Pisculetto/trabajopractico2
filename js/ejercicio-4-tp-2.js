let suma = 0;

do{
    let numero = parseInt(prompt("ingrese un numero: "));
    
    if(Number.isNaN(numero)){

        alert(`no es un numero, intente de nuevo:`);
    }

    else{
        suma = suma+numero;
        console.log(suma);
    }


}

while(confirm(`Ingrese otro numero: `));

document.write(`La suma de sus numeros es: ${suma}`);

