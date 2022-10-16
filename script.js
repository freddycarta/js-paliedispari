console.log('ok')
// PALINDROMO
function isPalindrome (parola) {
    const parolainvertita = invertiParola(parola)

    return parola === parolainvertita
}

function invertiParola(testo) {
    const caratteriDiparola = testo.split('')
    // console.log(caratteriDiparola)
    const caratteriInvertiti = caratteriDiparola.reverse()
    // console.log(caratteriInvertiti)
    const parolainvertita = caratteriInvertiti.join('')
    // console.log(parolainvertita)

    return parolainvertita
}


console.log(isPalindrome('anna'))

// PARI E DISPARI

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

function isEven(num) {
    return num % 2 === 0
}

function isOdd(num) {
    return !isEven(num)
}


const scelta = prompt('scegli "pari o "dispari"')
// console.log (scelta) 
const numeroUtente = parseInt (prompt('scrivi un numero da 1 a 5'))
// console.log (numeroUtente)
const numeroPC = getRandomIntInclusive(1, 5)
// console.log(numeroPC)

const somma = numeroPC + numeroUtente

console.log(somma, scelta)

if( (scelta === 'pari' && isEven(somma)) ||
 (scelta === 'dispari' && isOdd(somma))) {
console.log('hai vinto')
} else {
    console.log('hai perso')
}


