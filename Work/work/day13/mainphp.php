<!DOCTYPE html>
<html>
<head>
	<title>PHP rikiavimo algoritmas</title>
</head>
<body>
	<section>
	<h1><?php  echo "php rikiavimas" ?> </h1>
		
		<?php
			$arrayPrice = [265, 61, 13, 1, 4, 69, 888, 999, 769, 482, 123, 321, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10]; 


		// boble rikiavimas
function swapArrayElements (&$array, $curent, $second) {
				$previous = $array[$curent];
				$array[$curent] = $array[$second];	 	
				$array[$second] = $previous;
			}

		for ( $i=0; $i < sizeof($arrayPrice); $i++) {
			for( $k = 0; $k < sizeof($arrayPrice) - 1; $k++) {
				if ($arrayPrice[$k] > $arrayPrice[$k + 1] ) {
					swapArrayElements ($arrayPrice, $k, $k + 1);
			}
		}
	}
		
		print_r($arrayPrice);


?>
	</section>
</body>
</html>


<!-- 
	for ( $i=0; $i < sizeof($arrayPrice); $i++) {
			for( $k = 0; $k < sizeof($arrayPrice) - 1; $k++) {
				if ($arrayPrice[$k] > $arrayPrice[$k + 1] ) {
					$previous = $arrayPrice[$k];
					$arrayPrice[$k] = $arrayPrice[$k + 1];	 	
					$arrayPrice[$k + 1] = $previous;
				}
			}
		}
		print_r($arrayPrice);
 -->

		
