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

var getData;
var getValue;
//console.log(random);
var allWords = ["Andrew", "Cat", "BuzzLight", "alcohol", "couches", "bookbag"
]
//var random = allWords[Math.floor(Math.random()*allWords.length)];
// getValue = document.getElementById("myInput").value;
// var rand;
//var random 
function hangMan () {
   
    
    
//first pick the random word
    var random = allWords[Math.floor(Math.random()*allWords.length)];
    // console.log(random);
    
    
   
// it is successful! now put the lines of the word that got picked in the "lines" id
    for (var i = 0; i < random.length; i++){
        // document.getElementById("lines").innerHTML += "&#x268A;";
        document.getElementById("lines").innerHTML += "______&nbsp;&nbsp;";

    }
    var true_ = true;
    while(true_){
        var question = prompt('guess a letter!');
        console.log(question);
    }
// so we have the lines now! GREAT! now it is time for the user to input theyre guess!
//now the idea is put a text box, user puts a letter, a var/function(return) get the letter/data back
}


//my problems are
    //have to get values in the hangman function
    //

