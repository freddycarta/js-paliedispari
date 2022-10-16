console.log('ok')

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
