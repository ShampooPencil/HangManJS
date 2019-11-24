//FIRST SETUP:
//      its probably the best to just make this logic 
//      one big function. When clicked it will 
//      showed the lines of the word first. On the right put a pic of a hangman symbol.

//LOGIC: 
// Just some basic syntax im going to need:
// Math.random, 
// arrays of hangman words
// for loops
// some vars to organize everything(orginizing will help alot!)
// Big logic is filling in the empty lines of hangman letters. 
// Theres many way i can go about doing it, probably a for loop 
// guesses will be in the loop until the player quits or gets the word right.
// (maybe after that works we can show the word if player quits )
// 
// In the beginning, the player can pick unlimited guesses.(after that works, 
// we wil pick limit of how many picked the player can guess)

function afterMainGame() {
    var storeGuess = "";
    var addValue = "";
    var showLines = document.getElementById("lines");

    //document.getElementById("youWon").innerHTML = "";
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
    //res = res.join("");
    //res = res.join(" ");
    //console.log(changeEl.length);
    console.log(res.join(', '));
    console.log(stringArray);
    console.log(storedWord);
    var ar = changeEl.split("");
    var compareArrays = stringArray.split(" ");
    console.log(compareArrays.join(', '));
    // var whileTrue = true;
    document.onkeyup = function (event) {
        if (ar.join("") !== storedWord.join("")) {
            document.getElementById("youWon").innerHTML = "";
        }
        addValue = event.key; //well i typed some letters and it showed in the chrome console
        console.log(addValue);
        console.log(random);
        //var question = prompt('guess a letter!');
        for (var j = 0; j < stringArray.length; j++) {
            if (ar.join("") == storedWord.join("")) {
                console.log(true);
                document.getElementById("youWon").innerHTML = "<p>You Won!</p>";
                mainGame();
            }
            if (addValue === stringArray[j].toLowerCase()) {
                console.log(stringArray[j]);
                //console.log(true);
                console.log(changeEl[j]);

                //it now only take the  right 
                //changeEl = ar.replace(ar[j], addValue);
                ar[j] = addValue.toUpperCase();
                console.log(ar)

                storeGuess += addValue;
                continue;
                // }
                //break;
            }
            console.log(changeEl);

        }
       
        var showLines = document.getElementById("lines");
        showLines.innerHTML = ar.join('');
      
    }
   
}
function mainGame() {
    var storeGuess = "";
    var addValue = "";
    var showLines = document.getElementById("lines");
    var timeoutID;

    function delayedAlert() {
        timeoutID = window.setTimeout(window.alert, 2*1000, 'You Won!');
    }
    //document.getElementById("youWon").innerHTML = "";
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
    //res = res.join("");
    //res = res.join(" ");
    //console.log(changeEl.length);
    console.log(res.join(', '));
    console.log(stringArray);
    console.log(storedWord);
    var ar = changeEl.split("");
    var compareArrays = stringArray.split(" ");
    console.log(compareArrays.join(', '));
    // var whileTrue = true;
    document.onkeyup = function (event) {
        if (ar.join("") !== storedWord.join("")) {
            document.getElementById("youWon").innerHTML = "";
        }
        addValue = event.key; //well i typed some letters and it showed in the chrome console
        console.log(addValue);
        console.log(random);
        //var question = prompt('guess a letter!');
        for (var j = 0; j < stringArray.length; j++) {
            if (ar.join("") == storedWord.join("")) {
                console.log(true);
                
                document.getElementById("youWon").innerHTML = "<p>You Won!</p>";
                afterMainGame();
            }
            if (addValue === stringArray[j].toLowerCase()) {
                console.log(stringArray[j]);
                //console.log(true);
                console.log(changeEl[j]);

                //it now only take the  right 
                //changeEl = ar.replace(ar[j], addValue);
                ar[j] = addValue.toUpperCase();
                console.log(ar)

                storeGuess += addValue;
                continue;
                // }
                //break;
            }
            console.log(changeEl);

        }
       
        var showLines = document.getElementById("lines");
        showLines.innerHTML = ar.join('');
        // if (ar.join("") == storedWord.join("")) {
        //     console.log(true);
        //     alert("you did it!!!!");
        //     afterMainGame();
        // } else {
        //     console.log(false);
        // }
    }
   
}
mainGame();


