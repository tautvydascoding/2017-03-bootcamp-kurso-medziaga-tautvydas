<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>test</title>
  </head>
  <body>
    <h1>abstract class && Interface</h1>

    <?php

      interface Human {
        public function getName() ;
        public function getPersonalCode() ;
      }
      // class Man implements Human {
      //   private $testosterone = 3232;
      //   public function snore() {
      //   }
      // }
      class Woman {
        private $estrogenai = 31654;
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
        // public $gendar;
     ?>

  </body>
</html>
