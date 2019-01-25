/*crear un objeto con los datos personales
nombre, apellido_p, apellido_m, telefono, email
calificaciones y calcular promedio*/

let persona={
    nombre:'Sandra Kellyn',
    apellido_p:'Gómez',
    apellido_m:'Moreno',
    telefono:7721131955,
    email:'sandra21143@gmail.com',
    calificaciones:[7.3,7.5, 7.7]
  }
  let totalCal=0
  for(let i=0;i<persona.calificaciones.length;i++){
    totalCal+=persona.calificaciones[i]
    if(i+1==persona.calificaciones.length){
      totalCal=totalCal/persona.calificaciones.length
    }
  }
  
  console.log(totalCal)