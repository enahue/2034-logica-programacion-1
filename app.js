//Declaramos las variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible + 1);
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;
while (numeroSecreto != numeroUsuario) {
  numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));
  //Comparamos los numeros
  if (numeroUsuario == numeroSecreto) {
    //Si el numero es igual al numero secreto
      alert(
        `Adivinaste, el numero secreto es: ${numeroSecreto}, lo lograste en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`
      );
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
