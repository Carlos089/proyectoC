// 03-ejercicios-extra-operadores-y-flujos.pdf MOD 3 INI A JS


// 1º DÍAS Y ASIGNATURA
var toca = prompt("Introduce el día de la semana para saber qué asignatura toca")
switch (toca) {
    case "Lunes": console.log("Matemáticas"); break;
    case "Martes": console.log("Lengua"); break;
    case "Miércoles": console.log("Física"); break;
    case "Jueves": console.log("Química"); break;
    case "Viernes": console.log("Gimnasia"); break;
    default: console.log("Vuelve a introducir el día de la semana"); break;
}


// 2º HORA, BUENOS DÍAS, TARDES O NOCHES
var hora = prompt("Introduce la hora (en formato de 24 horas) para saber la expresión")
if (hora >= 6 && hora < 12) {
    console.log("Buenos días")
} else if (hora >= 12 && hora < 19) {
    console.log("Buenas tardes")
} else if (hora >= 19 && hora <= 24) {
    console.log("Buenas noches")
} else if(hora > 0 && hora < 6) {
    console.log("Buena madrugada")
} else { console.log("Vuelve a introducir la hora") }


// 3º diaSemana
var diaSemana = prompt("Introduce el número (del 1 al 7) del día de la semana para ver qué nombre le corresponde")
switch(diaSemana) {
    case "1": console.log("Lunes"); break;
    case "2": console.log("Martes"); break;
    case "3": console.log("Miércoles"); break;
    case "4": console.log("Jueves"); break;
    case "5": console.log("Viernes"); break;
    case "6": console.log("Sábado"); break;
    case "7": console.log("Domingo"); break;
    default: console.log("Vuelve a introducir el número de día semanal"); break;
}


// 4º CALCULAR NOTA MEDIA
var nota = prompt("Introduce tu número de nota para conocer su expresión")
if (nota >= 0 && nota < 5) {
    console.log("No apto")
} else if (nota >= 5 && nota < 7) {
    console.log("Notable")
} else if (nota >= 7 && nota <= 10) {
    console.log("Sobresaliente")
} else { console.log ("Vuelve a introducir la nota por favor")}


// 5º HORÓSCOPO
var dia = prompt("Para averiguar el signo de horóscopo, introduce el día")
var mesNacimiento = prompt("Ahora introduce el mes de nacimiento")

switch (mesNacimiento) {
    case "3": if (dia >= 21) {
        console.log("Aries")
    }; break;
    case "4": if (dia <= 19) {
        console.log("Aries")
    }; break;
    case "4": if (dia >= 20) {
        console.log("Tauro")
    }; break;
    case "5": if (dia <= 20) {
        console.log("Tauro")
    }; break;
    case "5": if (dia >= 21) {
        console.log("Géminis")
    }; break;
    case "6": if (dia <= 20) {
        console.log("Géminis")
    }; break;
    case "6": if (dia >= 21) {
        console.log("Cáncer")
    }; break;
    case "7": if (dia <= 22) {
        console.log("Cáncer")
    }; break;
    case "7": if (dia >= 23) {
        console.log("Leo")
    }; break;
    case "8": if (dia <= 22) {
        console.log("Leo")
    }; break;
    case "8": if (dia >= 23) {
        console.log("Virgo")
    }; break;
    case "9": if (dia <= 22) {
        console.log("Virgo")
    }; break;
    case "9": if (dia >= 23) {
        console.log("Libra")
    }; break;
    case "10": if (dia <= 22) {
        console.log("Libra")
    }; break;
    case "10": if (dia >= 23) {
        console.log("Escorpio")
    }; break;
    case "11": if (dia <= 21) {
        console.log("Escorpio")
    }; break;
    case "11": if (dia >= 22) {
        console.log("Sagitario")
    }; break;
    case "12": if (dia <= 21) {
        console.log("Sagitario")
    }; break;
    case "12": if (dia >= 22) {
        console.log("Capricornio")
    }; break;
    case "1": if (dia <= 19) {
        console.log("Capricornio")
    }; break;
    case "1": if (dia >= 20) {
        console.log("Acuario")
    }; break;
    case "2": if (dia <= 18) {
        console.log("Acuario")
    }; break;
    case "2": if (dia >= 19) {
        console.log("Piscis")
    }; break;
    case "3": if (dia <= 20) {
        console.log("Piscis")
    }; break;
    default: console.log("Introduce de nuevo los datos"); break;
}

/*
Signo					Inicio					    Fin
Aries					21 de marzo				    19 de abril
Tauro					20 de abril				    20 de mayo
Géminis					21 de mayo				    20 de junio
Cáncer					21 de junio				    22 de julio
Leo			    		23 de julio				    22 de agosto
Virgo					23 de agosto				22 de septiembre
Libra					23 de septiembre			22 de octubre
Escorpio				23 de octubre				21 de noviembre
Sagitario				22 de noviembre				21 de diciembre
Capricornio				22 de diciembre				19 de enero
Acuario					20 de enero				    18 de febrero
Piscis					19 de febrero				20 de marzo
*/


// 6º NUMERO PAR O INPAR
var numeroParOInpar = prompt("Introduce un número para conocer si es par o inpar")
numeroParOInpar % 2 == 0 ? console.log(numeroParOInpar, "es número par") : console.log(numeroParOInpar, "Es número inpar")

// 7º DECIR SI VARIABLE ES POSITIVO O NEGATIVO
var posONeg = confirm("¿Positivo o negativo? Decídelo con Ok o Cancel")
console.log(posONeg)

// 8º DECIR SI Nº ES MAYOR A 100
var numeroMayorONo = prompt("Introduce un número y vemos si es mayor o no a 100")
numeroMayorONo > 100 ? console.log("Es mayor a 100") : console.log("Es menor o igual a 100")

// 9º USAR 3 VARIABLES Y DECIR SI 3ª ES IGUAL A SUMA DE 1ª Y 2ª
const var1 = 4, var2 = 6, var3 = 10
var3 == var1 + var2 ? console.log("var3 es igual a la suma de var1 y var2") : console.log("No es igual")

// 10º SEGÚN LOS OBJETOS, CALCULAR ÁREA DE CUADRADO Y TAMBIÉN DEL CÍRCULO:
var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGemotricFigure: 'Cuadrado'
}

var circle = {
    radius: 5,
    typeOfGemotricFigure: 'Círculo'
}

const areaCuadrado = square.sideOne * square.sideTwo
console.log("Área del cuadrado:", areaCuadrado)

const areaCirculo = 3.14 * (5*2)
console.log("Área del círculo:", areaCirculo)