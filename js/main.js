let personAge = parseInt(prompt("Ingrese su edad"));
console.log("La edad ingresada es:", personAge);
	if (personAge>20) {
		alert("Su categoria es: Liga De Honor");
		console.log("Su categoria es: Liga De Honor");
	}
	else if (personAge<=20 && personAge>18){
		alert("Su categoria es: Junior");
	}
	else if (personAge<=18 && personAge>16) {
		alert("Su categoria es: Juvenil");
		console.log("Su categoria es: Juvenil");
	}
	else if (personAge<=16 && personAge>14){
		alert("Su categoria es: Cadete");
		console.log("Su categoria es: Cadete");
	}
	else if (personAge<=14 && personAge>12){
		alert("Su categoria es: Menor");
		console.log("Su categoria es: Menor");
	}
	else if (personAge<=12 && personAge>=10){
		alert("Su categoria es: Infantil");
		console.log("Su categoria es: Infantil");
	}
	else if (personAge<10){
		alert("Su categoria es: Mini");
		console.log("Su categoria es: Mini");
	}
	

function jugadoraLhd (nombre, edad, posicion){
	this.nombre = nombre;
	this.edad = edad;
	this.posicion = posicion;
	this. presentation = function(){console.log('Hola! soy '+ this.nombre+ " "+ 'y juego de ' + this.posicion)};
}
const jugadora1 = new jugadoraLhd("Natalia Cabo",21, "Arquera");
const jugadora2 = new jugadoraLhd("Camila Battaglia",21,"Extremo Izquierdo");
const jugadora3 = new jugadoraLhd("Valentina Vivas",21,"Pivot");

jugadora3.presentation();

for(const posicion in jugadora3){
	console.log(jugadora3[posicion]);
}

const array = [jugadora1,jugadora2,jugadora3];
array.push (new jugadoraLhd("Lucia Gomez",18, "Central"));
console.log(array);