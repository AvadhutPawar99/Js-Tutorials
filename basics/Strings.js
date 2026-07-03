const name = "Aviraj "
const repoCount = 90

// console.log(name + repoCount + " How?");

console.log(`Hello Public My name is ${name} and my Homies are ${repoCount}`);


const gameName = new String("Aviraj PAwar")

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("j"));

const newString = gameName.substring(0, 5)

console.log(newString);

const anotherString = gameName.slice(-8 , 6)

console.log(anotherString);

const String01 = "     Avinash    "

console.log(String01);
console.log(String01.trim);

const url = "https://Aviraj.com/Aviraj%20Pawar"

console.log(url.replace('%20', '-'));

const newUrl = url.replace('%20', '=')

console.log(newUrl);

console.log(url.includes("Avi"));

console.log(gameName.split(' '));
