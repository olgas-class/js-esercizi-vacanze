const animals = [
  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
  { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
  { nome: "lucertola", famiglia: "lacertilia", classe: "rettili" },
];

// Soluzione ES6
const mammiferi = animals.filter((animal) => animal.classe === "mammiferi");
console.log(mammiferi);

// Soluzione con for
const newMammiferi = [];
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  if (animal.classe === "mammiferi") {
    newMammiferi.push(animal);
  }
}

console.log(newMammiferi);
