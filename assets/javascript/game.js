//Global variables 
var word = "";
var answers2 =[];
var guesses = [];
var guesses2 = [];
var remainingLetters = "";
var remainingChances= 7;
var answerArray = [];
//Awnser constructor 
function Awnser(word, quote, type, numberA) {
    this.word = word;
    this.quote = quote;
    this.type = type;
    this.numberA = 0;
  }
//Pushes all answers in to array
function answerKey(){
    var A1 = new Awnser("django unchained", "I like the way you die boy", "Movie Title", 0)
    var A2 = new Awnser("hateful eight", "Yeah, Warren, thats the problem with old men. You can kick-em down the stairs, and say its an accident, but you cant just shoot-em.", "Movie Title", 1 )
    var A3 = new Awnser("pulp fiction", "Zeds dead, baby. Zeds dead.", "Movie Title", 2)
    var A4 = new Awnser("jackie brown", "AK-47. The very best there is. When you absolutely, positively got to kill every motherfucker in the room, accept no substitutes.", "Movie Title", 3)
    var A5 = new Awnser("reservoir dogs", "Do you know what this is? It’s the world’s smallest violin playing just for the waitresses", "Movie Title", 4)
    var A6 = new Awnser("lt aldo raine", "I’m gonna give you a little somethin’ you can’t take off", "Person", 5 )
    var A7 = new Awnser("vincent vega", "That’s a pretty fucking good milkshake. I don’t know if it’s worth five dollars but it’s pretty fucking good.", "Person", 5)
    var A8 = new Awnser("mr blonde", "Are you gonna bark all day little doggie? Or are you gonna bite", "Person", 7)
    function pAwnsers (){
        answers2.push(A1,A2,A3,A4,A5,A6,A7,A8)
    }
    pAwnsers();
}
//Que starting elements
function queStart() {
    $(function() {
        var r=$('<input/>').attr({
            type: "button",
            id: "button-start",
            value: 'Start',
            class: "btn btn-dark start"
        });
        $("#bs").append(r);  
        $("#clues").html("<h2>Click Start Button To Get Started!</h2><br><p>How to play- <br> Guess the phrase, character or movie title based on the clues provided. The words to guess are represented by a row of dashes.Guess a letter by pressing any letter on your keyboard. Wrong awnsers will be placed in the already guessed column. Correct awnsers are filled in. Good luck! <br>Click Start Button To Get Started!</p>")
        answerKey();
        enableStart();
    });
}
//Draws hangman
function drawGuy(){
    if(remainingChances <= 9){
        document.getElementById("guess-1").style.visibility = "visible";
    }
    if(remainingChances <= 8){
        document.getElementById("guess-2").style.visibility = "visible";
    }
    if(remainingChances <= 7){
        document.getElementById("guess-3").style.visibility = "visible";
    }
    if(remainingChances <= 6){
        document.getElementById("guess-4").style.visibility = "visible";
    }
    if(remainingChances <= 5){
        document.getElementById("guess-5").style.visibility = "visible";
    }
    if(remainingChances <= 4){
        document.getElementById("guess-6").style.visibility = "visible";
    }
    if(remainingChances <= 3){
        document.getElementById("guess-7").style.visibility = "visible";
    }
    if(remainingChances <= 2){
        document.getElementById("guess-8").style.visibility = "visible";
    }
    if(remainingChances <= 1){
        document.getElementById("guess-9").style.visibility = "visible";
    }
    if(remainingChances <= 0){
        document.getElementById("guess-10").style.visibility = "visible";
    loss();
    }
};
function undrawGuy() {
        document.getElementById("guess-2").style.visibility = "hidden";
        document.getElementById("guess-3").style.visibility = "hidden";
        document.getElementById("guess-4").style.visibility = "hidden";
        document.getElementById("guess-5").style.visibility = "hidden";
        document.getElementById("guess-6").style.visibility = "hidden";
        document.getElementById("guess-7").style.visibility = "hidden";
        document.getElementById("guess-8").style.visibility = "hidden";
        document.getElementById("guess-9").style.visibility = "hidden";
        document.getElementById("guess-10").style.visibility ="hidden";
};
//Contains start button logic that starts the game
function enableStart() {
    document.getElementById("button-start").addEventListener("click", function() {
        newWord2();
      });
}

//Creates the new word
function newWord2(){
    $(function() {
        var r=$('<input/>').attr({
            type: "button",
            id: "button-restart",
            value: 'Restart',
            class: "btn btn-dark"
        });
        $("#bs").html(r);  
        enableRestart();
    });

    var key = answers2[Math.floor(Math.random()*answers2.length)];

    remainingLetters = key.word.length;

    for (var i = 0; i< key.word.length; i++){
        if (key.word[i] === " "){
            answerArray[i] = " ";  
            remainingLetters--;
        }else{
        answerArray[i] = "_";
        }
    }
    //pushes Html elements 
    function gameSetup() {
    $(function() {
        $("#currentWord").text(answerArray);
    });

    $(function() {
        $("#clues").text("Clues");
    });

    $(function() {
        $("#mType").text("This is a " );
    });

    $(function() {
        $("#aType").text(key.type);
    });

    $(function() {
        $("#mQuote").text("A quote from the movie-")
    });

    $(function() {
        $("#aQuote").text(key.quote)
    });

    $(function() {
        $("#gr").text("Guesses remaining")
    });

    $(function() {
        $("#guessesRemaining").text(remainingChances)
    });
    $(function() {
        $("#lag").text("Letters already guessed")
    });

    $(function() {
        $("#prevGuesses").text(guesses)
    });
    };
    gameSetup();
    drawGuy();

    word = key.word;

    startG();
};

//allows players to guess using keyboard
function startG() {
    document.onkeyup= function(event) { 
    var guess= event.key;
    var n= word.indexOf(guess);
    var z= guesses2.indexOf(guess);
    var t= guesses.indexOf(guess);

    if (n === -1){
        if( t === -1){
            remainingChances= remainingChances-1;
            guesses.push(guess);
            guesses.sort();

            $(function() {
                $("#gr").text("Guesses remaining")
                $("#guessesRemaining").text(remainingChances)
                $("#lag").text("Letters already guessed")
                $("#prevGuesses").text(guesses)
            });
            drawGuy();
        }
    }
    var w = guesses2.indexOf(guess);
    for (var j= 0; j < word.length; j++){
        if (word[j] === guess){
            if( z === -1){
                guesses2.push(guess);
                answerArray[j] = guess;
                remainingLetters--;   
                currentWord.textContent = answerArray;

                if (remainingLetters <= 0){
                    win();
                }
            } else {
                alert(guess + " has already been guessed. Please try agian.")
            }
        };
    }
    }
}
//resets game after finish
function enableRestart() {
    document.getElementById("button-restart").addEventListener("click", function() {
        word = "";
        answers2 =[];
        guesses = [];
        guesses2 = [];
        remainingLetters = "";
        remainingChances= 7;
        answerArray = [];
        answerKey();
        newWord2();
        undrawGuy();
        drawGuy();
      });
}      
//Winning sequence
function win() {
    $('#ModalCenter').modal('show');
    $(function() {
        $("#ModalCenterTitle").text("YOU WIN!!!")
        $("#mod1").text("Congradulations")
        $("#mod2").text("You out smarted John Ruth AKA THE HANGMAN")
    });
    document.getElementById("button-restart1").addEventListener("click", function() {
        word = "";
        answers2 =[];
        guesses = [];
        guesses2 = [];
        remainingLetters = "";
        remainingChances= 7;
        answerArray = [];
        answerKey();
        newWord2();
        undrawGuy();
        drawGuy();
        $('#ModalCenter').modal('hide');
      });
}
//losing sequence
function loss() {
    $('#ModalCenter').modal('show');
    $(function() {
        $("#ModalCenterTitle").text("YOU WERE HUNG")
        $("#mod1").text("The correct anwser was -- " + word)
        $("#mod2").text("No, you wont get shot in the back... You see, if John Ruth AKA THE HANGMAN gets you, you hang")
    });

    document.getElementById("button-restart1").addEventListener("click", function() {
        word = "";
        answers2 =[];
        guesses = [];
        guesses2 = [];
        remainingLetters = "";
        remainingChances= 7;
        answerArray = [];
        answerKey();
        newWord2();
        undrawGuy();
        drawGuy();

        $('#ModalCenter').modal('hide');
      });
}
//Starts the game
queStart()