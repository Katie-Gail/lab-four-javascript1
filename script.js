const name = "Katie Nolde";
const age = 31;
const birthday = "August 17";
const detroitGC = true;
const lifeEvents = ["I was born in Flint, Michigan", "I went to WSU", "I got my master's","I traveled to Europe"]

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);    
}else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}

for(let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
while (true){
let randomNumber = Math.round(Math.random() * 10);
if (randomNumber !== 5){
    counter++
    console.log(`${randomNumber} !== 5`); 
} else {
    counter++
    console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`);
    break;
} 
}
