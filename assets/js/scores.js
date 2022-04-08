       function submitTing(){
        //var score= getElementById
        
        submitButton.addEventListener("click", function(event){
            event.preventDefault();
            var initial=document.getElementById("initials").value;
            
            window.location = "assets/highscores.html"
            window.localStorage.setItem("initial",JSON.stringify(initial));
            window.localStorage.setItem("score",JSON.stringify(score));
            
    
        });
    }
    
    
    

    
    var li1= document.createElement("li");
    var highScores= document.getElementById("highscores");
    var scR= JSON.parse(localStorage.getItem("score"));
    var InL= JSON.parse(localStorage.getItem("initial"));
    li1.textContent = InL + " score is: "+scR;
    highScores.appendChild(li1);
    console.log("hi")

 
//InL+"- "+scR