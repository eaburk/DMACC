<?php
  require 'models/User.php';

  $name = $_GET['name'] ?? 'Guest';
  $user = new User($name);

  require 'views/greeting.php';
?>