// 1. GLOBAL variable (accessible anywhere)
let appName = "Greeting App";

// 2. A function with PARAMETERS + RETURN
function getFullName(first, last) {
  // LOCAL variable (only exists inside this function)
  let fullName = first + " " + last;  // Concatenation example
  return fullName;
}

// 3. Function triggered by EVENT HANDLER
function displayGreeting() {
  // Grab input values from the page
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;

  // Pass values as ARGUMENTS into getFullName()
  let userName = getFullName(first, last);

  // Use returned value + global variable in output
  // method chaining / property chaining
  document.getElementById("greetingMessage").innerHTML = "Hello, " + userName + "! Welcome to the " + appName + ".";
}

// Step 5 — Wrap-Up Discussion

// At the end, ask students:

// What’s the difference between parameters and arguments?

// Why use a return instead of printing inside the function?

// Why would we prefer to store functions in an external JS file?

// When would you use local vs. global variables?

// How does string concatenation behave differently with numbers vs. strings?


// | **Concept**       | **Demo in Code**                           | **Talking Point**                                    |
// | ----------------- | ------------------------------------------ | ---------------------------------------------------- |
// | **Functions**     | `function getFullName(first, last)`        | A block of code that performs a task                 |
// | **Parameters**    | `(first, last)`                            | Variables the function expects to receive            |
// | **Arguments**     | `getFullName(first, last)`                 | Actual values we send into the function              |
// | **Return**        | `return fullName;`                         | Sends data back to where the function was called     |
// | **Local Scope**   | `fullName` only exists inside the function | Can't access it outside                              |
// | **Global Scope**  | `appName` works anywhere in the file       | Demonstrates global usage                            |
// | **Event Handler** | `onclick="displayGreeting()"`              | Function is called when button is clicked            |
// | **Concatenation** | `"Hello, " + userName`                     | Combines strings into one message                    |
// | **External JS**   | `<script src="functions.js"></script>`     | Functions can live in their own file for reusability |

