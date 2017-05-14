<?php
require_once 'vendor/autoload.php';
$app = new \Slim\Slim();

$app->post("/authentication", function() use($app){

  $user = $app->request->post("user");
  $pass = $app->request->post("pass");
  $authent = false;
  if (($user=='admin@admin.com' && $pass == 'admin123') ||
   ($user=='user@user.com' && $pass == 'user123')){
    $authent = true;
  };


  if($authent==true){
      $result = array("STATUS" => "true","message" => "Login successfully");
  }else{
      $result = array("STATUS" => "false", "message" => "Error");
  };
  echo json_encode($result);
});

$app->run();
