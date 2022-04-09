var clearBut= document.getElementById("clear");
var highScores= document.getElementById("highscores");
li1= document.createElement("li");

console.log(localStorage.length)


addLi=highScores.appendChild(li1);


var iL=JSON.parse(localStorage.getItem("initial"))
var sE=JSON.parse(localStorage.getItem("score"))
var scoreResult= iL + " score:  " +sE;

li1.append(scoreResult);

clearBut.addEventListener("click", function(){
    window.localStorage.clear();
});


function submitTing(){
    
  
    submitButton.addEventListener("click", function(){
        var initial=document.getElementById("initials").value;
        window.location = "assets/highscores.html"
        window.localStorage.setItem("initial",JSON.stringify(initial));
        window.localStorage.setItem("score",JSON.stringify(score));

    });    

   


}    


