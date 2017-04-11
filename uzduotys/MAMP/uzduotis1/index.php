<?php

    $aa= 10;

        echo "Labas, as tau skolingas $aa euru <br> nes man nesumokejo imone \"XXX\" \$a ";
        echo 'Labas, as tau skolingas $aa euru, nes man nesumokejo imone   <br> ';
    $bb = 20;
    $cc = &$bb;
    echo "aa: $aa, bb: $bb, cc: $cc  <br> ";
    $bb = 1;
    echo "aa: $aa, bb: $bb, cc: $cc  <br>";

    // echo print_r ($_SERVER) ;
    $aa = 12.6;
    echo "aa: $aa <br />";
    Settype($aa, "integer");
    echo "aa: $aa <br />";

    $tekstas = $aa." bb: ".$bb.$cc." <br>";
    echo $tekstas;
    echo "teksto ilgis: ". strlen($tekstas)."<br /> Ilgis: ". strlen("as storas"). "<br />";

$i = "222";
if ($i == 0) {
 	echo "i equals 0";
	} elseif ($i == 1) {
		echo "i equals 1";
		} elseif ($i == 2) {
			echo "i equals 2";
		}

$i = "tu";
switch ($i) {
  case 1:
     echo "i == 1";
    break;
  case "as":
    echo "i == as";
    echo "i == as";
    echo "i == as";
    break;
  case "tu":
    echo "i == tu";
    break;
  case "jis":
    echo "i == jis";
    break;
}


include ("header.html");

$gyvunai = ["313adfsad" => "antis", "meska", "vilkas","drakonas"];
foreach ($gyvunai as $gyvunas) {
  echo "Gyvuno pavadinimas: $gyvunas  <br />  ";
}
print_r($gyvunai);

echo "<br />";

$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one line until end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);









 ?>
