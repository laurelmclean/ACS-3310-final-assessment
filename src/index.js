function ordinalSuffix(day) {
    if (day === 11 || day === 12 || day === 13) {
        return "".concat(day, "th");
    }
    var lastDigit = day % 10;
    switch (lastDigit) {
        case 1:
            return "".concat(day, "st");
        case 2:
            return "".concat(day, "nd");
        case 3:
            return "".concat(day, "rd");
        default:
            return "".concat(day, "th");
    }
}
module.exports.ordinalSuffix = ordinalSuffix;
