// JS RECAP!

// TIPI DI DATO IN JS
// string --> 'Stefano'
// number --> 56.6
// boolean --> true
// undefined
// null

let dog = 'Pluto' // creazione e assegnazione di un valore ('Pluto') ad una variabile chiamata dog
dog = 'Fido' // poichè abbiamo utilizzato la parola "let" per la sua dichiarazione, la variabile può venire riassegnata
// ad un nuovo valore successivamente. ATTENZIONE: cerchiamo di NON cambiare il tipo del dato

const cat = 'Tom' // const crea una "costante", ovvero un tipo speciale di variabile che NON È riassegnabile ad un nuovo valore
// successivamente
// cat = 'Silvestro' // <-- è un errore! JS bloccherebbe l'esecuzione dello script

// operatori matematici
// + - * / %
console.log(22 % 5) // torna il RESTO della divisione

let pierPaolo
// pierPaolo qui è undefined!

// operatori logici
// < <= > >= === !==

// (3 < 5) <-- true
// (3 <= 5) <-- true
// (2 >= 6) <-- false
// (6 === 6) <-- true
// (5 !== 7) <-- true

let myName = 'Stefano'

// myName = 'Giovanni'

// AND e OR
// && <-- AND, concatena due o più condizioni in un'unica espressione, la cui veridicità sarà confermata
// solamente se TUTTE le condizioni collegate sono true.
// ((3 < 5) && (myName === 'Stefano')) <-- true && true <-- risultato finale: true
// ((5 > 10) && (myName === 'Stefano')) <-- false && true <-- risultato finale: false

// es. e-shop --> (nuovoCliente === true && haIlCoupon === true) <-- gli do lo sconto!

// || <-- OR, concatena due o più condizioni in un'unica espressione, la cui veridicità sarà confermata
// anche se solamente UNA delle condizioni collegate è true.
// ((3 < 5) || (myName === 'Stefano')) <-- true || true <-- risultato finale: true
// ((5 > 10) || (myName === 'Stefano')) <-- false || true <-- risultato finale: true
// ((5 > 10) || (myName === 'Giovanni')) <-- false || false <-- risultato finale: false

// NOT
// ! <-- NOT, inverte il risultato di un'espressione: una cosa false diventerebbe true, e viceversa.

// ((5 > 10) || (myName === 'Giovanni')) <-- false || false <-- risultato finale: false
// !((5 > 10) || (myName === 'Giovanni')) <-- !(false || false) <-- risultato finale: true
// !((3 < 5) && (myName === 'Stefano')) <-- !(true && true) <-- risultato finale: false
// !true <-- false

// TERNARY OPERATOR
// È una metodologia di assegnazione di un valore secondo una condizione. Sintassi: condizione ? si : no

// voglio assegnare un valore true/false
let isMyNameStefano = myName === 'Stefano' ? true : false
// isMyNameStefano ora ha il valore di true

let drivingLicense = 'B'

let whichVehiclesCanIDrive = drivingLicense === 'A' ? 'Motorcycles' : 'Cars'
// la variabile ha assunto il valore di "Cars"

// let variabileDaAssegnare = condizione ? valoreInCasoDiTrue : valoreInCasoDiFalse
console.log(whichVehiclesCanIDrive)

let newUser = false
let ordersInTheLastYear = 5

// discount può avere 3 valori: '10%', '5%', '0%'

// prettier-ignore
let discount =
    newUser
        ? '10%'
        : ordersInTheLastYear >= 3
            ? '5%'
            : '0%'

console.log(discount)
