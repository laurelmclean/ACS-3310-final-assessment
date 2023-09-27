# `ordinalSuffix` Function

The `ordinalSuffix` function is a utility function that takes a numeric input and returns its ordinal suffix (e.g., "st" for 1, "nd" for 2, "rd" for 3, and "th" for all other numbers).

## Usage

```javascript
const { ordinalSuffix } = require('./ordinalSuffix');

console.log(ordinalSuffix(1));    // 'st' -> 1st
console.log(ordinalSuffix(2));    // 'nd' -> 2nd
console.log(ordinalSuffix(3));    // 'rd' -> 3rd
console.log(ordinalSuffix(4));    // 'th' -> 4th
console.log(ordinalSuffix(11));   // 'th' -> 11th
console.log(ordinalSuffix(502));  // 'nd' -> 502nd
console.log(ordinalSuffix(1001)); // 'st' -> 1001st
console.log(ordinalSuffix(433));  // 'rd' -> 433rd
```

## Installation

1. Copy the `ordinalSuffix` function into your project.
2. Use it as shown in the usage examples above.
