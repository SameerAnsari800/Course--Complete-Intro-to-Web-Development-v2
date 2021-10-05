const otherThink = "something";  // global scope is basically like the mosyt root scope that exists 
function addFive(number) {
     console.log(otherThink);
    const someVarable = "you can't see me";
    return number + 5;
}
console.log(addFive(10));
