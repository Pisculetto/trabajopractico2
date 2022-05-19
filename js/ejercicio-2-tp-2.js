let nota = parseInt(prompt('Ingrese una calificación (0 al 10): '))

if(nota <= 2){
    alert("Su nota es muy deficiente")
}

if(nota == 3 || nota == 4){
    document.write("Su nota es Insuficiente")
}

if(nota == 5 || nota == 6){
    document.write("Su nota es Suficiente")
}

if(nota == 7){
    document.write("Su nota es Bien")
}

if(nota == 8 || nota == 9){
    document.write("Su nota es Notable")
}

if(nota == 10){
    document.write("Su nota  es Sobresaliente")
}

if(nota < 0){
    document.write("Ingres un numero del 0 al 10")
}

if(isNaN){
    document.write("Ingrese un numero.")
}