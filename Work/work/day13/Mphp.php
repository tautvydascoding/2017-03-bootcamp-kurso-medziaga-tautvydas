<!DOCTYPE html>
<html>
<head>
	<title>Testinam klases ir objektus</title>
</head>
<body>
<h1>WABALABADUDBDUB</h1>

	<?php 
	$title = "WABALABADUDBDUB";
		echo "<h1>".$title."</h1>";

          class human {
            private $name = "";

            public function setName ($n) {
               $this->name = $n;
            }
            public  function getName () {
              return $this->name;
            }
          }
          $man = new human; // kuriame OBJ
          // $man->name = "Kastytis K.";  // neveikai, nes bandome pasiekti private kintamaji
          // echo $man->getName();
          $man->setName("Tommy");
          echo $man->getName()."<br />";
          $man->setName("Wiseou");
          echo $man->getName()."<br />";

	 ?>

</body>
</html>