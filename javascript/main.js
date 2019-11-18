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
var addValue = "";
//var stored = "";//instead of just var string, im 
                //thinking adding a array so i can compare later on with thr random word and show the letter correctly
var stored = [];
console.log(stored);
var allWords = ["Andrew", "Cat", "BuzzLight", "alcohol", "couches", "bookbag"
]
//var random = allWords[Math.floor(Math.random()*allWords.length)];
// getValue = document.getElementById("myInput").value;
// var rand;
//var random 
var random = allWords[Math.floor(Math.random()*allWords.length)];
for (var i = 0; i < random.length; i++){
    // document.getElementById("lines").innerHTML += "&#x268A;";
    document.getElementById("lines").innerHTML += "______&nbsp;&nbsp;";

} 
//console.log(random);

// Random words stored, and shows the underlined words in the 
// beginning of the refreshed browser.

function hangMan () {
   
    
    
//first pick the random word
    //var random = allWords[Math.floor(Math.random()*allWords.length)];
    // console.log(random);
    
    
   
// it is successful! now put the lines of the word that got picked in the "lines" id

    
    
    // for (var i = 0; i < random.length; i++){
    //     // document.getElementById("lines").innerHTML += "&#x268A;";
    //     document.getElementById("lines").innerHTML += "______&nbsp;&nbsp;";
    
    // } 
    // var store;
    var true_ = true;
    while(true_){
       console.log(random);
       var question = prompt('guess a letter!');
     
       for(var j = 0; j < random.length; j++){
            if(question == random[j].toLowerCase() ) {
                //stored += stored.push(random[j]);
                stored.push(random[j]);
                document.getElementById("lines").innerHTML += stored[j];
                addValue += stored[j];
                //window.print(stored[j]);
                console.log(stored);
                alert("nice job!")
                break;
            }
        }
        console.log(addValue);
        console.log(stored);//still stored data after right about for loop so thats goo
        
        // Now, have to filter var stored so if it has all the words in random, the while loop
        // will get out and it will look like this below \/\/\/
        if (addValue == random) {//just testing if typing the exactly word break out of the while loop
            true_ = false;
        }
        
        if(question == 'quit') {
            true_ = false;
        }

    }
  
// so we have the lines now! GREAT! now it is time for the user to input theyre guess!
//now the idea is put a text box, user puts a letter, a var/function(return) get the letter/data back
}


//my problems are
    //have to get values in the hangman function
    //

