// *************************** YOUR CODE BELOW *******************************
$("#shoot").click(function() {
let result = $('#input').val();
$('#userChoice').text(result)

var rn= Math.random();

if ( rn < 0.3  && rn >= 0 ){
$('#computerChoice').text('rock')
 
} 

else if (rn <=0.70  && rn >=0.3  ) {
$('#computerChoice').text('paper')

}

else if (rn <=1 && rn > 0.70 ) {
$('#computerChoice').text('scissors')
}
   // var result 

   // if ( result = '#userchoice' )
});

//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

