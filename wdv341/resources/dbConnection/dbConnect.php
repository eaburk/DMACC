<?php
  $host = "localhost";
  $dbname = "wdv341";
  $username = "root";
  $password = "";

  try {
      //data source name, a string that tells PDO how to connect
      //  what driver to use (mysql pgsql etc)
      //  where the server is (host, port, socket)
      //  which database to use
      //  use UTF-8 encoding (ensure the data sent to/from server is interpreted correctly)
      //     for instance, utf8mb4 allows storing emoji characters in the database
      $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
      $pdo = new PDO($dsn, $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
  }
?>