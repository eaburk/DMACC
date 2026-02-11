<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $tmp_name = $_FILES["userFile"]["tmp_name"];
    $name = basename($_FILES["userFile"]["name"]);
    move_uploaded_file($tmp_name, "uploads/$name");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form method="post" enctype="multipart/form-data">
    <label for="fileUpload">Choose a file:</label>
    <input name="userFile" type="file">
    <br>
    <input type="submit" name="submit" value="Upload Image">
  </form>

  <?php
    if(file_exists("uploads/koalas.jpg")) {
  ?>
    The file you uploaded:<br>
    <img src="uploads/koalas.jpg" width="200" height="200">
  <?php
    }
  ?>
</body>
</html>