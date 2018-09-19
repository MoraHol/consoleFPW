<?php
require "../model/Registry.class.php";
session_start();

if (isset($_GET["dir1"]) && isset($_GET["dir2"]) && isset($_GET["message"])) {
    $array = unserialize($_SESSION["array"]);
    $array->RegisterMessage($_GET["dir1"], $_GET["dir2"], $_GET["message"]);
    $_SESSION["array"] = serialize($array);
    echo "este mensaje fue registrado satisfactoriamente";
}
if (isset($_GET["dir"])) {
    $array = unserialize($_SESSION["array"]);
    $html = $array->ListMessages($_GET["dir"]);
    echo $html;
}
