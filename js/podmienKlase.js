
function podmien(obiektID, klasa) {
    let obiekt= document.getElementById(obiektID);
    obiekt.className=klasa;
}

let napis="Same najlepsze produkcje - TYLKO U NAS!!!";


let el_btnStart= document.querySelector("#btnStart");
let el_btnStop= document.querySelector("#btnStop");
let spacja="";
let dziala=true;
let timerID_r=null;

function ruchomy() {
    let el_txt= document.querySelector("#txtRtext");

    if(dziala){
        for (let i = 0; i < el_txt.size- napis.length; i++) {
        spacja+=" ";  
        }
        napis= el_txt.value+spacja+"  ";
        dziala=false;
    }
    napis=napis.substring(1)+ napis.substring(0,1);

    el_txt.value=napis;
    clearTimeout(timerID_r);
    timerID_r = setTimeout(ruchomy,200);
}
el_btnStart.addEventListener("click", ruchomy);

el_btnStop.addEventListener("click", function(){
    clearTimeout(timerID_r);
})

