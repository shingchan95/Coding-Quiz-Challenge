var startButon = document.getElementById("start");
var counter = document.getElementById("time");
var pageHeadtag = document.getElementById("headingTag");
var pageContent= document.getElementById("paragraphQ");
var questionTitle=document.getElementById("question-title");
var choiceContent=document.getElementById("choices");
var displayMode= document.querySelector(".hide");
var answerDisplayT= document.getElementById("answerDisplay");
var num=0
var ending= document.getElementById("end-screen")
var secondLeft= counter.textContent
secondLeft=50
var score=0
var finalScore=document.getElementById("final-score")

var submitButton= document.getElementById("submit")

var viewScores= document.querySelector(".scores");




function startGame(){
    countdown()
    showQuestions()
    submitTing()
    
};

startButon.addEventListener("click",startGame)


function countdown() {
    var timerInterval = setInterval(function() {
    
        secondLeft--;
        counter.textContent = secondLeft
        
    if(secondLeft <=0) {
        clearInterval(timerInterval);
        questionTitle.style.display="none";
        choiceContent.style.display="none";
        ending.style.display="block";
        counter.textContent= 0;
        finalScore.textContent += score;
        console.log(score)
       

    }
}, 1000);
}




    
        


function showQuestions(){
    
    var questionChoices1 = document.createElement("button");
    var questionChoices2 = document.createElement("button");
    var questionChoices3 = document.createElement("button");   
    var questionChoices4 = document.createElement("button");
    choiceContent.appendChild(questionChoices1);
    choiceContent.appendChild(questionChoices2);
    choiceContent.appendChild(questionChoices3);
    choiceContent.appendChild(questionChoices4);
    
    questionChoices1.textContent=questions[num].choices[0];
    questionChoices2.textContent=questions[num].choices[1];
    questionChoices3.textContent=questions[num].choices[2];
    questionChoices4.textContent=questions[num].choices[3];

    var lastA= questions[questions.length-1].choices[0];
    var lastB= questions[questions.length-1].choices[1];
    var lastC= questions[questions.length-1].choices[2];
    var lastD= questions[questions.length-1].choices[3];

    //empty page content
    pageHeadtag.textContent="";
    pageContent.textContent="";
    startButon.style.display="none";
    
    //show display to block
    displayMode.style.display="block"

    
    
    questionTitle.textContent= questions[num].title;               
    choiceContent.addEventListener("click", function(e){
        clickElement = e.target.textContent
        clickElementLen= clickElement.length
        correctAnswer= questions[num].answer
        var audioC = new Audio("./assets/sfx/correct.wav")
        var audioW = new Audio("./assets/sfx/incorrect.wav")
        
        
        
        
        
            
            if(clickElement!== lastA && clickElement!==lastB && clickElement!==lastC && clickElement !== lastD){
                num++;
                questionTitle.textContent= questions[num].title; 
                questionChoices1.textContent=questions[num].choices[0];
                questionChoices2.textContent=questions[num].choices[1];
                questionChoices3.textContent=questions[num].choices[2];
                questionChoices4.textContent=questions[num].choices[3];
               
            }
            else{
                questionTitle.style.display="none"
                choiceContent.style.display="none"
                secondLeft=0;
            }
           
                
                if(clickElement== correctAnswer){
                    audioC.play()
                    answerDisplayT.textContent = "CORRECT !"
                    score+=1;
                    
                    setTimeout(function(){
                        answerDisplayT.textContent = ""
                    }, 350);     
                }

                else{
                    answerDisplayT.textContent = "WRONG !"
                    audioW.play()
                    secondLeft-=10;
                    setTimeout(function(){
                        
                        answerDisplayT.textContent = ""
                    }, 350);
                    
                   
                    
                }
         
                
                
            });
            
            
        }
  
    
    

        
        
        
//questionChoices.addEventListener("click",startGame)
//console.log(questions[i].answer=== questions[i].choices[2])
