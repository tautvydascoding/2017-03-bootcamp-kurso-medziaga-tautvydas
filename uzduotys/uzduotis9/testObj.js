var veikejas = {
  vardas: "",
  amzius: 22,
  kuprine: ["vanduo", "miegmaisis", "peilis", "palapine"],
  ispurtytiKuprine: function () {
     this.kuprine = [];
  },
  istroskes: false,
  paklydes: false
};
var miskas = {
  lokacija: "Gervenupis",
  dydis: 50,
  vnt: "ha",
  augmenija: ["pusys", "egles", "klevai"],
   gerybes : ["melynes", "zemuoges"],
   gyvunai: [4],
   arLyja: false,
   paklaidinti: function () {
     veikejas.paklydes = true;
   },
   temperatura: 5.5
};

function spausdintiIKonsole ( info) {
  console.log(info);
}
function spausdintiIKonsoleSuKomentaru (komnetaras, info) {
  console.log(komnetaras, info);
}

// spausdintiIKonsole(veikejas.kuprine);
// veikejas.ispurtytiKuprine();
// spausdintiIKonsole(veikejas.kuprine);



// irkevimo testavimas
// spausdintiIKonsoleSuKomentaru("nesurikiiuotas masyvas", miskas.augmenija);
// miskas.augmenija.sort();
// spausdintiIKonsoleSuKomentaru("surikiiuotas masyvas", miskas.augmenija);



// var nuoVienoIkiSimto = Math.floor(Math.random() * 100) ;

// var atsitiktinisSkaicius = Math.random();
// if(  atsitiktinisSkaicius > 0.7 ){
//     spausdintiIKonsoleSuKomentaru("daudaiu nei 0.7", atsitiktinisSkaicius);
// } else if( atsitiktinisSkaicius <= 0.3 ) {
//     spausdintiIKonsoleSuKomentaru("maziau ar ba lygu  0.3", atsitiktinisSkaicius);
// } else {
//      spausdintiIKonsoleSuKomentaru("nuo 0.31 iki 0.7 ", atsitiktinisSkaicius);
// }

var atsitiktinisSkaicius = Math.random();
if(  atsitiktinisSkaicius > 0.5 ){
    miskas.temperatura = atsitiktinisSkaicius * 10;
} else  {
      miskas.temperatura = atsitiktinisSkaicius * -10;
}
spausdintiIKonsoleSuKomentaru("random: ", atsitiktinisSkaicius);
spausdintiIKonsoleSuKomentaru("Misko temperatura ", miskas.temperatura);


// for()
// arba
// while()

// =====sukurti masyva 100 elementu ilgio naudojant FOR
// var darbuotojoPagamintosDetales = [];
// for( var i =0; i < 100; i++ ) {
//   darbuotojoPagamintosDetales[i] = Math.floor(Math.random() * 100);
// }

//===== sukurti masyva 100 elementu ilgio naudojant WHILE
// var darbuotojoPagamintosDetales = [];
// var t = 0;
// while (darbuotojoPagamintosDetales.length < 100) {
//     darbuotojoPagamintosDetales[t] = Math.floor(Math.random() * 100);
//     t++;
// }

//===== sukurti masyva 100 elementu ilgio naudojant WHILE (2)
// var darbuotojoPagamintosDetales = new Array(100);
// while (darbuotojoPagamintosDetales.length < 100) {
//     darbuotojoPagamintosDetales.push(  Math.floor(Math.random() * 100));
// }
// spausdintiIKonsoleSuKomentaru("darbuotoju detale: ", darbuotojoPagamintosDetales);

// darbuotojai suveda neteisingas reiksmes(panaudodami minusa) - kusime masyva 100 elementu
var darbuotojoPagamintosDetales = new Array();
for( var j = 0; darbuotojoPagamintosDetales.length < 100; j++ ) {
  var atsitiktinisSkaicius =  Math.random()  ;
  if(atsitiktinisSkaicius > 0.9) {
    darbuotojoPagamintosDetales[j] = Math.floor( Math.random()*10000) *-1;
  } else {
      darbuotojoPagamintosDetales[j] = Math.floor( Math.random()*10000) ;
  }
}
// spausdintiIKonsoleSuKomentaru("darbuotoju detale: ", darbuotojoPagamintosDetales);

//   darbuotoju pagamintas detales paversime i teigiama skaiciu ir isvesime suma
var visoPagamintaDetaliu = 0;
for( var j = 0; j < darbuotojoPagamintosDetales.length ; j++ ) {
  // ar darbuotojas suklydo
  if(darbuotojoPagamintosDetales[j] < 0) {
    visoPagamintaDetaliu += darbuotojoPagamintosDetales[j] * -1;
  } else {
    visoPagamintaDetaliu = visoPagamintaDetaliu + darbuotojoPagamintosDetales[j] ;
  }
}
spausdintiIKonsoleSuKomentaru("Viso: ", visoPagamintaDetaliu);


// ieskome gelriausios darbuotojo numerio
var i = 0,
geriausiasDarbuotojas = 0,
didziausiasSkaicius = 0;

while( i < darbuotojoPagamintosDetales.length ) {
  if( darbuotojoPagamintosDetales[i] > didziausiasSkaicius ){
    geriausiasDarbuotojas = i;
    didziausiasSkaicius = darbuotojoPagamintosDetales[i];
  }
  i++;
}
spausdintiIKonsoleSuKomentaru("Viso: ",darbuotojoPagamintosDetales);
console.log("geriausio numetis: ", geriausiasDarbuotojas);
