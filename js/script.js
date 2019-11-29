// *************************** YOUR CODE BELOW *******************************
$("#shoot").click(function() {
let result = $('#input').val();
$('#userChoice').text(result)

var rn= Math.random();

    if ( rn < 0.3  && rn >= 0 ){
        $('#computerChoice').text('rock')
        var computerChoice1 = "rock"; 
} 

    else if (rn <=0.70  && rn >=0.3  ) {
        $('#computerChoice').text('paper')
        var computerChoice2 = "paper";
}

    else if (rn <=1 && rn > 0.70 ) {
        $('#computerChoice').text('scissors')
        var computerChoice3 = "scissors";
}

   // ***TIES***

    if((result === "rock") && (computerChoice1 === "rock")){
        $("#result").text("TIE!!!");
    }

    else if((result === "paper") && (computerChoice2 === "paper")){
        $("#result").text("TIE!!!");
    }

    else if((result === "scissors") && (computerChoice3 === "scissors")){
        $("#result").text("TIE!!!");
    }

    // ***COMPUTER WINS***

    else if((result === "rock") && (computerChoice2 === "paper")){
        $("#result").text("COMPUTER WINS!!!");
    }

    else if((result === "paper") && (computerChoice3 === "scissors")){
        $("#result").text("COMPUTER WINS!!!");
    }

    else if((result === "scissors") && (computerChoice1 === "rock")){
        $("#result").text("COMPUTER WINS!!!");
    }

    // ***YOU WIN***

    else if ((result === "paper") && (computerChoice1 === "rock")){
        $("#result").text("YOU WIN!!!");
    }

    else if ((result === "scissors") && (computerChoice2 === "paper")){
        $("#result").text("YOU WIN!!!");
    }

    else if ((result === "rock") && (computerChoice3 === "scissors")){
        $("#result").text("YOU WIN!!!")
    }
    

});

//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

