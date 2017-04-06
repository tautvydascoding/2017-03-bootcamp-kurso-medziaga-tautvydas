var veikejas = {
  vardas: "",
  amzius: 22,
  kuprine: ["vanduo", "miegmaisis", "peilis", "palapine"],
  ispurtytiKuprine: function () {
     this.kuprine = [];
  },
  istroskes: false,
  paklydes: false
}
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
   }
}

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













// copy objekta
// var Onute =   Object.assign({}, veikejas); //The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// Onute.vardas = "Rima";
// veikejas.vardas = "Arturas";
// spausdintiIKonsoleSuKomentaru("Onute  : ", Onute);
// spausdintiIKonsoleSuKomentaru("veikejas  : ", veikejas);
