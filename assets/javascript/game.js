
var word= "";
var winPic= "";
var answers= ["django unchained", "hateful eight", "pulp fiction", "jackie brown", "reservoir dogs", "lt aldo raine", "vincent vega", "mr blonde"] 
var quote= "";
var guesses = [];
var remainingLetters = "";
var remainingChances= 10;

function newWord(){
    var word = answers[Math.floor(Math.random()*answers.length)];
//    alert(word);
    var answerArray = [];
    for (var i = 0; i< word.length; i++){
        answerArray[i] = "_";
    }
    
    var currentWord= document.getElementById("currentWord");
        currentWord.textContent = answerArray;

   var drawGuessesRemaining= document.getElementById("guessesRemaining");
        drawGuessesRemaining.textContent = remainingChances;

   var remainingLetters = word.length;

   for (var j= 0; j < word.length; j++){
        if (word[j] === " "){
        answerArray[j] = " ";  
        currentWord.textContent = answerArray;
        remainingLetters--;
    }}

   if (word === "django unchained") {
    quote= '"I like the way you die boy"';
   }

   if (word === "hateful eight") {
    quote= '"Yeah, Warren, thats the problem with old men. You can kick-em down the stairs, and say its an accident, but you cant just shoot-em."';
   }

   if (word === "pulp fiction") {
    quote= '"Zeds dead, baby. Zeds dead."';
    }

   if (word === "jackie brown") {
    quote= '"AK-47. The very best there is. When you absolutely, positively got to kill every motherfucker in the room, accept no substitutes."';
   }

   if (word === "reservoir dogs") {
    quote= '"Do you know what this is? It’s the world’s smallest violin playing just for the waitresses"';
   }

   if (word === "lt aldo raine") {
    quote= '"I’m gonna give you a little somethin’ you can’t take off"';
   }

   if (word === "vincent vega") {
    quote= '"That’s a pretty fucking good milkshake. I don’t know if it’s worth five dollars but it’s pretty fucking good."';
   }

   if (word === "mr blonde") {
    quote= '"Are you gonna bark all day little doggie? Or are you gonna bite"';
   }

   var drawQuote= document.getElementById("hintQuote");
   drawQuote.textContent = quote;

   document.onkeyup= function(event) { 
        var guess= event.key;
        var n= word.indexOf(guess);
        console.log(guess);
        console.log(n);
        console.log(word);
        if (n === -1){
            remainingChances= remainingChances-1 ;
            var drawChances= document.getElementById("guessesRemaining");
            drawChances.textContent = remainingChances;

            guesses.push(guess);
            guesses.sort();
            var drawGuesses= document.getElementById("prevGuesses") ;
            drawGuesses.textContent = guesses;  

            if(remainingChances === 9){
                document.getElementById("guess-1").style.visibility = "visible";
            }
            if(remainingChances === 8){
                document.getElementById("guess-2").style.visibility = "visible";
            }
            if(remainingChances === 7){
                document.getElementById("guess-3").style.visibility = "visible";
            }
            if(remainingChances === 6){
                document.getElementById("guess-4").style.visibility = "visible";
            }
            if(remainingChances === 5){
                document.getElementById("guess-5").style.visibility = "visible";
            }
            if(remainingChances === 4){
                document.getElementById("guess-6").style.visibility = "visible";
            }
            if(remainingChances === 3){
                document.getElementById("guess-7").style.visibility = "visible";
            }
            if(remainingChances === 2){
                document.getElementById("guess-8").style.visibility = "visible";
            }
            if(remainingChances === 1){
                document.getElementById("guess-9").style.visibility = "visible";
            }
            if(remainingChances <= 0){
                document.getElementById("guess-10").style.visibility = "visible";
                alert('YOU LOSE  ' + "  Click reset to start again")
                word2= "YOUR HuNG";
                currentWord= document.getElementById("currentWord");
                currentWord.textContent = word2;
                quote = "No, you wont get shot in the back... You see, if John Ruth AKA THE HANGMAN gets you, you hang";
                drawQuote= document.getElementById("hintQuote");
                drawQuote.textContent = quote;

            }

        }

        for (var j= 0; j < word.length; j++){
            if (word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;   
                currentWord.textContent = answerArray;

                if (remainingLetters <= 0){
                    alert( "Congradulations!!" + "   You Win" + "     Press reset to play again" )

                }
            };
        }
   }
}



//    function drawguesses() {

// };

document.getElementById("button-reset").addEventListener("click", function() {
    word= "";
    winPic= "";
    quote= "";
    guesses = [];
    remainingLetters = "";
    remainingChances= 10;

    var currentWord= document.getElementById("currentWord");
    currentWord.textContent = word;

    var drawGuessesRemaining= document.getElementById("guessesRemaining");
    drawGuessesRemaining.textContent = remainingChances;

    var drawQuote= document.getElementById("hintQuote");
   drawQuote.textContent = quote;

   var drawGuesses= document.getElementById("prevGuesses") ;
   drawGuesses.textContent = guesses;  

    document.getElementById("guess-1").style.visibility = "hidden";
    document.getElementById("guess-2").style.visibility = "hidden";
    document.getElementById("guess-3").style.visibility = "hidden";
    document.getElementById("guess-4").style.visibility = "hidden";
    document.getElementById("guess-5").style.visibility = "hidden";
    document.getElementById("guess-6").style.visibility = "hidden";
    document.getElementById("guess-7").style.visibility = "hidden";
    document.getElementById("guess-8").style.visibility = "hidden";
    document.getElementById("guess-9").style.visibility = "hidden";
    document.getElementById("guess-10").style.visibility = "hidden";


  });

document.getElementById("button-start").addEventListener("click", function() {
    newWord();
    ;
  });

