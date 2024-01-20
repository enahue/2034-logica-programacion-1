//Declaramos las variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;
while (numeroSecreto != numeroUsuario) {
  numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
  //Comparamos los numeros
  if (numeroUsuario == numeroSecreto) {
    //Si el numero es igual al numero secreto
    if(intentos == 1){
      alert(
        `Adivinaste, el numero secreto es: ${numeroSecreto}, lo lograste en el primer intento!`
      );
    }else{
      alert(
        `Adivinaste, el numero secreto es: ${numeroSecreto}, lo lograste en ${intentos} intentos`
      );
    }
    
  } else {
    //Si el numero es diferente al numero secreto
    if (numeroUsuario > numeroSecreto) {
      alert("Muy cerca intenta con un numero mas pequeño");
    } else {
      if (numeroUsuario < numeroSecreto) {
        alert("Muy cerca intenta con un numero mas grande");
      } else {
        alert("Por favor ingresa un numero valido");
      }
      // intentos = intentos + 1;
      intentos++;
      if(intentos > maximoIntentos){
        alert(`llenaste el numero maximo de ${maximoIntentos} intentos`);
        break;
      }
    }
  }
}
