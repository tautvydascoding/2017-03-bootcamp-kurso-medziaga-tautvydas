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

// var atsitiktinisSkaicius = Math.random();
// if(  atsitiktinisSkaicius > 0.5 ){
//     miskas.temperatura = atsitiktinisSkaicius * 10;
// } else  {
//       miskas.temperatura = atsitiktinisSkaicius * -10;
// }
// spausdintiIKonsoleSuKomentaru("random: ", atsitiktinisSkaicius);
// spausdintiIKonsoleSuKomentaru("Misko temperatura ", miskas.temperatura);


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
spausdintiIKonsoleSuKomentaru("darbuotoju detale: ", darbuotojoPagamintosDetales);

// darbuotojai suveda neteisingas reiksmes(panaudodami minusa)




// copy objekta
// var Onute =   Object.assign({}, veikejas); //The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// Onute.vardas = "Rima";
// veikejas.vardas = "Arturas";
// spausdintiIKonsoleSuKomentaru("Onute  : ", Onute);
// spausdintiIKonsoleSuKomentaru("veikejas  : ", veikejas);

// === kitas budas OBJ kopijoms

// function Zmogus(vardas, ugis, amzius) {
//     this.vard = vardas;
//     this.aukstis = ugis;
//     this.amz = amzius;
// }
// var myFather = new Zmogus("Tautvydass",   150, 23);
