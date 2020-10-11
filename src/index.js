module.exports = function toReadable(number) {
    let num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num10 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let humanNum = '';

    if (number >= 0 && number < 20) {
        humanNum = num1[number];
        return humanNum.trim();
    }
    if (number >= 20 && number < 100) {
        let numberStr = number.toString();
        if (number % 10 !== 0) {
            humanNum = `${num10[numberStr[0]]} ${num1[numberStr[1]]}`;
            return humanNum.trim().replace('  ', ' ');
        } else {
            humanNum = `${num10[numberStr[0]]}`;
            return humanNum.trim().replace('  ', ' ');
        }
    }

    if ((number > 109 && number < 120) || (number > 209 && number < 220) || (number > 309 && number < 320) || (number > 409 && number < 420) || (number > 509 && number < 520) || (number > 609 && number < 620) || (number > 709 && number < 720) || (number > 809 && number < 820) || (number > 909 && number < 920)) {
        let numberStr = number.toString();
        let numberDecNum = Number(numberStr[1] + numberStr[2]);
        humanNum = `${num1[numberStr[0]]} hundred ${num1[numberDecNum]}`;
        return humanNum.trim().replace('  ', ' ');

    }

    if (number >= 100 && number < 1000) {
        let numberStr = number.toString();
        if (number % 10 !== 0) {
            humanNum = `${num1[numberStr[0]]} hundred ${num10[numberStr[1]]} ${num1[numberStr[2]]}`;
            return humanNum.trim().replace('  ', ' ');
        } else {
            humanNum = `${num1[numberStr[0]]} hundred ${num10[numberStr[1]]}`;
            return humanNum.trim().replace('  ', ' ');
        }
    }
}
