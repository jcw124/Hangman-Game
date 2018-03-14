 //define array of possible answers and declare variable for the select word that is chosen randomly
 var wordlist = ["black panther", "Love Jones"]
 //  "Shaft", "Roots", "Waiting to Exhale", "Life", "Foxxy Brown", "House Party", "Boomerang", "Poetic Justice", "Friday", "Malcolm X", "Boyz N the Hood", "School Daze","Clockers","The Wood","Jungle Fever","The Color Purple", "Barbershop","Selma","Glory","Jackie Brown"];

 // define variables for wins and loses
 var wins = 0
 var losses = 0
 var word;
 var arrayWord;
 var numguess = 13;
 var numberguess;

 //select the random word to be guessed for the puzzle
 document.onclick = function () {
     word = wordlist[Math.floor(Math.random() * wordlist.length)];
     console.log(word);
     var guess = word.replace(/[^ ]/g, '_ ');
     word.replace();
     console.log(guess);
     arrayWord = word.split("");
     console.log(arrayWord);

 }

 //display the number of wins (number of times the word was guessed correctly)
 var html =
     "<p>Wins: " + wins + "</p>" +
     "<p>Losses: " + losses + "</p>" +
     "<p id=guess>Number of guesses remaining: " + numberguess + "</p>"

 // Set the inner HTML contents of the #game div to our html string
 document.querySelector("#press").innerHTML = html;


 //prompt user to enter a letter (press any key to start)
 document.onkeydown = function checkletter(event) {
     var letter = event.key;
     console.log("var letter in my function " + letter);
     console.log(word);
     for (var i = 0; i < arrayWord.length; i++) {
         if (letter === arrayWord[i]) {
             var guess1 = word.replace(/[^ letter]/g, );
             console.log(guess1);}
             



         //     console.log("numguess is " + numguess)

         //     console.log(arrayWord[i]);
         //     numberguess = numguess - 1;
         //     console.log("numguess is " + numguess)
         //     //if the letter entered matches the letter in the array location being checked append the letter to the dom

         // } else console.log("this was an incorrect guess");



     }

 }

 //valdiate letter choice
 //if letter in word then reveal


//display the number of wins (number of times the word was guessed correctly)
var html =
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p id=guess>Number of guesses remaining: " + numberguess + "</p>"

 //reveal the number of guesses that remain for the user

 //if the letter is in the word reveal it. 

 //if the letter is not then  add it to the guessed lettersand decrease the number or remaining guesses

 // if the remaining guesses get to 0, reveal the word 

 // if the user guess the word - do something

 //increment wins /losses

 //loop to choose a new word and have the user play again



 //attempt bonus touchs once game works
 //play a sound or song  when the word is guessed correctly
 //add css to style along with my game theme
 //organize code as anobject
 //