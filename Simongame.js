let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let Btns=["red","purple","green","yellow"];


document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game is  started");
        start=true;

        levelup();
    }
    
});


// button flash
function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random()*Btns.length);
    let randColor=Btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    //button flash

    btnflash(randbtn);
}

function checkanswer(idx){
 // let idx= level-1;
  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
     
    }
    
  }
  else{
     h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
    //  document.body.style.color="red";
    //  setTimeout(function(){
    //     document.body.style.color="white";
    //  },150);
     reset();
  }
}
 
function btnPress(){
    let btn=this;
    btnflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkanswer(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of  allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}