//Declaramos las variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
//Comparamos los numeros
if (numeroUsuario == numeroSecreto) {
  //Si el numero es igual al numero secreto
  alert(`Adivinaste, el numero secreto es: ${numeroSecreto}`);
} else {
    if(numeroUsuario > numeroSecreto){
      alert('Muy cerca intenta con un numero mas pequeño');
    }else{
      alert('Muy cerca intenta con un numero mas grande');
    }
  //Si el numero es diferente al numero secreto
  // alert("No adivinaste el numero secreto");
}
