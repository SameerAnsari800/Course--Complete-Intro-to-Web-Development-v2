const A = 'A';
let F;
function doStuff(B) {
	console.log(B);
	const C = 'c';
	let H = 'h';
	if (1 + 1 === 2) {
		const D = 'd';
		H = 'Something else';
	}
	console.log(D);
	console.log(H);
	F = 'f';
}
let E = 0;
while (E < 3) {
	E++;
	console.log(A);
	const G = 'g';
}
console.log(E);
console.log(G);
doStuff('B');
console.log(B);
console.log(C);
console.log(F);
