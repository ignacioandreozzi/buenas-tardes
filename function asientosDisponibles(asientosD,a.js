function asientosDisponibles(asientosD,asientoS){
    let mensajeF = " Lo sentimos , el asiento numero 15 esta ocupado , pero aun quedan mas acientos disponibles"
    let mensaje = "Felicitaciones, el asiento numero 15 esta disponible"
   for ( let i = 0 ; i <= asientosD.length ; i++ ){
       if ( asientosD[i] == asientoS ) {
           return mensaje;
       } else {
           return mensajeF;
       }
   }
} 
console.log(asientosDisponibles([15 , 24 ,90, 23], 15))