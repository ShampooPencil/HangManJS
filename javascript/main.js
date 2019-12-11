//This is the first function, after the first game() is over with, this will 
//will get called and restart a new game. When this second game will be done,
//the the first function will be called and keep switched back and forth.
var wins = 0;
function mainGame() {
    var userCount = 30;
    var addValue = "";
    var showLines = document.getElementById("lines");
    var timeoutID;

    function delayedAlert() {
        timeoutID = window.setTimeout(window.alert, 2 * 1000, 'You Won!');
    }
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
    // var whileTrue = true;
    var subtrctGuess = document.getElementById("count");
    subtrctGuess.innerHTML = "Guesses = " + userCount;
    document.getElementById("wins").innerHTML = "Wins = " + wins;
    document.onkeyup = function (event) {
        if (ar.join("") !== storedWord.join("")) {
            document.getElementById("youWon").innerHTML = "";
        }

        userCount = userCount - 1;
        subtrctGuess.innerHTML = "Guesses = " + userCount;
        console.log(userCount);
        addValue = event.key; //well i typed some letters and it showed in the chrome console
        console.log(addValue);
        console.log(random);
        if (userCount < 0) {
            document.getElementById("youWon").innerHTML = "<p>You lost! Click any key to start a new one!</p>";
            userCount = 30;
            //********have to just copy and paste in other function, remember to restart userCount!!
            afterMainGame();
        }
        for (var j = 0; j < stringArray.length; j++) {
            if (ar.join("") === storedWord.join("")) {
                console.log(true);
                wins += 1;
                console.log(wins);
                document.getElementById("wins").innerHTML = "Wins = " + wins;
                document.getElementById("youWon").innerHTML = "<p>You Won! Click any key to start a new one!</p>";
                afterMainGame();
                break;
            }
            if (addValue === stringArray[j].toLowerCase()) {
                console.log(stringArray[j]);
                console.log(changeEl[j]);
                ar[j] = addValue.toUpperCase();
                console.log(ar)
                //storeGuess += addValue;
                continue;
            }
            console.log(changeEl);

        }

        var showLines = document.getElementById("lines");
        showLines.innerHTML = ar.join('');

    }

}
mainGame();
let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5) {
        resolve('Yay!');
    } else {
        reject('Ohhh noooo!');
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

