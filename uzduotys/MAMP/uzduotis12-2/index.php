<html>
  <head>
    <title>Class and Object Methods</title>
  </head>
  <body>
    <h1> Testuojame PHP OBJ</h1>
    <p>
      <?php
       $name = 132;

        class Person {
          public $isAlive = true;
          public $aaa = 15;
          public $name = "Tomas";

          // konstruktorius 1 budas
          public function Person ($vardas = "Neturiu" ) {
            // $name = $vardas;
              $this->name = $vardas;
              echo "<br>".$this->name."<br>";
          }
          // konstruktorius 2  budas
          // public function __construct ($vardas = "Neturiu" ) {
          //   $name = $vardas;
          //     echo "<br>".$name."<br>";
          // }
          public function dance() {
            echo "name: $name";
            return "I'm dancing!";
          }
        }

        $me = new Person("Antonijus" );
        $you = new Person( );

        // var_dump(get_object_vars($me));
        $vardas = $me->name;
        echo "vardas: ".$vardas."<br />";
        $me->name = "Povilas";
        echo "vardas: ".$vardas."<br />";

        $me->dance();

        // echo "me  aaa: ". $me->$aaa;
        // echo "<br />";
        // echo "you \$aaa: $you->$aaa";


      ?>
    </p>
  </body>
</html>
