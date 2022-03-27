var playing = false;
var score;
var timeRemaining;
var action;
var correctAnswer;
var checkAnswer;


//the user clicks on the start/reset
document.getElementById("start").onclick = function(){

    //if the user is playing
    if (playing == true){
        //reload page
        location.reload(); 
    }
    //if the user is not playing
    else
    {
        //change mode to playing
        playing=true;
        score=0;        
        document.getElementById("scoreNumber").innerHTML=score;

        //show the instructions     
        document.getElementById("instruction").innerHTML="Type the correct answer";

        //show countdown box
        show("time");

        //60 second timer
        timeRemaining = 60;
        document.getElementById("remainingTime").innerHTML=timeRemaining;

        //hide game over box
        hide("gameover");

        //change button to reset
        document.getElementById("start").innerHTML="Reset Game";

        //start countdown
        startCountdown();

        //generate new questions  
        generateQuestions();             
    }   
}

document.getElementById("answers").addEventListener("submit", function(e) {
    e.preventDefault(); //prevent submission
    if(playing==true){

        //if the answer is correct
        //this=document.getElementById("answer1")
        checkAnswer = parseInt(document.getElementById('answerText').value);
        if (checkAnswer==correctAnswer)
        { 
            //correct answer
            score++;
            document.getElementById("scoreNumber").innerHTML=score;
            show("correct");

            //show for 1 sec
            setTimeout(function(){
                hide("correct");
            },1000);    
            hide("incorrect");
            //generate new answer and question
            generateQuestions();
        }
        else
        {  
            //wrong answer
            show("incorrect");

            //show for 1 sec
            setTimeout(function(){
                hide("incorrect");
            }, 1000)
            hide("correct");
        }             
    }
})

//start countdown 20sec
function startCountdown(){
    action = setInterval(function(){
        timeRemaining-=1;
        document.getElementById("remainingTime").innerHTML = timeRemaining;
        if(timeRemaining == 0)
        {//game over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>YOUR SCORE: " + score+ "</p>"; 
            document.getElementById("final").play();
            hide("time");
            hide("correct");
            hide("incorrect");
            playing=false;
            document.getElementById("start").innerHTML = "Start Game";
        }
    },1000);
}

//generate question and answers 
function generateQuestions(){
    //a random digit from 0 to 10 inclusive
    var randomNumber1 = Math.round(Math.random()*10);   
    var randomNumber2 = Math.round(Math.random()*10);     

    document.getElementById("question").innerHTML=randomNumber1+ " x " +randomNumber2;
    correctAnswer=randomNumber1*randomNumber2;

}

//stop counter
function stopCountdown(){
    clearInterval(action);
}
//hide an element      
function hide(id){      
    document.getElementById(id).style.display="none";      
}   
//show an element
function show(id){      
    document.getElementById(id).style.display="block";      
}    



