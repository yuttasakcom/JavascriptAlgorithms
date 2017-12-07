// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split("").reverse().join("")
// }

function reverse(str) {
    let reversed = ''
    for (let characters of str) {
        reversed = characters + reversed
        debugger
    }
    return reversed
}

reverse('fedcba')
// function reverse(str) {
//     return str.split('').reduce((reversed, charecter) => charecter + reversed, '')
// }

module.exports = reverse;
