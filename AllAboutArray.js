//sorting in array
let arr = [8,3,03,251,435,90];
const compare = (a, b) => {
    return a-b;
}

console.log(arr.sort());
console.log(arr.sort(compare));

output:- [251, 3, 3, 435, 8, 90]
output:- [3, 3, 8, 90, 251, 435]

arr.forEach((el) =>{
    console.log(el);
})
