// ARRAY IN JS
// un array è una collezione (lista) di valori

const names = ['stefano', 'bianca', 'domenico', 'isuru']
const numbers = [5, 67.8, 100, 1004.56]
const booleans = [true, true, false, true]

const mixed = [20, 'ciao', true] // non è molto utile...

const people = [
  {
    name: 'Stefano',
  },
  {
    name: 'Laura',
    skills: ['HTML', 'CSS'],
  },
  {
    name: 'Cristina',
  },
]

// per accedere ad un elemento in un array l'unico "appiglio" che abbiamo è la sua POSIZIONE all'interno dell'array
// gli array in JS sono zero-indexed (si parte a contare da ZERO)

// "stefano" è il primo elemento dell'array names --> ha indice 0
// "bianca" è il secondo elemento dell'array names --> ha indice 1
// "domenico" è il terzo elemento dell'array names --> ha indice 2

// per accedere ad un elemento specifico di un array si utilizza la notazione nomeArray[indice]
numbers[2] // 100
people[1].name // 'Laura'
people[1].skills[1] // 'CSS' // people[1]['skills'][1] :))

// LUNGHEZZA (length)
// OGNI array ha una LUNGHEZZA, ovvero un numero che è pari al numero di elementi contenuti
people.length // 3
names.length // 4

// per accedere al PRIMO elemento di un array si cerca sempre la posizione 0
numbers[0] // 5, il primo elemento di numbers

// per accedere all'ULTIMO elemento di un array possiamo sfruttare la sua lunghezza, in quanto l'ultimo indice valido
// sarà sempre [length - 1]
numbers[numbers.length - 1] // ultimo elemento di numbers, 1004.56

// AGGIUNGIAMO UN ELEMENTO IN CODA ALL'ARRAY
const fruits = ['banana', 'apple', 'orange', 'peach']

fruits.push('watermelon') // push inserisce un nuovo elemento nell'array, in ultima posizione
console.log(fruits)
console.log(fruits[4]) // quinto elemento, che all'inizio non c'era

// RIMUOVE L'ULTIMO ELEMENTO DI UN ARRAY
fruits.pop() // elimina dall'array watermelon
console.log(fruits)

// RIMUOVERE UN ELEMENTO DA UNA SPECIFICA POSIZIONE
// delete fruits[0] // non accorcia l'array dopo l'eliminazione :(
fruits.splice(0, 1) // due valori per splice: il punto di partenza, e il numero di elementi da eliminare
console.log(fruits) // banana :'(
