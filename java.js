console.log('life is short')
let aminu = 45
if (aminu > 4) {
    console.log('i love my mom')
}
else if (aminu === 45) {
    console.log("judge none")
}
const password = prompt('password must be more than six numbers')
if (password.length >= 6) {

    if (password.indexOf(' ') === -1) {
        alert('valid password')
    }
    else {
        console.log('password is too short')
    }
} else {
    console.log('wrong password')

}

//and//
const school = prompt('enter password')
if (school.length >= 6 && school.indexOf(' ') === -1) {
    console.log('password accepted')
}
else {
    console.log('password is bad')
}
const age = 39;
if (age >= 0 && age === 5 || age > 60) {
    console.log("you are free to enter");
} else if (age >= 5 && age < 40) {
    console.log("you pay $10")
} else if (age >= 40 && age < 60) {
    console.log('you pay $20')
} else {
    console.log('inavlid')
}

switch ('a ') {
    case "5":
        break;

    case "6":
        break;
    default:


        let days = ['monday', 'tuesday', 'wenesday']
        days

}
for (let p = 1; p <= 10; p++) {
    console.log('big bad boy')
    console.log(p)
}

for (let me = 1; me <= 6; me++) {
    console.log("Da ba dee da ba daa")
    console.log(me)
}
for (let g = 1; g <= 21; g += 2) {
    console.log('even number')
}
const animals = ['dog', 'cat', 'rabbit', 'goat', 'fish']
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i])
}
// looping inside array
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}
//nexted array
for (let i = 1; i <= 10; i++) {
    console.log('this is first: ${i}')

    for (let j = 1; j < 4; j++) {
        console.log('          this is second: ${j}')
    }
}
const classnames = [
    ['adana', 'chika', 'marry'], ['fumi', 'bosun', 'femi', 'dayo'],
    ['qeen', 'faith', 'boye', 'isaac', 'shehu']
]
for (let i = 0; i < classnames.length; i++) {
    const rosw = classnames[i];
    console.log(`Row # ${i + 1}`)
    for (let j = 0; j < rosw.length; j++) {
        console.log(rosw[j])
    }
}
const trial = ['monday', 'tuesday', 'wenesday']
trial.forEach(function (trial) {
    console.log(trial)
});

//WHILE LOOP
let her = 0;
while (her < 10) {
    console.log(her)
    her++;
}
// const secret = "aminu"
// let guess = prompt("enter the secret code");
// while (guess !== secret) {
//     guess = prompt("enter the secret code")

// } console.log("congratulations")

// const input = 'you win'
// let guys = prompt('say something');
// while (guys !== input) {
//     guys = prompt('not succesfull')
// }
// console.log('you win')

const dad = 'man'
let boys = prompt('you are not a man');
while (boys !== dad) {
    boys = prompt('trial again son')
}
console.log('you are now a man')


let maximum = parseInt(prompt('enter maximum!'));
while (!maximum) {
    maximum = parseInt(prompt('enter valid number!'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('enter your first guesss'));
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempt++;
    if (guess > targetNum) {
        guess = (prompt('Too high enter a new guess:'));
    } else {
        guess = (prompt('Too low enter a new guess:'))
    }
}
if (guess === "q") {
    console.log('you quit')

}

if (guess === 'q') {
    console.log('you quit')
}

else {
    console.log('CONGRATULATION')
    console.log(`it took you several ${attempt} guess`)
}
//for of()

const degrees = ['man', 'woman', 'girl', 'boy', 'male', 'female', 'she']
for (let degree of degrees) {
    console.log(`visit redit.com/r/${degree}`)
}
