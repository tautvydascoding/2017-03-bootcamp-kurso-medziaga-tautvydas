
console.log("labas");
// ===============pamoka su OBJ copy ====
// copy objekta
var hero = {
  speed : 15,
  name : "name",
  jump: 5,
  hitpoints: 20
};

var elf =  Object.assign({}, hero);
elf.name = "Legolas";
elf.speed = 25;
elf.sleep = false;

var looks = {
  hairColor: "yellow",
  eyesColor: "brown"
};
var loots = {
  sword: false,
  blade: true
};

// elf.__proto__ = looks;  // nepatartinas, del greicio
// elf.prototype = Object.create(looks);
// var elf = Object.create(looks); // kuriams naujas obj, kuris iskart paveldi "looks" objekta

// var dwarf = Object.create(looks); // naujas obj , kuris paveldi "looks" obj
// Object.assign(dwarf, hero);  // copy hero
// console.log(dwarf);

// ======  while function====

// daug kart atlikti ta pati veiksma
// var r = 0;
// while( r < 10 ) {
//   console.log("skaicius: ", r++);    //r = r + 1;   r++;  r +=1;
// }

// daug kart kvieisme funkcija
// function spausdinti(kint) {
//   console.log(kint);
//   isEnd = false;
// }
// var isEnd = true;
// while (isEnd) {
//    spausdinti("aaa");
// }

// ======= atspausdinsime galerija 
function spausdinti() {
      var img = ' \
      <div class="col-lg-4 "  > \
         <img class="img-responsive" src="https://placeimg.com/300/300/any" > \
      </div> \
      ';
      $('.gallery').append(img);  // idedame savo HTML elementa i Galerija
    }
    var isEnd = true,
     tt = 0;
    while ( tt < 21) {
       spausdinti( );
       tt++;
    }







a
