const us = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|[3][01])\/([0-9]{1,4})$/

function americanToKoreanDateFormat(date) {
    const match = us.exec(date);
    
    if (!match) {
        return null;
    }

    let kr = `${match[3]}년 ${match[1]}월 ${match[2]}일`;

    const day = match[2];
    const month = match[1];

    if (day === '1' && month === '1') { kr += " (New Year's Day)"; }
    if (day === '1' && month === '3') { kr += " (Independence Movement Day)"; }
    if (day === '5' && month === '5') { kr += " (Children's Day)"; }
    if (day === '6' && month === '6') { kr += " (Memorial Day)"; }
    if (day === '17' && month === '7') { kr += " (Constitution Day)"; }
    if (day === '15' && month === '8') { kr += " (Liberation Day)"; }
    if (day === '3' && month === '10') { kr += " (National Foundation Day)"; }
    if (day === '9' && month === '10') { kr += " (Hangul Day)"; }
    if (day === '25' && month === '12') { kr += " (Christmas)"; }

    return kr;
}

console.log(americanToKoreanDateFormat('09/16/2014'));
console.log(americanToKoreanDateFormat('10/09/2014'));
console.log(americanToKoreanDateFormat('6/6/2006'));
console.log(americanToKoreanDateFormat('13/1/2000'));
console.log(americanToKoreanDateFormat('1/50/2000'));
console.log(americanToKoreanDateFormat('12/25/2024'));
console.log(americanToKoreanDateFormat('1/1/2025'))
