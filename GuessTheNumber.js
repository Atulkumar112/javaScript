let val = 69;
let num = prompt("Guesss the number:- ");
let b = true;

while(b){
    if(num == val){
        b = false;
        alert("You won!");
    }
    else if(num < val){
        alert("you guess small number, please try again.");
        num = prompt("Guesss the number again:- ");
    }
    else if(num > val){
        alert("you guess bigger number, please try again.");
        num = prompt("Guesss the number again:- ");
    }
}
