function mul(x, y) { 
    let num = x * y;
    let negative;

    if (num === 0) { return '0'; }
    if (num < 0) {
        negative = true;
        num = -num;
    }

    let digits = '0123456789ABC';
    let answer = '';

    while (num > 0) {
        let remainder = num % 13;
        num = Math.floor(num / 13);
        answer = digits[remainder] + answer;
    }
    if (negative) {
        answer = '-' + answer;
    }
    return answer;
}
