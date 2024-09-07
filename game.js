let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice=()=>{
  const option=["rock","paper","scissors"];
  const rdmidx=Math.floor(Math.random()*3);
  return option[rdmidx];
}

const drawgame=()=>{
  msg.innerText="Game Was Draw,Play Again";
  msg.style.backgroundColor=" rgb(4, 4, 39)";
}
 
const showwinner=(userwin,userchoice,compchoice) =>{
  if(userwin){
  userscore++
  userscorepara.innerText=userscore;

    console.log(" You win");
    msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`You Lost! Computer ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
  }
};

const playgame=(userchoice)=>{
   console.log("userchoice=",userchoice);
   const compchoice=gencompchoice();
   console.log("comp choice=",compchoice);

   if(userchoice===compchoice){
     drawgame();
   }else{
    let userwin = true;
    if(userchoice==="rock"){
      userwin=compchoice==="paper" ? false : true;
    }else if(userchoice==="paper"){
      userwin =compchoice==="scissors"? false :true; 
      }
    else{
      userwin =compchoice==="rock"? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
   }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice =choice.getAttribute("id");
      playgame(userchoice);
    });
});