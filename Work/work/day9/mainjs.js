 /*
2017-04-06 
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
masinosBagazine.push("atsarginiaiDrabuziai", "balaclava");
masinosBagazine.push("kirvis");
spausdintiIKonsole(masinosBagazine);
// console.warn("console blogai atvaizduoja isskleistus masyvus, bet gerai atvaizduoja skliaustuose []");
// masinosBagazine.splice(3, 2);
// spausdintiIKonsoleSuKomentaru("iskerpome is masyvo 2 elementus nuo trecio",masinosBagazine);
//
// masinosBagazine.slice(2);
// spausdintiIKonsoleSuKomentaru("iskroveme bagazine, pasilikome 2 daiktus",masinosBagazine);

// pakeiciam kastuva i EnvM4
// masinosBagazine[1] = "EnvM4";

//======================begame per visa masyva

// // for ( var i = 0; i < masinosBagazine.length; i++ ){
// // 	//tikriname kiekvina masyvo elementa
// // 	if(masinosBagazine[i] === "gesintuvas") {
// // 	   masinosBagazine[i] = "EnvM4";
// //     }
// // }

// // spausdintiIKonsole(masinosBagazine);

// while ( i < masinosBagazine.length ) {
// 	console.log(masinosBagazine[i]);
// 		i++;
// }

// iesko ir pakeicia
// 			var i = 0
// 			var visdarIeskome = true;
// 			while ( visdarIeskome ) {
// 				if ( masinosBagazine[i] === "kastuvas" ){
// 					masinosBagazine[i] = "dovana";
// 					break;

// 				}
// 				i++;

// 				console.log(masinosBagazine[i]);
// 			}
// 			spausdintiIKonsole(masinosBagazine);

