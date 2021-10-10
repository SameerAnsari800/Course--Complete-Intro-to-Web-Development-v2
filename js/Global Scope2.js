let globalVAr = 'unchange';
function addFive(number) {
	globalVAr = 'change';
	return number + 10;
}
console.log(
	globalVAr
); /* agar ham globalvar ko addfive ke uper likhenge toh toh dono me unchange hi aaega lekin agar hum ek 
                                                        globalvar ko addfive ke uper likhenge or ek globalvar ko addfive ke niche likhenge toh uper wale me toh 'unchange' aaega but niche 
                                                        wale me 'change' aaega kyu ki niche wale globalvar ko addfive function ke ander defined kiya gya hai isiliye  global scope most root scope that exists             like       console.log(globalVar);    console.log(globalVar);     console.log(addFive(20));     */

console.log(addFive(20));

console.log(globalVAr);

let friendsAtyourParty = 0;
for (let i = 0; i <= 10; i++) {
	friendsAtyourParty++;
}
console.log(i); // error because i is not defined
