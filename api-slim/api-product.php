<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli("localhost", "root", "", "testvalorprofs");


$app->get("/product/:Id", function($Id) use($db, $app){
    $query = "SELECT * FROM products WHERE Id = {$Id}";

    $curso = $db->query($query);

    echo json_encode($curso -> fetch_assoc());
});


$app->post("/product", function() use($db, $app){
    $query = "INSERT into products values ("
              . "'{$app->request->post("Id")}',"
              . "'{$app->request->post("Name")}',"
              . "'{$app->request->post("Avaliable")}',"
              . "'{$app->request->post("Price")}',"
              . "'{$app->request->post("Description")}',"
              . "'{$app->request->post("DateCreated")}'"
              .")";
  $insert = $db->query($query);
  if($insert){
      $result = array("STATUS" => "true", "message" => "New product added");
  }else{
      $result = array("STATUS" => "false", "message" => "Error on add product");
  }
  echo json_encode($result);
});

$app->put("/product/:Id", function($Id) use($db, $app){

  $query="UPDATE products SET Id = '{$app->request->post("Id")}', Name = '{$app->request->post("Name")}', "
			. "Avaliable = '{$app->request->post("Avaliable")}', Price = '{$app->request->post("Price")}', "
      . "Description = '{$app->request->post("Description")}', DateCreated = '{$app->request->post("DateCreated")}' WHERE Id={$Id}";

	$update=$db->query($query);
	if($update){
		$result = array("STATUS" => "true", "message" => "Product successfully updated");
	}else{
		$result = array("STATUS" => "false", "message" => "Error on update product");
	}

	echo json_encode($result);
  });

  $app->delete("/product/:Id", function($Id) use($db, $app){
    $query="DELETE FROM products WHERE Id = {$Id}";
          $delete = $db->query($query);
          if($delete){
              $result = array("STATUS" => "true", "message" => "Product deleted");
          }else{
              $result = array("STATUS" => "false", "message" => "Error on delete product");
          }
          echo json_encode($result);

  });


$app->run();
