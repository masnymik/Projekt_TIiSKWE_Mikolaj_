function zegar() {
    const teraz = new Date();
    let godzina = teraz.getHours();
    let minuta = teraz.getMinutes();
    let sekunda = teraz.getSeconds();

    let czas = "";
    czas += (godzina > 12) ? godzina - 12 : godzina;
    czas += ((minuta < 10) ? ":0" : ":") + minuta;
    czas += ((sekunda < 10) ? ":0" : ":") + sekunda;
    czas += (godzina > 12) ? "PM" : "AM";

    let el_intxt = document.querySelector("#zegarTXT");
    el_intxt.value = czas;
    setTimeout(zegar, 1000);
}

let sec=0, mili=0; 
let IntervalID=null;

function stoper() {
    if (mili>=9) {  
        sec+=1; mili=0;        
    } else {
        mili+=1;
    }
    let el_stoper= document.querySelector("#stoperTXT");
    el_stoper.value=`${sec}:${mili}`;
}
function startStoper() {
   IntervalID = setInterval(stoper,100);
}
function stopStoper() {
    clearInterval(IntervalID);
}
function initPage() {
    updateDateTime();
    setInterval(updateDateTime, 1000);

 
    if (sessionStorage.getItem('visitCount')) {
        let visitCount = parseInt(sessionStorage.getItem('visitCount'), 10);
        sessionStorage.setItem('visitCount', visitCount); 
    } else {
        sessionStorage.setItem('visitCount', 1);
    }
    document.getElementById('visitCount').innerText = sessionStorage.getItem('visitCount');

    
    if (!sessionStorage.getItem('startTime')) {
        sessionStorage.setItem('startTime', Date.now());
    }
    updateTimeSpent();
    setInterval(updateTimeSpent, 1000);
}

function updateTimeSpent() {
    const startTime = parseInt(sessionStorage.getItem('startTime'), 10);
    const currentTime = Date.now();
    const timeSpent = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('timeSpent').innerText = timeSpent;
}