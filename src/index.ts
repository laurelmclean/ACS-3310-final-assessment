function ordinalSuffix(day: number): string {
    if (day === 11 || day === 12 || day === 13) {
        return `${day}th`;
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
        case 1:
            return `${day}st`;
        case 2:
            return `${day}nd`;
        case 3:
            return `${day}rd`;
        default:
            return `${day}th`;
    }
}

console.log(ordinalSuffix(1))    // 'st' -> 1st
console.log(ordinalSuffix(2))    // 'nd' -> 2nd
console.log(ordinalSuffix(3))    // 'rd' -> 3rd
console.log(ordinalSuffix(4))    // 'th' -> 4th
console.log(ordinalSuffix(11))   // 'th' -> 11th
console.log(ordinalSuffix(502))  // 'nd' -> 502nd
console.log(ordinalSuffix(1001)) // 'st' -> 1001st
console.log(ordinalSuffix(433)) // 'rd' -> 433rd

module.exports.ordinalSuffix = ordinalSuffix;