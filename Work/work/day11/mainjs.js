console.log("Hola amigo")
// // ======================= objektai
// var hero = {
// 	speed : 15,
// 	name : "name",
// 	jump : 5,
// 	hitpoints : 20
// };

// 	var elf = Object.assign({}, hero);
// 		// console.log(elf);
// 		elf.name = "Legolas";
// 		elf.speed = 25;
// 		elf.sleep = false;
// 		// console.log("hero");
// 		// console.log("elf");


// 		var looks = {
// 			hairColor: "yellow",
// 			eyeColor: "brown"
// 		};
// 		var loot = {
// 			sword: false,
// 			blade: true
// 		};



// 		// elf.__proto__ =loot;
// 		// elf.prototype = Object.create(looks);		
// 		// Object.getPrototypeOf()
// 		var elf = Object.create(looks); //kuriamas naujs obj kuris i skart paveldi

// 		var dwarf = Object.assign({}, hero);

// 		dwarf =  Object.create(hero);
// 		Object.assign(dwarf, hero); //copy hero

// 		console.log(dwarf)


		// ==================== while functiuon ==========//

		//daug kart atlikti ta pati veiksma
	// 	var r = 0;
	// 	while( r < 10) {
	// 		console.log("skaicius", r++ );
	// 		// r = r + 1// r++; r+=1;
	// 	}
	// 	function spausdinti(kint) {
	// 	console.log(kint);
	// 	isEnd = false;
	// }
	// 	var isEnd = true;
	// 	while (isEnd) {
	// 		spausdinti("aaa");	
	// 	}
	// $(document).ready(function()	 {
	//============== atspausdinti galerija =============//
// function spausdinti() {
	// var gallery = $('gallery')
	// var img = document.createElement('div')
	// img.innerHTML('<img src="http://img.clipartall.com/balls-clip-art-balls-clipart-999_700.jpg" >');

function spausdinti() {
	var img = ' \
	<div class="col-lg-4" > \
		<img class=" img-responsive" src="https://placeimg.com/640/480/any" > \
	 </div> \
	 ';
	$('.gallery').append(img);
	isEnd = false;
}
var isEnd = true;
tt = 0;
while (tt < 21) {
	spausdinti ();
	tt ++;

}

// ====== for for =========//



var vardai = ["Tadas", "Paulius", "Kolia", 
"Boris", "Manvistas", "Visgiris"];
var pavardes = ["Petkavicius", "Kopinskas", "Sudautas", 
"Matualas", "Kaimasukas", "Povilaitis"];

var matrica = [
	vardai[0]
];

var matrica = [];
 matrica[0] = ["Vardas", "Pavarde", "1991/01/00", 150, 39101010000];
 matrica[1] = ["Vardas1", "Pavarde1", "1991/01/01", 150, 39101010001];
 matrica[2] = ["Vardas2", "Pavarde2", "1991/01/02", 150, 39101010002];
 matrica[3] = ["Vardas3", "Pavarde3", "1991/01/03", 150, 39101010003];
 matrica[4] = ["Vardas4", "Pavarde4", "1991/01/04", 150, 39101010004];

for (var gg = 0; gg < matrica.length; gg++) {
	for (var ss = 0; ss < matrica[gg].length; ss++) {
	console.log(" | ", matrica[gg][ss], " | ");
	document.write(" | ", matrica[ss][gg], " | ");
		}
	document.write("</br>");

	}

	//=========== for ciklas sumazinam ============//

	var zmogus = ["Vardas", "Pavarde", "1991/01/00", 150, 39101010000];
	for ( var i = zmogus.length; i > 0; i--) {
		console.log(zmogus[i]);
	}