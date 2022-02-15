// inicializar variables de puntaje
let playerScore = 0;
let computerScore = 0;

// Pedir jugada a jugador
function playerInput() {
  let input = prompt("Cachipun! Piedra, papel o tijera");
  input = input.toLowerCase();
  return input;
}
// generar jugada computadora
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "piedra"
    : randomNumber === 1
    ? "tijera"
    : "papel";
}

// comparar selecciones y definir un ganador
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Ambos eligieron lo mismo. Empate";
  } else if (playerSelection === "piedra" && computerSelection === "papel") {
    computerScore++;
    return "Papel gana a piedra. Perdiste";
  } else if (playerSelection === "piedra" && computerSelection === "tijera") {
    playerScore++;
    return "Piedra gana a tijera. Ganaste.";
  } else if (playerSelection === "papel" && computerSelection === "tijera") {
    computerScore++;
    return "Tijera gana a papel. Perdiste.";
  } else if (playerSelection === "papel" && computerSelection === "piedra") {
    playerScore++;
    return "Papel gana a piedra. Ganaste.";
  } else if (playerSelection === "tijera" && computerSelection === "papel") {
    playerScore++;
    return "Tijera gana a papel. Ganaste.";
  } else if (playerSelection === "tijera" && computerSelection === "piedra") {
    computerScore++;
    return "Piedra gana a tijera. Perdiste.";
  }
}

// obtiene ambas jugadas, y las pasa a la funcion playRound(), que da el resultado
function round() {
  let playerSelection = playerInput();
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);

  console.log(`Elegiste ${playerSelection}`);
  console.log(`La computadora elige ${computerSelection}`);
  console.log(roundResult);

  console.log(`Tu puntaje: ${playerScore}`);
  console.log(`Puntaje de la computadora: ${computerScore}`);
}

// funcion prinicpal, pregunta numero de rondas a jugar, llama la funcion round() las veces ingresadas y al final compara el puntaje obtenido y declara un ganador.
function main() {
  let roundNumber = parseInt(prompt("¿Cuantas rondas quieres jugar?"));
  for (let i = 0; i < roundNumber; i++) {
    round();
  }
  if (playerScore === computerScore) {
    console.log("Es un empate");
  } else if (playerScore > computerScore) {
    console.log(`Ganaste ${playerScore} contra ${computerScore}`);
  } else {
    console.log(`Perdiste ${computerScore} contra ${playerScore}`);
  }
}

main();
