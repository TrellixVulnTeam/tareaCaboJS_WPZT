let personAge = parseInt(prompt("Ingrese su edad"));
console.log("La edad ingresada es:", personAge);
	if (personAge>20) {
		alert("Su categoria es: Liga De Honor");
	}
	else if (personAge<=20 && personAge>18){
		alert("Su categoria es: Junior");
	}
	else if (personAge<=18 && personAge>16) {
		alert("Su categoria es: Juvenil");
	}
	else if (personAge<=16 && personAge>14){
		alert("Su categoria es: Cadete");
	}
	else if (personAge<=14 && personAge>12){
		alert("Su categoria es: Menor");
	}
	else if (personAge<=12 && personAge>=10){
		alert("Su categoria es: Infantil");
	}
	else if (personAge<10){
		alert("Su categoria es: Mini");
	}
	
