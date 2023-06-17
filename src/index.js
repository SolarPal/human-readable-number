module.exports = function toReadable (number) {
	const uniqueNames = new Map([
		[0, "zero"], [1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"], [10, "ten"],
		[11, "eleven"], [12, "twelve"], [13, "thirteen"], [14, "fourteen"], [15, "fifteen"], [16, "sixteen"], [17, "seventeen"], [18, "eighteen"], [19, "nineteen"],
		[20, "twenty"], [30, "thirty"], [40, "forty"], [50, "fifty"], [60, "sixty"], [70, "seventy"], [80, "eighty"], [90, "ninety"]
	]);
	
	let a = Array.from(number.toString());
	
	if (a.length == 1) {
		return uniqueNames.get(Number(a[0]));
	} else if (a.length == 2) {
		if (a[0] == "1" || a[1] == "0") {
			return uniqueNames.get(Number(a[0] + a[1]));
		} else {
			return uniqueNames.get(Number(a[0] + "0")) + " " + uniqueNames.get(Number(a[1]));
		}
	} else if (a.length == 3) {
		console.log(a);
		if (Number(a[0] + a[1] + a[2]) % 100 == 0) {
			return uniqueNames.get(Number(a[0])) + " hundred";
		} else if (a[1] == "1" || a[2] == "0") {
			return uniqueNames.get(Number(a[0])) + " hundred " + uniqueNames.get(Number(a[1] + a[2]));
		} else if (a[1] == "0" && a[2] != "0") {
			return uniqueNames.get(Number(a[0])) + " hundred " + uniqueNames.get(Number(a[2]));
		} else {
			return uniqueNames.get(Number(a[0])) + " hundred " + uniqueNames.get(Number(a[1] + "0")) + " " + uniqueNames.get(Number(a[2]));
		}
	}
}
