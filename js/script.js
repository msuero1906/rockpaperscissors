// *************************** YOUR CODE BELOW *******************************
$("#shoot").click(function() {
let result = $('#input').val();
$('#userChoice').append(result)

var rn= Math.random();

if ( rn < 0.3  && rn >= 0 ){
$('#computerChoice').append('rock')
 
} 

else if (rn <=0.70  && rn >=0.3  ) {
$('#computerChoice').append('paper')

}

else if (rn <=1 && rn > 0.70 ) {
$('#computerChoice').append('scissors')

}
});

//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

