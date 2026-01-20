Q: What does PHP stand for?

Task 1: Use both echo and print to output data
<?php
    // A PHP file must end with .php
?>
Q: Where can we place PHP tags on a webpage?

<p>This is plain HTML on the same page!</p>

<p>Task 2: Set and use variables for output</p>
<?php
    // Variables start with $
?>

Q: What is a constant variable?

Example:
<?php
  define("HELLO_WORLD", "Hello World!");
?>

Task 3: Demonstrate concatenation, combined and increments operators
<?php
    // Concatenation operator: .

    // Combined operator +=

    // Increment operator ++
?>

<p>Task 4: Integrate PHP + HTML</p>
<?php
    $title = "Welcome to PHP!";
    $description = "PHP can generate dynamic HTML content.";
?>
<!DOCTYPE html>
<html>
<head>
    <title><?php echo $title; ?></title>
</head>
<body>
    <h2><?php echo $title; ?></h2>
    <p><?php echo $description; ?></p>
</body>
</html>

Q: Which languages can PHP output?
Q: What happens to HTML inside a PHP page?

Q: What triggers PHP to run on the server?

<!-- Challenge Task!!! -->
Step 5 — Challenge Task

Create a Personal Profile page using PHP:

Requirements:

Note: This should contain all the HTML code for a proper webpage.

1. Create three variables: $name, $hobby, $favoriteColor

2. Create a constant for your school name.

3. Use echo or print to display:
   "Hi, my name is [name], I like [hobby], and my favorite color is [color]. I study at [school]."

4. Use concatenation at least once.

5. Use an increment operator to simulate adding 1 year to your age.