<?php
  $submitted_name = isset($_POST['student_name']) ? htmlspecialchars($_POST['student_name']) : null;
  $submitted_type = isset($_POST['student_type']) ? $_POST['student_type'] : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forms Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
    }

    .container {
      width: 50%;
      margin: 50px auto;
      background-color: #fff;
      padding: 50px;
      border-radius: 8px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    }

    h1, h2 {
      text-align: center;
      color: #333;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    input[type="text"] {
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .radio-group {
      margin-top: 5px;
    }

    input[type="submit"] {
      background-color: #350fe0;;
      color: white;
      padding: 10px;
      font-size: 1em;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #3f22be;
    }

    .success {
      text-align: center;
      padding: 20px;
      background-color: #ceffce;
      border: 1px solid #00b7ff;
      border-radius: 8px;
      color: #350fe0;
      font-size: 1.1em;
    }

    input[type="text"],
    select {
        width: 100%;
        padding: 8px 10px;
        margin-top: 6px;
        border: 1px solid #bbb;
        border-radius: 6px;
        font-size: 14px;
        background-color: #fdfdfd;
    }
    textarea {
      border: 1px solid #bbb;
      border-radius: 6px;
    }

    table {
      margin: auto;
      text-align: left;
    }

    table tr td:first-child {
      text-align: right;
    }

    table td {
      padding: 0 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <?php
      if(isset($_POST['submit'])) {
    ?>
      <div class="success">
        <h2>Form Processed Successfully!</h2>
        <p>Thank you, <strong><?= $submitted_name ?></strong>!</p>
        <p>The information you submitted is below:</p>
        <table>
          <tr>
            <td>Name:</td>
            <td><?= htmlspecialchars($submitted_name) ?></td>
          </tr>
          <tr>
            <td>Student Type:</td>
            <td><?= htmlspecialchars($submitted_type) ?></td>
          </tr>
          <tr>
            <td>Courses:</td>
            <td><?= implode(", ", $submitted_courses) ?></td>
          </tr>
          <tr>
            <td>Major:</td>
            <td><?= htmlspecialchars($submitted_major) ?></td>
          </tr>
          <tr>
            <td>Comments:</td>
            <td><?= $submitted_comments ?></td>
          </tr>
        </table>
      </div>
    <?php
      } else {
    ?>
      <h1>Enter Student Information</h1>
      <form method="post" action="">
        <!-- Text Input -->
        <div>
          <label for="student_name">Student Name:</label>
          <input type="text" name="student_name" id="student_name" value="<?= $submitted_name ?>" required />
        </div>

        <div>
          <!-- Radio Buttons -->
          <label>Student Type:</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="student_type" value="virtual" /> Virtual
            </label>
            <label>
              <input type="radio" name="student_type" value="on_campus" /> On Campus
            </label>
          </div>
        </div>



        <!-- Submit button -->
        <input type="submit" name="submit" value="Submit Student Information" />
      </form>
    <?php
      }
    ?>
  </div>
</body>
</html>