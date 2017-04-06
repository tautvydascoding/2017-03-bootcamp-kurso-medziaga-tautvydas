 /*
2017-04-06 Tautvydo testavimas
 */

var vardas,
pavarde,
vedes,
amzius,
skirybuData = null,
zmonosVardas;

vardas = "Petras"; //  String (tekstas)
vedes = true;  // boolean true/false   null, undefine
amzius = 18;

// Masyvas/Array
var masinosBagazine = ["atsarginisRatas", "kastuvas", "gesintuvas", "virve", "uzkurimoLaidai", "krokodilas"];

function spausdintiIKonsole(text) {
  console.log(text);
}
function spausdintiIKonsoleSuKomentaru(comment, variable) {
  console.log(comment, variable);
}
// i Array idedame papildoma elementus
masinosBagazine.push("atsarginiaiDrabuziai", "kepure");
masinosBagazine.push("maistas");
spausdintiIKonsole(masinosBagazine);
// console.warn("console blogai atvaizduoja isskleistus masyvus, bet gerai atvaizduoja skliaustuose []");
// masinosBagazine.splice(3, 2);
// spausdintiIKonsoleSuKomentaru("iskerpome is masyvo 2 elementus nuo trecio",masinosBagazine);
//
// masinosBagazine.slice(2);
// spausdintiIKonsoleSuKomentaru("iskroveme bagazine, pasilikome 2 daiktus",masinosBagazine);
