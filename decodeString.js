// Write your code below this line
const decoder = str => {
    str = str.toLowerCase();
    let num = +(str[0]);
    let decoded = [];
    for (let i = 1; i < str.length; i++) {
        let charCode = str[i].charCodeAt() + num
        if (charCode > 122) {
            charCode = 96 + (charCode - 122)
            decoded.push(String.fromCharCode(charCode))
        } else decoded.push(String.fromCharCode(charCode))
    }       
    return decoded.join('')
}

console.log(decoder('1a'));
console.log(decoder('3ce'));
console.log(decoder('2fcjjm'));
