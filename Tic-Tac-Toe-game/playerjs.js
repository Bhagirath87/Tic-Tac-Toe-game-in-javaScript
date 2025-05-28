let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let main=document.querySelector("main");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turnO=true;
let count=0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO===true)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true   
        }
        box.disabled=true;
        count++;
        checkwinner();
        if(count===9){
            msg.innerText="Game was a Draw.";
            msgcon.classList.remove("hide");
            main.classList.add("hide");
        }
    })
})

const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos3val===pos2val){
                msg.innerText=`Congratulation, Winner is ${pos1val}`;
                msgcon.classList.remove("hide");
                main.classList.add("hide");
                
            }
        }
    }
}
const resetGame=()=>{
    turnO=true;
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        main.classList.remove("hide");
       msgcon.classList.add("hide");
    }
};
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);