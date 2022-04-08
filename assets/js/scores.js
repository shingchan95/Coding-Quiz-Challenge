function getInfo(){

    var highScores= document.getElementById("highscores");
    //var scR= JSON.parse(localStorage.getItem("score"));
    //var InL= JSON.parse(localStorage.getItem("initial"));
    
    li1= document.createElement("li");
    
    console.log(localStorage.length)
    
    for (var i = 0; i < localStorage.length; i++){
        addLi=highScores.appendChild(li1);
        //li1.textcontent= InL + " score is: "+scR;
        

        li1.append(localStorage.getItem((localStorage.key(i))));
        console.log(localStorage.getItem((localStorage.key(i))));
        
        //addLi.append(localStorage.getItem("initial"(localStorage.key(i))));
    }
}
    
        //} 
        
        getInfo()
        
        function submitTing(){
         //var score= getElementById
         
         submitButton.addEventListener("click", function(){
             var initial=document.getElementById("initials").value;
             window.location = "assets/highscores.html"
             window.localStorage.setItem("key",JSON.stringify(initial, score));
           

             
         });
     }
//InL+"- "+scR