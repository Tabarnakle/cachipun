// inicializar variables de puntaje
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";

let playerPiedra = document.getElementById("playerPiedra")
let playerPapel = document.getElementById("playerPapel")
let playerTijera = document.getElementById("playerTijera")
let resultado = document.getElementById("resultado")
playerPiedra.addEventListener("click", () => {playerInput("piedra")})
playerPapel.addEventListener("click", () => {playerInput("papel")})
playerTijera.addEventListener("click", () => {playerInput("tijera")})
playerPiedra.addEventListener("click", () => {round()})
playerPapel.addEventListener("click", () => {round()})
playerTijera.addEventListener("click", () => {round()})

// Pedir jugada a jugador
function playerInput(inp) {
  playerSelection = inp
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
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);

  resultado.innerHTML = `Elegiste ${playerSelection} <br>La computadora elige ${computerSelection}<br>${roundResult}`;
}

