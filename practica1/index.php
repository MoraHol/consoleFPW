<?php
require "practicaBackEnd/model/Registry.class.php";
session_start();
$array = new Registry();
$_SESSION["array"] = serialize($array);
header("Location: practicaFrontEnd/public_html/view/index.html");