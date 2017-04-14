<!DOCTYPE html>
<html>
<head>
	<title>static tests</title>
</head>
<body>
<h1>WABALABADUBDUB2</h1>
<?php 
	
	function testFinal () {
	  static $count = 9;
		$number = 0;
		$count++;
		$number++;
		return "count: $count, number: $number";
	}

	echo testFinal(). "<br />";
	echo testFinal(). "<br />";
	echo testFinal(). "<br />";
	echo testFinal(). "<br />";
	echo testFinal(). "<br />";
	

		// ++++++++++++//recursija//++++++++



		$number = 0; // GLOBALUS KINTAMASIS
		function countNumber ($timesRepeat) {
			global $number;
			$number += 2; //$number = $number +2
			if ($number < $timesRepeat) {
			countNumber($timesRepeat);

			}
			echo "nr: $number";
		}
		countNumber(100);
		echo $number. "<br />"

 ?>

</body>
</html>