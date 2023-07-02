
const person={
    name: "atul",
    age: 23,
    work: "se"
}

const allData={
    ...person,
    name: "sajjan"
}
console.log("this is the person data:- ", person);
console.log("this is the modified data", allData);

// output:-
//   this is the person data:-  { name: 'atul', age: 23, work: 'se' }
// this is the modified data { name: 'sajjan', age: 23, work: 'se' }
