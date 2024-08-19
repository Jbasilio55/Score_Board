let score1El = document.getElementById("score1");
let score2El = document.getElementById("score2");

let score1 = 0;
let score2 = 0;

score1El.textContent = score1;
score2El.textContent = score2;

function newGame() {
  score1 = 0;
  score2 = 0;

  score1El.textContent = 0;
  score2El.textContent = 0;

  score1El.setAttribute("class", "");
  score2El.setAttribute("class", "");

  // Reset period
  count = 1;

  // Remove the 'chosen-period' id from the current period
  let currentChosen = document.getElementById("chosen-period");
  if (currentChosen) {
    currentChosen.removeAttribute("id");
  }

  // Set the 'chosen-period' id to the first period
  let firstPeriod = document.getElementsByClassName("main-period")[0];
  if (firstPeriod) {
    firstPeriod.setAttribute("id", "chosen-period");
  }
}

function winningTeam(score1, score2) {
  if (score1 > score2) {
    score1El.setAttribute("class", "winning-team");
    score2El.setAttribute("class", "");
  }

  if (score2 > score1) {
    score2El.setAttribute("class", "winning-team");
    score1El.setAttribute("class", "");
  }
}

function add1() {
  score1 += 1;
  score1El.textContent = score1;
  winningTeam(score1, score2);
}
function add2() {
  score1 += 2;
  score1El.textContent = score1;
  winningTeam(score1, score2);
}
function add3() {
  score1 += 3;
  score1El.textContent = score1;
  winningTeam(score1, score2);
}

function add_1() {
  score2 += 1;
  score2El.textContent = score2;
  winningTeam(score1, score2);
}
function add_2() {
  score2 += 2;
  score2El.textContent = score2;
  winningTeam(score1, score2);
}
function add_3() {
  score2 += 3;
  score2El.textContent = score2;
  winningTeam(score1, score2);
}

let count = 1;

function period() {
  let currentChosen = document.getElementById("chosen-period");

  if (count === 4) {
    // Remove the id from the currently chosen period
    if (currentChosen) {
      currentChosen.removeAttribute("id");
    }

    count = 1;

    // Set the id on the first period (assuming it's the first p element)
    let firstPeriod = document.getElementsByClassName("main-period")[0];
    firstPeriod.setAttribute("id", "chosen-period");
  } else {
    let nextChosen = currentChosen.nextElementSibling;

    if (nextChosen) {
      nextChosen.setAttribute("id", "chosen-period");
      currentChosen.removeAttribute("id");
    }

    count += 1;
  }
}
