const people = [
  {
    name: "Pippo",
    lastName: "Rossi",
    age: 16
  },
  {
    name: "Pluto",
    lastName: "Bianchi",
    age: 23
  },
  {
    name: "Paperino",
    lastName: "Bruni",
    age: 12
  }
];

// Soluzione ES6
const newPeopleES6 = people.map(person => {
  const description = `${person.name} ${person.lastName}: ${person.age >= 18 ? 'può guidare' : 'non può ancora guidare'}`;
  return {...person, description};
});

console.log(newPeopleES6);

// Soluzione senza ES6
const newPeople = [];
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const description = `${person.name} ${person.lastName}: ${person.age >= 18 ? 'può guidare' : 'non può ancora guidare'}`;
  // Qui creo un nuovo oggetto e lo pusho nell'array risultante
  newPeople.push({
    name: person.name,
    lastName: person.lastName,
    age: person.age,
    description: description
  })
}

console.log(newPeople);