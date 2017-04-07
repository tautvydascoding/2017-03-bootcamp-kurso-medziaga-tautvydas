var veikejas = {
    vardas: "",
    amzius: 22,
    kuprine: ["vanduo", "miegmaisis", "peilis", "palapine"],
    ispurtytiKuprine: function() {
        this.kuprine = [];
    },
    istroskes: false,
    paklydes: false
};

function spausdintiKonsole(info) {
    console.log(info);
}

function spausdintiKonsoleSuKomentaru(komentaras, info) {
    console.log(komentaras, info);
}
var miskas = {
    lokacija: "Gervenupis",
    dydis: 50,
    vnt: "ha",
    augmenija: ["pusys", "egles", "klevai"],
    gerybes: ["melynes", "zemuoges"],
    gyvunai: [4],
    arLyja: false,
    paklaidinti: function() {
        veikejas.paklydes = true;
    }
};
//spausdintiKonsole(veikejas.kuprine);
//veikejas.ispurtytiKuprine();
//spausdintiKonsole(veikejas.kuprine);

spausdintiKonsoleSuKomentaru("veikejas vardas:", veikejas.vardas);
spausdintiKonsoleSuKomentaru(miskas.augmenija);
miskas.augmenija.sort();
spausdintiKonsoleSuKomentaru("surikiuotas:", miskas.augmenija);

var atsitiktinisSkaicius = Math.random();
if (atsitiktinisSkaicius > 0.5) {
    miskas.temperatura = atsitiktinisSkaicius * 10;

} else {
    miskas.temperatura = atsitiktinisSkaicius * -10;
}

//spausdintiIKonsole(masinosBagazine);
var masyvas = [],
    i = -10,
    j = 0, //masyvo elementas
    v = 0; //masyvo reiksmiu suma
geriausioDarbNr = 0;
geriausioDarbRezultatas = 0;
while (i < 10) {
    masyvas[i] = Math.floor(Math.random() * 10);
      console.log(j, "gautas skaicius:" + masyvas[i]);
    if (masyvas[i] < 0) {
        masyvas[i] = masyvas[i] * -1;
    }
//    console.log(j, "pagamino detaliu - " + masyvas[i]);
    //spausdintiKonsoleSuKomentaru(j);
    if (masyvas[i]>geriausioDarbRezultatas) {
      geriausioDarbRezultatas=masyvas[i];
        geriausioDarbNr = j;
        console.log( geriausioDarbRezultatas,"- geriausias rezultatas, darbuotojo Nr." +geriausioDarbNr);
        //spausdintiKonsoleSuKomentaru( masyvas[i],'geriausias darbuotojas Nr.'+j);
    }
    v = masyvas[i] + v;
    console.log(v);
    geriausioDarbRezultatas = masyvas[i];
    i++;
    j++;
}
spausdintiKonsoleSuKomentaru("buvo pagaminta detaliu:", v);
// //-------------------
// for (var i = 0; i < 100; i++) {}
// var detales = [],
//     t = 0; //var detales=new Array;
// while (detales.length < 100) {
//     detales[t] = 45 + t;
//     spausdintiKonsole(detales[t]);
//     t++;
// }
