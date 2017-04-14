<!DOCTYPE html>
<html>
<head>
	<title>Php 3 dalis</title>
</head>
<body>
<h1>WABALABADUBDUB3</h1>

<?php 
error_reporting(E_ALL);
ini_set('display_errors', 'on');



	class animal {
		public $alive = true;
		public $positionX = "85";
		public $positionY = "215";
		private $pinigine;
		public function move() {

	  }
	  public function prinText($text) {
	  echo $text; 

	  }
	}
	class $AnimalType extends Animal {
		private $tipas = "zinduolis";
		public $kaValgo = "zoleedis";
	}
	$gyvunas  = new Animal;
	$vilkas  = new AnimalType;
	echo "gyvunas alive: $gyvunas->alive, position: $gyvunas->positionX <br> ";
	echo "gyvunas: ".$gyvunas->printText('Vago valgo...')." <br>" ;

	echo "Vilkas tipas: $vilkas->kaValgo, $vilkas->alive ";
 ?>
</body>
</html>