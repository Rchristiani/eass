function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function limit(amount,arr) {
	const newArray = [];
	for(let i = 0; i < amount; i++) {
		newArray.push(random(arr));
	}
	return newArray;
}
module.exports = { random, limit }