<?php
  function getSkills() {
    return ["PHP", "HTML", "JavaScript"];
  }

  $skills = getSkills();

  function greetUser($name) {
    return "Welcome, $name!";
  }

  function displayDateAndTime() {
    return date("H");
  }

  function addNumbers($a, $b) {
    return $a + $b;
  }
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Functions Exercise</title>
</head>
<body>
  <h1>PHP Functions Practice</h1>

  <h2><?php echo greetUser("Eric!"); ?></h2>
  <h2><?php echo displayDateAndTime(); ?></h2>
  <p>
    <?php
      $num1 = 3;
      $num2 = 5;
    ?>
    The result of adding <?= "$num1 and $num2"; ?> is: <?= addNumbers($num1, $num2); ?>
  </p>

  <?php
    $courseName = "WDV341";

    function showCourse(){
      global $courseName;
      echo "<p>$courseName</p>";
    }
  ?>

  <div id="skillsContainer"></div>

  <script>
    let skills = [
      <?php
        for ($i = 0; $i < count($skills); $i++) {
          echo "'" . $skills[$i] . "'";
          // Add a comma unless it's the last item
          if ($i < count($skills) - 1) {
            echo ", ";
          }
        }
      ?>
    ];
    console.log(skills); // Check in console


    const skillsContainer = document.getElementById("skillsContainer");

    let list = "<ul>";
    for (let i = 0; i < skills.length; i++) {
      list += `<li>${skills[i]}</li>`;
    }
    list += "</ul>";

    skillsContainer.innerHTML = list;
  </script>
</body>
</html>


<!--

Task 1: Create a Greeting Function (10 min)

Write a function called greetUser that accepts one parameter: $name.

The function should return a greeting string:
"Welcome, $name!"

Call the function and echo the result inside an <h2> tag.



Task 2: Use Built-In PHP Functions (10 min)

Write a function called displayDateTime that returns today’s date and current time.

Use PHP’s built-in date()
Call the function and display the result in an <h2> tag



Task 3: Add Two Numbers with Parameters (10 min)

Write a function called addNumbers that accepts two parameters.

Inside the function, add the numbers and return the result.

Use two variables $num1 and $num2 and pass them as arguments.

Display the result inside a <p> tag.



Task 4: Practice Variable Scope (5–7 min)

Create a global variable called $courseName = "WDV341 PHP Functions".

Write a function called showCourse that uses the global variable.

Inside the function, use the global keyword to access $courseName.

Echo the course name inside a <p> tag.



Task 5: Pass PHP Data to JavaScript (10 min)

Create a PHP array called $skills containing "PHP", "HTML", and "JavaScript".

Use json_encode()


Stretch Goal (Optional, if Time Allows)

Create a function called formatName that:

Accepts a first name and last name

Uses the built-in PHP function strtoupper() to make the last name uppercase

Returns a formatted full name



Task 5: Forms
<h2>Submit Your Favorite Skill</h2>

<form method="POST" action="">
    <label for="favoriteSkill">Favorite Skill:</label>
    <input type="text" name="favoriteSkill" id="favoriteSkill" required>
    <button type="submit">Submit</button>
</form>

<?php
// Function to process form submission
// function displayFavoriteSkill($skill) {
//     return "Your favorite skill is: " . htmlspecialchars($skill);
// }

// Check if form was submitted
// if ($_SERVER["REQUEST_METHOD"] === "POST" && !empty($_POST['favoriteSkill'])) {
//     $submittedSkill = $_POST['favoriteSkill'];
//     echo "<p>" . displayFavoriteSkill($submittedSkill) . "</p>";
// }
?>

Explanation for Students

Form Basics:

method="POST" sends data to the same page.

action="" ensures it posts to the same script.

Processing with a Function:

displayFavoriteSkill() accepts the input and formats the message.

Using a function keeps code reusable and modular.

Accessing Form Data:

$_POST['favoriteSkill'] retrieves the value.

htmlspecialchars() prevents XSS by escaping special characters.

Conditional Processing:

Only process when the form is submitted and the field isn’t empty.

What Students Will Learn

Creating a basic HTML form.

Using PHP functions to process input.

Working with superglobals like $_POST.

Conditional logic to check form submission.

Sanitizing output with htmlspecialchars().
-->
