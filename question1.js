//Question:- check the age of user for driving and ask the same question again and again to user until user click on the cancel. do this this using
//prompt, confirm and alert methods.
const func = () =>{
    let age = prompt("enter you age");
    age = Number.parseInt(age);
    if(age>18){
        alert("you can drive");
    }
    else if(age < 5){
        console.error("age can't be less then 5");
        forWhile = false;
    }
    else{
        alert("you can't drive just go home");
    }    
}
let forWhile = true;
func();

while(forWhile){
    let b = confirm("do you want to give the answer again?");
    if(b){
        func();
    }
    else{
        forWhile = b;
    }
}

// to see the o/p just run this code in console.
