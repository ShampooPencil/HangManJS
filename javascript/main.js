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

var storeGuess = "";
var addValue = "";
var showLines = document.getElementById("lines");


//var stored = "";//instead of just var string, im 
//thinking adding a array so i can compare later on with thr random word and show the letter correctly
var stored = [];
console.log(stored);
var allWords = ["Andrew", "Cat", "BuzzLight", "alcohol", "couches", "bookbag"
]

var random = allWords[Math.floor(Math.random() * allWords.length)];
console.log(random);
var word = random.replace(/\w/g, "_" + ' ');
// for (var i = 0; i < random.length; i++){
//     // document.getElementById("lines").innerHTML += "&#x268A;";
//     // showLines.innerHTML += "______&nbsp;&nbsp;";
//     showLines.innerHTML += word + " ";

// }
showLines.innerHTML = word;
var changeEl = "";
for (var i = 0; i < word.length; i++) {

    changeEl += word[i];
    
    //random[i] += " ";


}

var stringArray = random.split('').join(' ');
stringArray += " ";
console.log(stringArray); // ["my", " ", "car", " ", "is", " ", "red"]
var res = random.split("");
console.log(changeEl.length);
console.log(changeEl)

console.log(stringArray.length);
//console.log(word);
console.log(stringArray);
if(changeEl.length === stringArray.length){
    console.log(true);
}
var ar = changeEl.split("");
// var whileTrue = true;
document.onkeyup = function (event) {
    addValue = event.key; //well i typed some letters and it showed in the chrome console
    console.log(addValue);
    console.log(random);
    //var question = prompt('guess a letter!');
    stored.push(addValue);

    for (var j = 0; j < stringArray.length; j++) {
        //var ar = changeEl.split(""); // split string on comma space
        //console.log( ar );
        // [ "apple", "orange", "pear", "banana", "raspberry", "peach" ]
        var trackingVar = j;
        if (addValue === stringArray[j].toLowerCase()) {
            console.log(stringArray[j]);
            //console.log(true);
            console.log(changeEl[j]);
               
            //it now only take the  right 
            //changeEl = ar.replace(ar[j], addValue);
            ar[j] = addValue.toUpperCase();
            console.log(ar)
            //changeEl = changeEl.replace(changeEl[trackingVar], addValue.toUpperCase());
            // var newWord = changeEl;
            // console.log(newWord);
            //var showLines = document.getElementById("lines");
            // document.getElementById("lines") = showLines;
            // showLines.innerHTML = changeEl;
           
            storeGuess += addValue;
            continue;
            // }
            //break;
        }
        console.log(changeEl);

    }
    // var newWord = changeEl;
    var showLines = document.getElementById("lines");
    showLines.innerHTML = ar.toString();
}
console.log(addValue);


//console.log(random);

// Random words stored, and shows the underlined words in the 
// beginning of the refreshed browser.


// function hangMan () {
//first pick the random word
    //var random = allWords[Math.floor(Math.random()*allWords.length)];
    // console.log(random);
    // it is successful! now put the lines of the word that got picked in the "lines" id



    // for (var i = 0; i < random.length; i++){
    //     // document.getElementById("lines").innerHTML += "&#x268A;";
    //     document.getElementById("lines").innerHTML += "______&nbsp;&nbsp;";

    // } 
    // var store;
    // var true_ = true;
    // while(true_){
    //    console.log(random);
    //    //var question = prompt('guess a letter!');

    //    for(var j = 0; j < random.length; j++){
    //         if(question == random[j].toLowerCase() ) {
    //             //stored += stored.push(random[j]);
    //             stored.push(random[j]);
    //             document.getElementById("lines").innerHTML += stored[j];
    //             addValue += stored[j];
    //             if (question != null) {
    //                 document.getElementById("lines").innerHTML += question;
    //               }
    //             //window.print(stored[j]);
    //             console.log(stored);
    //             alert("nice job!")
    //             break;
    //         }
    //     }
    //     console.log(addValue);
    //     console.log(stored);//still stored data after right about for loop so thats goo

    //     // Now, have to filter var stored so if it has all the words in random, the while loop
    //     // will get out and it will look like this below \/\/\/
    //     if (addValue == random) {//just testing if typing the exactly word break out of the while loop
    //         true_ = false;
    //     }

    //     if(question == 'quit') {
    //         true_ = false;
    //     }

    // }

// so we have the lines now! GREAT! now it is time for the user to input theyre guess!
//now the idea is put a text box, user puts a letter, a var/function(return) get the letter/data back
// }


//my problems are
    //have to get values in the hangman function
    //

