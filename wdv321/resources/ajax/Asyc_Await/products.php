<?php
  $product = new stdClass();
  $product->id = 1;
  $product->name = "Carrot Peeler";

  $products[] = $product;

  $product = new stdClass();
  $product->id = 2;
  $product->name = "Potato Peeler";

  $products[] = $product;

  echo json_encode($products);
?>