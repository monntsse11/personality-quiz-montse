//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var resultScore = 0;

var calmScore = 0;
var socialScore = 0;
var caringScore = 0;
var humorousScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", calm);
q1a2.addEventListener("click", social);
q1a3.addEventListener("click", caring);
q1a4.addEventListener("click", humorous);

q2a1.addEventListener("click", calm);
q2a2.addEventListener("click", social);
q2a3.addEventListener("click", caring);
q2a4.addEventListener("click", humorous);

q3a1.addEventListener("click", calm);
q3a2.addEventListener("click", social);
q3a3.addEventListener("click", caring);
q3a4.addEventListener("click", humorous);

//#TODO: Define quiz functions here
function calm() {
  calmScore += 1;
  questionCount += 1;
  //alert("One Point to this!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function social() {
  socialScore += 1;
  questionCount += 1;
  //alert("One Point to this!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function caring() {
  caringScore += 1;
  questionCount += 1;
  //alert("One Point to this!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function humorous() {
  humorousScore += 1;
  questionCount += 1;
  //alert("One Point to this!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  //alert(calmScore);
  //alert(socialScore);
  //alert(caringScore);
  //alert(humorousScore);
  if (calmScore >= 2) {
    result.innerHTML = "Calm!";
  }
  
  else if (socialScore >= 2) {
    result.innerHTML = "Social!";
  }
  else if (caringScore >= 2) {
    result.innerHTML = "Caring!";
  }
  else if (humorousScore >= 2) {
    result.innerHTML = "Humorous!";
  } else {
    alert(calmScore);
    result.innerHTML = "Hmm.. The quiz is confused. Try again later.";
  }
}
