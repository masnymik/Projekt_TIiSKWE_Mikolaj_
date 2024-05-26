
function Dane(ceny1, ceny2, ceny3, ceny4, ceny5, ceny6,ceny7) {
    this.ceny1 = ceny1;
    this.ceny2 = ceny2;
    this.ceny3 = ceny3;
    this.ceny4 = ceny4;
    this.ceny5 = ceny5;
    this.ceny6 = ceny6;
    this.ceny7 = ceny7;
}


const tabJ = [
    new Dane("Poniedziałek", 18, 10, 11, 12, 20, 8),
    new Dane("Wtorek", 19.8, 10, 11, 12, 20, 8),
    new Dane("Środa", 21.6, 10, 11, 12, 20, 8),
    new Dane("Czwartek", 23.4, 10, 11, 12, 20, 8),
    new Dane("Piątek", 27, 10, 11, 12, 20, 8),
    new Dane("Sobota", 36, 10, 11, 12, 20, 8),
    new Dane("Niedziela", 36, 10, 11, 12, 20, 8),
];

function wyswietl(tablica) {
    let txt = '<tr>\
        <th>Nr. Dnia</th>\
        <th>Dzień tygodnia</th>\
        <th>Cena biletu</th>\
        <th>Cena popcornu</th>\
        <th>Cena napojów</th>\
        <th>Cena chipsów</th>\
        <th>Cena okularów 3D</th>\
        <th>Cena za toaletę</th>\
        </tr>';

    for (let i = 0; i < 7; i++) {
        txt += `<tr>\
            <td>${i + 1}</td>\
            <td>${tablica[i % tablica.length].ceny1}</td>\
            <td>${tablica[i % tablica.length].ceny2}</td>\
            <td>${tablica[i % tablica.length].ceny3}</td>\
            <td>${tablica[i % tablica.length].ceny4}</td>\
            <td>${tablica[i % tablica.length].ceny5}</td>\
            <td>${tablica[i % tablica.length].ceny6}</td>\
            <td>${tablica[i % tablica.length].ceny7}</td>\
            </tr>`;
    }

 
    let el_tab = document.querySelector("#tabelaDanych");
    el_tab.innerHTML = txt;
}





