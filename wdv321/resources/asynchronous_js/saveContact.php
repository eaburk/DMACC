<?php
  header("Content-Type: application/json");

  echo json_encode([
    "name" => $_POST["name"] ?? "Anonymous";
    "email" => $_POST["email"] ?? "(none)";
  ]);
?>