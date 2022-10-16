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

// Pari e dispari

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

