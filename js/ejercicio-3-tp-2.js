let frases = "";

do{
    let cadenas = prompt("ingrese una cadena de texto: ");
    
    if(frases ==""){
        
        frases = frases + cadenas;
    }

    else{
        frases = frases + "-" + cadenas;
    }


}

while(confirm("Quiere ingresar mas?"));

document.write(frases);