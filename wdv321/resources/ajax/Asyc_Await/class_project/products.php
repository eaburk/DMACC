<?php
  header("Content-Type: application/json");

  echo json_encode([
    "name" => $_POST["name"],
    "email" => $_POST["email"]
  ]);
?>