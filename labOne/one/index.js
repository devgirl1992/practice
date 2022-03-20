
//Iteration 1: Names and Input
let hacker1 = "wilhewlm";
console.log(`the driver's name is ${hacker1}`);

let hacker2 = "john";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
const x = hacker1.length;
const y = hacker2.length;

if (x > y) {
  console.log(`The driver has the longest name, it has ${x} characters.`)
} else if (x < y) {
  console.log(`It seems that the navigator has the longest name, it has ${y} characters.`)
} else {
  console.log(`Wow, you both got equally long names, ${x} characters!`)
}

//Iteration 3: Loops
console.log(hacker1.split(''));
console.log(hacker1.split('').join(' '));
console.log(hacker1.split('').join(' ').toUpperCase());
// console.log(hacker1.split('').sort((a, b) => a > b ? 1 : -1).join(' ').toUpperCase());

console.log(hacker1.split('').reverse().join(' '));

// console.log(hacker1.split('').sort((a, b) => a > b ? 1 : -1).join(' ').toUpperCase());



// console.log([...hacker1]);
// console.log(Array.from(hacker1));
// console.log(Object.assign([], hacker1));

if (hacker1 < hacker2) {
  console.log(`The ${hacker1} goes first`)
} else if (hacker1 > hacker2) {
  console.log(`${hacker2} goes first`)
} else {
  console.log('What?! You both have the same name?')
}

//Bonus Time!
//bonus 1
let prg = "Lorem ipsumet dolor sit amet, consectetur adipiscing elit. Vivamus viverraet lorem ut quam viverra fringilla. Sed lacinia congue justo, convallis fringetilla nisl efficitur posuere. Duis in placetrat felis."
// console.log(prg.split(" "));
const numprg = prg.split(" ");
console.log(numprg.length);

const countet = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] !== char){
      continue
    }else {
      count++
    };
  };
  return count;
}
console.log(countet(prg, "et"));

//Bonus 2





















































