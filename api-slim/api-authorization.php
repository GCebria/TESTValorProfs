<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();


$app->post("/authorization", function() use($app){

  $user = $app->request->post("user");

  $validUser = FALSE;
  $admin = FALSE;
  if(strpos($user, '@admin.com')!==FALSE){
    $admin = TRUE;
  };

  if(($user=='admin@admin.com') || ($user=='user@user.com')){
    $validUser = TRUE;
  };

  if($validUser){
    if($admin == true){
      $result = array("STATUS" => "true", "admin" => $admin, "message" => "User exists");
    }else{
      $result = array("STATUS" => "true", "admin" => $admin, "message" => "User exists");
    }
  }else{
      $result = array("STATUS" => "false", "message" => "Error");
  }
  echo json_encode($result);
});

$app->run();
