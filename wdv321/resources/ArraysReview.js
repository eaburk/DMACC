// Storage Arrays – Store multiple values
const myArray = ['apple', 'banana'];

// Index – Position of elements
const myArray[0] // index 0 = 'apple'

// Accumulator Arrays – Collect results over time
let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
	numbers[i] += 2; // add 2 to each occurrence of the array
}

// Lookup Arrays – Map keys to values
const fruits = ['apple', 'banana', 'watermelon'];
let counts = [2, 1, 3];
for(let i = 0; i < fruits.length; i++) {
  if(fruits[i] === 'banana') {
    console.log(`I found the banana in the fruits array and there are ${counts[i]}`)
  }
}

// Lookup Arrays using objects (the better way)
const fruits = [
  {
    name: 'apple',
    count: 2
  },
  {
    name: 'banana',
    count: 1
  },
  {
    name: 'watermelon',
    count: 3
  }
]
fruits.find(fruit => fruit?.name === 'apple')?.count; // 2

// additional research - how does .filter() work? How does it differ from .find()?
