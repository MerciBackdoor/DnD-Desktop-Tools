const files=["StoneDoor.mp3", "WoodDoor.mp3"];

let vol=JSON.parse(localStorage.getItem("sb")||"{}").v??0.4;

const board=document.getElementById("board");

const slots=14; // 2x7
const pool={};

function save(){
localStorage.setItem("sb",JSON.stringify({v:vol}));
}

// создаём пустую сетку
for(let i=0;i<slots;i++){
const b=document.createElement("button");
b.classList.add("empty");
b.textContent="";

const file=files[i];

if(file){
b.textContent=file.replace(".mp3","");

const a=new Audio("sounds/"+file);
a.volume=vol;
pool[file]=a;

b.onclick=()=>{

if(!a.paused && !a.ended){
a.pause();
a.currentTime=0;
b.classList.remove("play");
return;
}

a.currentTime=0;
a.play();
b.classList.add("play");

a.onended=()=>b.classList.remove("play");

save();
};

}else{
b.disabled=true;
}

board.appendChild(b);
}