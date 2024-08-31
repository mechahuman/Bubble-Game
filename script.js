var timer = 60;
score = 0;
var hitrn = 0;


function IncreaseScore(){

    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function MakeBubble(){
    var clutter = ""; 


    for(var i =0;i<=215;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

function RunTimer(){
    var timeint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector('#timervalue').textContent = timer;
        }
    else{

        clearInterval(timeint);
        document.querySelector("#pbottom").innerHTML = "";
    }
    },1000)
}

function NewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


document.querySelector('#pbottom').addEventListener("click",function(dets){
    var clickednum= (Number(dets.target.textContent));
    if (clickednum == hitrn){
        IncreaseScore();
        MakeBubble();
        NewHit();
    }
})


NewHit();
RunTimer();
MakeBubble();


