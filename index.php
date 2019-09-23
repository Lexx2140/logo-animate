<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="style.css" rel="stylesheet" media="all">
</head>

<body>
    <div id="animDiv" class="logo-div">
	<!-- Read logo from file -->
	<?php

	$logo = './img/logo.svg';

	if (is_file($logo)) {
		echo file_get_contents($logo);
	}?>

    </div>
    <footer>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="/js/jquery.drawsvg.js"></script>
        <script src="/js/script.js"></script>
    </footer>
</body>

</html>