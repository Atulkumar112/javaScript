//loop in object 
const obj = {
    "atul": 96,
    "sajjan": 92,
    "ashutosh": 95,
};
//object.keys is use to convert the js objct into the array.
console.log(Object.keys(obj).length);

for(let i=0; i< Object.keys(obj).length; i++){
    console.log("name are ",Object.keys(obj)[i] , "and their marks", obj[Object.keys(obj)[i]]);
}
