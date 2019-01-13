     // Let's start by grabbing a reference to the <span> below.
     var userText = document.getElementById("user-text");

     // Next, we give JavaScript a function to execute when onkeyup event fires.
     document.onkeyup = function(event) {
        userText.textContent = event.key;
      };

var word= "";
var winPic= "";
var answers= ["Django Unchained", "Hateful Eight", "Pulp fiction", "Jackie Brown", "Reservoir Dogs" ] 
var quote= "";
var guesses = [];

function newWord(){
   var word = answers[Math.floor(Math.random()*answers.length)];
//    alert(word);
    var answerArray = [];
    for (var i = 0; i< word.length; i++){
        answerArray[i] = "_";
    }

   var currentWord= document.getElementById("currentWord");
   currentWord.textContent = answerArray;

   if (word === "Django Unchained") {
    quote= '"I like the way you die boy"';
   };

   if (word === "Hateful Eight") {
    quote= '"Yeah, Warren, thats the problem with old men. You can kick-em down the stairs, and say its an accident, but you cant just shoot-em."';
   };

   if (word === "Pulp fiction") {
    quote= '"Zeds dead, baby. Zeds dead."';
    };

   if (word === "Jackie Brown") {
    quote= '"Now that, my friend, is a clear-cut case of him or me. And you best believe it aint gonna be me."';
   };

   if (word === "Reservoir Dogs") {
    quote= '"I don`t tip because society says I have to."';
   };

   var drawQuote= document.getElementById("hintQuote");
   drawQuote.textContent = quote;
};


   function drawguesses() {
    guesses.sort();
    var currentguess= document.getElementById("prevGuesses") ;
    currentguess.textContent = guesses;  
};

document.getElementById("button-reset").addEventListener("click", function() {
    word= "";
    winPic= "";
    quote= "";
    guesses = [];

    var drawQuote= document.getElementById("hintQuote");
    drawQuote.textContent = quote;

    var currentWord= document.getElementById("currentWord");
    currentWord.textContent = word;

    var currentguess= document.getElementById("prevGuesses") ;
    currentguess.textContent = guesses; 
  });

document.getElementById("button-start").addEventListener("click", function() {
    newWord();
    ;
  });

