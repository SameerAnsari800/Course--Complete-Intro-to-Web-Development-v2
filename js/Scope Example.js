const A = 'A';
let F;
function doStuff(B) {
	console.log(B);
	const C = 'c';
	let H = 'H';
	if (1 + 1 === 2) {
		const D = 'd';
		H = 'somethink else';
		console.log(D);
		console.log(H);
	}
	F = 'f';
	console.log(C);
}
let E = 0;
while (E < 3) {
	E++;
	console.log(A);
	var G = 'g';
	//console.log(G);
}
console.log(E);
doStuff('b');
console.log(F);
console.log(G);
