// BLOCCO IF: LOGICA CONDIZIONALE

// un blocco "if" è composto da 2 parti: una condizione, e un "body"

// if(condizione) {
//      codice da eseguire
// }

// Il codice tra graffe verrà eseguito SOLAMENTE se la condizione verrà valutata TRUE

const myName = 'Mario'
const examResult = 15

if (examResult >= 18) {
  console.log("Complimenti, hai passato l'esame")
}

if (examResult >= 18 || myName === 'Mario') {
  // false || true <-- true
  console.log("Complimenti, hai passato l'esame")
}

// la condizione dentro l'if può essere lunga, complessa ma alla fine si risolverà sempre con un true o con un false
// gli operatori sono sempre quelli, < <= > >= === !== collegati volendo con ! && ||

// IF/ELSE
// Il blocco "else" fornisce del codice alternativo da eseguire qualora la condizione del nostro if sia FALSA

const eyeColor = 'green'

console.log("eyeColor === 'azure', ma i miei sono verdi")
if (eyeColor === 'azure') {
  console.log('Che belli gli occhi azzurri!')
} else {
  console.log('Vabbè dai, ti si vuole bene lo stesso!')
}

// ELSE IF
// È possibile concatenare successive condizioni alla prima, in modo da meglio diramare i binari della nostra applicazione,
// utilizzando un ulteriore if all'interno all'else

const myHeight = 172

if (myHeight > 180) {
  console.log('wow, sei bello/a alto/a!')
} else if (myHeight > 170) {
  console.log('vabbè, non sei altissimo')
} else {
  // si cade qui dentro solamente se non si è più alti di 180 e contemporaneamente non si è più alti di 170
  console.log('il vino buono sta nella botte piccola!')
}

// TRUTHY / FALSY
let firstName = 'Mario'

if (firstName) {
  console.log('ciao!') // il console.log appare perchè 'Mario' è un valore esistente e si risolve in un booleano "truthy"
}
