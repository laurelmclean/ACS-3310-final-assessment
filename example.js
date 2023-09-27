const { ordinalSuffix } = require('ordinal-suffix-lib');

function printNumbers() {
    for (let index = 1; index <= 100; index++) {
        console.log(ordinalSuffix(index))
    }
}

printNumbers();