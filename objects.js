// OGGETTI IN JS
// un oggetto è una "collezione" di proprietà appartenenti alla stessa entità, ovvero un insieme di proprietà
// che ha senso racchiudere in un solo "corpo", perchè fanno parte della stessa "cosa"
// se diversi valori fanno parte di una stessa entità, ha senso raggrupparli in un oggetto!

const obj = {}
// questo è un oggetto vuoto

const comedian = {
  // un oggetto è una lista potenzialmente infinita di coppie chiave/valore
  firstName: 'Giovanni',
  lastName: 'Storti',
  age: 66,
  gender: 'male',
  partOfOriginalDuo: true,
  location: {
    city: 'Milano',
    region: 'Lombardia',
  },
  'name-of-the-trio': 'Aldo, Giovanni e Giacomo',
}

// una singola coppia chiave/valore di un oggetto è detta PROPRIETÀ

// LETTURA PROPRIETÀ
// come si può accedere ad una proprietà di comedian?
// 2 metodi:

// 1) DOT NOTATION
console.log(comedian.age) // 66
console.log(comedian.lastName) // 'Storti'
let comedianString =
  comedian.firstName +
  ' ' +
  comedian.lastName +
  ' ha ' +
  comedian.age +
  ' anni e vive a ' +
  comedian.location.city

console.log(comedianString)

// 2) SQUARE BRACKETS NOTATION
// console.log(comedian.name-of-the-trio) <-- :( non funziona!
console.log(comedian['name-of-the-trio']) // 'Aldo, Giovanni e Giacomo'
console.log(comedian['gender'])

// MODIFICA PROPRIETÀ
comedian.firstName = 'Giacomo'
comedian.lastName = 'Poretti'
comedian.age = 67
comedian.partOfOriginalDuo = false

// NUOVA PROPRIETÀ DEFINITA DOPO LA CREAZIONE DELL'OGGETTO
comedian.mostPopularCharacter = 'Tafazzi'

// ELIMINARE UNA PROPRIETÀ DOPO LA CREAZIONE DELL'OGGETTO
delete comedian.gender // eliminata la proprietà "gender"

// risultato dopo le operazioni
console.log(comedian)

console.log(comedian.hairColor) // undefined, perchè la proprietà hairColor non esiste nell'oggetto!

// PICCOLO TRANELLO :)

let a = 5
let b = a
b = 10

// quanto vale a? vale 5!
console.log(a) // 5

const objA = {
  name: 'Stefano',
}

const objB = objA

objB.name = 'Mario'

// qual è il valore di name in objA?
console.log(objA.name) // 'Mario'

// come faccio effettivamente a creare un oggetto "separato" e indipendente da objA?

const objC = {
  name: 'Stefano',
}

// Object.assign() crea effettivamente un "clone" di objC e lo chiama objD
const objD = Object.assign({}, objC)

objC.name = 'Mario'

console.log(objD.name) // 'Stefano'
