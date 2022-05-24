let palabra="TRWAGMYFPDXBNJZSQVHLCKE";

do{
    let numero = parseInt(prompt("ingrese un numero de 0 a 99999999"));

      if(Number.isNaN(numero) == true){
          alert(`El valor ingresado no es un numero.`);
      }

      else
      {
          if(numero >= 0 && numero <= 99999999)
      {
          for(let i=0; i < 22; i++)
          {
            if((numero % 23) == i){
            document.write(`al numero ${numero} le corresponde la letra ${palabra.charAt(i)} 
            que esta en la posicion ${(numero % 23) + 1}
            <br>`);
            }
          }
       }
       else{
           alert(`Ingrese un numero entre 0 y 99999999`);
       }
    }
  }while(confirm(`Ingresar otro numero?`) == true);