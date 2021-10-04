function addFive(number) {
    const someVarable = "you can't see me outside this function";
    console.log(someVarable);                   //its work because its in scope  ,its exist ,it work 
	return number + 5;
}

// addFive(10);                                      //its not direct  work 
console.log(addFive(10));
// console.log(someVarable);             // error because now this is whats called out of scope 