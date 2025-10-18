<?php
  //Fake data, pretend like it comes from the Database
  $students = [
    ["name" => "Eric", "degree" => "Web Developer", "location" => "Des Moines"],
    ["name" => "Jamie", "degree" => "Web Design", "location" => "Ankeny"],
    ["name" => "Alice", "degree" => "Web Developer", "location" => "Waukee"]
  ];

  $searchTerm = strtolower($_GET["q"]);
  $matches = [];

  foreach ($students as $student) {
    if (
      str_contains(strtolower($student['name']), $searchTerm) ||
      str_contains(strtolower($student['degree']), $searchTerm)
    ) {
      $matches[] = $student;
    }
  }

  echo json_encode($matches);
?>