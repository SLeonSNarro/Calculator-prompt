var n1
var n2
var op
var resultado

function onClickedN1() {
    n1 = prompt("Cifras, puto", "0")

}

function onClickedOp() {
    op = prompt("Operador,puto", "+")

}

function onClickedN2() {
    n2 = prompt("Cifras otra ves, puto", "0")

}



function onClickedRs() {
    var resultado;

    n1 = parseFloat(n1, 10)
    n2 = parseFloat(n2, 10)
    switch (op) {
        case "+":
            resultado = n1 + n2
            break;
        case "-":
            resultado = n1 - n2
            break;
        case "*":
            resultado = n1 * n2
            break;
        case "/":
            resultado = n1 / n2
            break;
    }

    alert(resultado)
}











var contador = 0;

for (var filas = 0; filas < 5; filas++) {
    var F = ""
    for (var columnas = 0; columnas < 5; columnas++) {
        F = F + "k"
        
    }
    console.log(F)

}

























