<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli("localhost", "root", "", "testvalorprofs");

$app->get("/product-list", function() use($db, $app){
    $query = $db -> query ("SELECT Id, Name, Avaliable, Price FROM products");
    $products=array();
    while($fila = $query->fetch_assoc()){
      $products[]=$fila;
    }

    echo json_encode($products);
});


$app->run();
