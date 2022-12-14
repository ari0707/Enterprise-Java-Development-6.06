//Iteration 1: Names and Input

let hacker1 = "Pablo";
console.log("The driver's name is", hacker1);

let hacker2 = "Antonio";
console.log("The navigator's name is", hacker2);

//Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
}else if (hacker2Length > hacker1Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}


//Iteration 3: Loops

//Print all the characters of the driver’s name, separated by a space and in capitals i.e.
let hacker1CaptilizedName = '';

for (let i = 0; i < hacker1.length; i += 1) {
  if (i === hacker1.length - 1) {
    hacker1CaptilizedName += `${hacker1[i].toUpperCase()}`;
    console.log(hacker1CaptilizedName);
  } else {
    hacker1CaptilizedName += `${hacker1[i].toUpperCase()} `;
    console.log(hacker1CaptilizedName);
  }
  
}

//Print all the characters of the navigator’s name, in reverse order. i.e.

let reverseName = newString = "";
for (let i = hacker1.length - 1; i >= 0; i--) { 
  newString += hacker1[i]; 
}
console.log(newString)