const fullName = "Luke Lynch";
let age = 20;
const birthday = "May 29";
const detroitGC = false;
const lifeEvents = [
  "I was born in Grand Blanc",
  "I went to Ireland",
  "I graduated from Fenton High School",
  "I am in Grand Circus",
];

if (detroitGC) {
  console.log(`My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan.
    I am currently ${age} years old and my birthday is on ${birthday}`);
} else {
  console.log(`My name is ${fullName} and I am a student at Grand Circus online.
  I am currently ${age} years old and my birthday is on ${birthday}`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} ===5`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to generate the number 5`
    );
    break;
  }
}

// extended challenge below

let hours = 40;
let wage = 10;
let pay = null;
weeksToAMil = null;

if (hours <= 40) {
  pay = hours * wage;
  weeksToAMil = Math.round(1000000 / pay);
} else {
  let extraHours = hours - 40;
  pay = 40 * wage + extraHours * (wage * 1.5);
  weeksToAMil = Math.round(1000000 / pay);
}
console.log(pay);
console.log(
  `It would take ${weeksToAMil} weeks to earn a million dollars if you are paid $ ${pay} each week`
);
