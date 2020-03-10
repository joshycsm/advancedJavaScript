function experiencePoints() {
  if (winBattle(true)) {
    return 10;
  } else {
    return 1;
  }
}

var battle = experiencePoints();
var battle2 = winBattle(false) ? 10 : 1;

function winBattle(bool) {
  return bool;
}

// condition ? expr1 : expr2;
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(false) ? "you may enter" : "access denied";

function condition() {
  if (isUserValid(true)) {
    return "You may enter!";
  } else {
    return "Access denied!";
  }
}

var answer2 = condition();

// switch statement

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}
