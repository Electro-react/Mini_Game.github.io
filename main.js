let points_1 = 100;
let points_2 = 100;
let player_1_won = 0,
  player_2_won = 0,
  match = 0;

function game() {
  points_1 = 100;
  points_2 = 100;
  for (let i = 0; points_1 > 5 | points_2 > 5; i++) {
    if (points_1 >= 5) {
      points_1 = points_1 - Math.floor(Math.random() * 6);
    } else if (points_2 >= 5) {
      points_2 = points_2 - Math.floor(Math.random() * 6);
    }
  }

  if (points_1 > points_2) {
    player_1_won++;
    document.getElementById("player_1").innerHTML = "Player 1-Won:" + player_1_won;
  } else if (points_1 < points_2) {
    player_2_won++;
    document.getElementById("player_2").innerHTML = "Player 2-Won:" + player_2_won;
  }
  match++;
  document.getElementById("match").innerHTML = "Game-" + match;
  document.getElementById("result").innerHTML = "";
  return result();
};
const result = () => {
  if (player_1_won === 3) {
    document.getElementById("result").innerHTML = "Player1 won the match!";
    document.getElementById("player_1").innerHTML = "Player 1-Won:" + player_1_won;
    player_1_won = 0;
    player_2_won = 0;
    match = 0;
  } else if (player_2_won === 3) {
    document.getElementById("result").innerHTML = "Player2 won the match!";
    player_1_won = 0;
    player_2_won = 0;
    match = 0;
  } else if (match === 5 && player_1_won > player_2_won) {
    document.getElementById("result").innerHTML = "Player1 won the match!";
    document.getElementById("player_1").innerHTML = "Player 1-Won:" + player_1_won;
    player_1_won = 0;
    player_2_won = 0;
    match = 1;
  } else if (match === 5 && player_1_won < player_2_won) {
    document.getElementById("result").innerHTML = "Player2 won the match!";
    player_1_won = 0;
    player_2_won = 0;
    match = 1;
  } else if (match === 5 && player_1_won === player_2_won) {
    document.getElementById("result").innerHTML = "Match have been draw";
    player_1_won = 0;
    player_2_won = 0;
    match = 1;
  }
}
