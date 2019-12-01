
//var wins is in the mainGame() function, now we are share it so we can add the the wins back and forth to the two functions
function afterMainGame() {
    var userCount = 30;
    var addValue = "";
    var showLines = document.getElementById("lines");

    //var stored = "";//instead of just var string, im 
    //thinking adding a array so i can compare later on with thr random word and show the letter correctly
    var storedWord = [];
    var allWords = ["Andrew", "Cat", "BuzzLight", "alcohol", "couches", "bookbag"
    ]

    var random = allWords[Math.floor(Math.random() * allWords.length)];
    console.log(random);
    var word = random.replace(/\w/g, "_" + ' ');
    showLines.innerHTML = word;
    var changeEl = "";
    for (var i = 0; i < word.length; i++) {
        changeEl += word[i];
    }
    var stringArray = random.split('').join(' ');
    stringArray += " "; // ["my", " ", "car", " ", "is", " ", "red"]
    for (var x = 0; x < stringArray.length; x++) {
        storedWord.push(stringArray[x].toUpperCase());
    }
    var res = random.split(" ");
    console.log(res.join(', '));
    console.log(stringArray);
    console.log(storedWord);
    var ar = changeEl.split("");
    var compareArrays = stringArray.split(" ");
    console.log(compareArrays.join(', '));
    var subtrctGuess = document.getElementById("count");
    subtrctGuess.innerHTML = "Guesses = " + userCount;
    // var whileTrue = true;
    document.onkeyup = function (event) {
        if (ar.join("") !== storedWord.join("")) {
            document.getElementById("youWon").innerHTML = "";
        }
        userCount = userCount - 1;
        subtrctGuess.innerHTML = "Guesses = " + userCount;
        addValue = event.key; //well i typed some letters and it showed in the chrome inspect console log
        console.log(addValue);
        console.log(random);
        if (userCount < 0) {
            document.getElementById("youWon").innerHTML = "<p>You lost! Click any key to start a new one!</p>";
            userCount = 30;
            //********have to just copy and paste in other function, remember to restart userCount!!
            mainGame();
        }
        //var question = prompt('guess a letter!');
        for (var j = 0; j < stringArray.length; j++) {
            if (ar.join("") === storedWord.join("")) {
                console.log(true);
                wins += 1;
                // wins = wins + 1;
                console.log(wins);
                document.getElementById("wins").innerHTML = "Wins = " + wins;
                document.getElementById("youWon").innerHTML = "<p>You Won! Click any key to start a new one!</p>";
                mainGame();
                break;
            }
            if (addValue === stringArray[j].toLowerCase()) {
                console.log(stringArray[j]);
                //console.log(true);
                console.log(changeEl[j]);
                ar[j] = addValue.toUpperCase();
                console.log(ar)

                continue;

            }
            console.log(changeEl);

        }

        var showLines = document.getElementById("lines");
        showLines.innerHTML = ar.join('');

    }

}