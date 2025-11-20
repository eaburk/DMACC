<?PHP
  require_once __DIR__ . '/../../includes/dbConnect.php';

  $productId = $_POST["productId"] ?? '';
  $productName = $_POST['productName'] ?? '';
  $productPrice = $_POST['productPrice'] ?? '';

  try {
      $sql = "UPDATE products
              SET name = :name,
                  price = :price
              WHERE id = $productId";
      $stmt = $pdo->prepare($sql);
      $stmt->execute([
          ':name'  => $productName,
          ':price' => $productPrice
      ]);

      if($stmt->rowCount() == 0) {
        header("Location: update-product.php?message=Product Not Found");
      } else {
        header("Location: index.php?message=Product updated successfully!");
      }
  } catch (PDOException $e) {
      echo "<p>Error: " . $e->getMessage() . "</p>";
  }
?>