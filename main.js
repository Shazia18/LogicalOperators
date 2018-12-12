alert( null || 2 || undefined ); //output: 2
alert( alert(1) && alert(2) ); //outputs 1 and then outputs undefined
alert( null || 2 && 3 || 4 ); //outputs 3


// Write an “if” condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.
var upperLimit = 90;
var lowerLimit = 14;
var enteredAge = prompt("Enter your age");
enteredAge = Number(enteredAge);
if(lowerLimit<=enteredAge && enteredAge<=upperLimit) {
    alert("Your age is within limit");

}
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.
if(!(lowerLimit<=enteredAge && enteredAge<=upperLimit)){
    alert("Your age is not within limit");
}
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
alert(-1 || 0 && null || 1 && true);


