console.log("labukas");

var worker = {
  name : "",
  lname: "",
  nr: 0,
  items: 0
};
// visi darbuotojai masyvas  = new Array()
var allWorkers = [];
// allWorkers = [worker, worker2, ...]


function print(text, aa) {
  document.write(text, aa);
}
function printCon(text, aa) {
  console.log(text, aa);
}



var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Clemente", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Claudie", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

// === uzduotis: uzpildyti masyva objektais, kur objektas yra informacija paie darbuotoja (vardas, pavarde, nr, detaliuSkaicius)
//begam per masyva
for( var kk = 1; kk < 50; kk++){
  // var worker = {}; // susikuriam objektas
  var worker = {
    name : names[kk],
    lname: lastNames[kk],
    nr: kk,
    items: Math.floor( Math.random() * 100)
  };
  // worker.name = names[kk];
  // worker.lname = lastNames[kk];
  // worker.nr = kk;
  // worker.items = Math.floor( Math.random() * 100);

  // dedame darbuotojo obj i masyva
  allWorkers[kk] = worker;
}

print("Visi darbuotojai: ", allWorkers );
printCon("Visi darbuotojai: ", allWorkers );
