let filas = parseInt(prompt("Introduce numero de filas"));

let columnas = parseInt(prompt("Introduce numero de columnas"));

let i,j;

let resultado = filas * columnas;

document.write("<table border>");

for (i = 0; i < filas; i++) {
    
    document.write("<tr>");
    
    for (j = 0; j < columnas; j++) {
        
        document.write("<td>");
       
        document.write(resultado);
        
        resultado--;
        
        document.write("</td>");
    }
    
    document.write("</tr>");
}

document.write("</table>");