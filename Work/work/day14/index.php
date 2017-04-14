<!DOCTYPE html>
<html>
<head>
	<title>Day14</title>
</head>
<body>
<h1>WABALABADUBDUB</h1>

<?php 
// phpinfo();

error_reporting(E_ALL);
ini_set('display_errors', 'on');


      interface Human {
        public function getName() ;
        public function getPersonalCode() ;
      }
      class Man implements Human {
      	private $name = "test";
        private $testosterone = 666;
        public function snore() {
        }
        public function getName() {
        	return $this->name;
        } 
        public function setName($text) {
        	$this->name = $text;
        }

        public function getPersonalCode() {}
      }

      $Tommy = new Man;
      echo $Tommy->getName(). "<br />";
      $Tommy->setName("Tommy");
      echo $Tommy->getName(). "<br />";

      abstract class HumanType {
      	public $skinType ='#666';
      	private $religion;
      	function getSpeed($aaa);
      }
      abstract Woman extends HumanType {
        public $skinType = '#999';
      	private $religion;
      	function getSpeed($aaa) {}
      }


      class Woman {
        private $estrogenai = 6666;
        public function gimdymas() {
          $this->sumazintiEstro();
        }
        private function sumazintiEstro() {
          $this->estrogenai -= 10;
        }
        private function padidintiEstro() {
            $this->estrogenai =  $this->estrogenai + 10;
        }
      }
      $Marija = new Woman;
      $Marija->gimdymas();
      // $Marija->sumazintiEstro(); // privaciu funkciju neiseina issaukti!






        // private $asmensKodas;
        // public $name;
        // public $lname;
        // public $gender;
 ?>

</body>
</html>