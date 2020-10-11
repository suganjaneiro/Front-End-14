var number=7;
var guess=Number(prompt("Guess a Number"));

if(guess === number)
{
	alert("You guessed it!!!");
}

else if(guess > number)
{
	alert("Too high!! Try again");
}

else
{
	alert("Too low!! Try again");
}


//We can either add "Number" in the input section that is prompt  or  we can make guess as a Number by defining like this    
//Number(guess)  => any value given iside the "Number" will be taken as a number.


// I have used "Number" in the propmt but Colt has used it in the if condition ...that is Number(guess) ...Anywhere we can use it.

//var stringGuess=prompt("Guess a Number:");                   We can declare like this also..
//var guess=Number(stringGuess);

