/*Crear 3 variables un dia, otro mes y otra de año 
de mi fecha de nacimiento y calcular que día de la semana naci */

let day=21,month=6,year=2001

let fecha = new Date(year,month,day)

let dayOWeek=["Domingo", "Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

console.log(dayOWeek[fecha.getDay()])