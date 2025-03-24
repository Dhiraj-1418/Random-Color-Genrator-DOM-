const body=document.querySelector("body");
const genratorBtn=document.querySelector("#genrator");
const randomCode=document.querySelector("#hexCode");
const copy=document.querySelector("#copy");
const coppied=document.querySelector("#coppied")



genratorBtn.addEventListener("click" ,()=>{
        randomColor();
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(randomCode.innerHTML).then(() => {
    coppied.innerHTML="Coppied!"
    });
});

function randomColor(){
    const randomNum=Math.floor(Math.random()*16777216);
    const randomColorCode="#"+ randomNum.toString(16);
    body.style.backgroundColor=randomColorCode;
    document.getElementById("preBox").style.backgroundColor=randomColorCode;
    randomCode.innerHTML=randomColorCode
 
}

randomColor();