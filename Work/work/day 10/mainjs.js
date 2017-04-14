console.log("sdasdasdasd");




var worker = {
	name: "",
	lastname: "",
	nr: "",
	nritems: 0,

};

// alles loite Masyvas
	var allWorkers = [];
	// allWorkers = [worker, worker2, ...];

	function print(text, aa) {
		document.write(text, aa);
	}

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Clemente", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Claudie", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

// uzpildyti masyva darbuotojais//
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
// print("Visi darbuotojai: ", allWorkers );



      // Ze Code For nuber gen//


// 	print("testing: ", allWorkers);

// function stringGen(len)
// {
//     var text = " worker ";
    
//     var charset = "0123456789";
    
//     for( var i=0; i < len; i++ )
//         text += charset.charAt(Math.floor(Math.random() * charset.length));
    
//     return text;
// }

// console.log(stringGen(2));