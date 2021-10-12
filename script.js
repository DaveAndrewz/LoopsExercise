// 1.
for (i = 1; i <= 7; i++){
    console.log(i);
};

// 2.
for (i = 5; i <= 25; i += 4){
    console.log(i);
};

// 3a.
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];
// 3b.
for (item of wizards){
    console.log(item);
}
// 4a.
let harryPotterMovies = 0
// 4b.
while (harryPotterMovies <= 8){
    harryPotterMovies++;
}
// 4c.
console.log(harryPotterMovies-1);


// BONUS

// 5a.
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`    
];
// 5b.
for (houses of hogwartsHouses){
    for (letters of houses){
        console.log(letters);
    }
};
// 6a.
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];
// 6b.
// let whatIsHe = quote.join(' ');
// console.log(whatIsHe);


// ! MAIANNE METHOD!!! ! \\
// let whatIsHe = "";
// while (quote !== whatIsHe){
//     console.log(quote.join(" "));
//     break;
// }

// ! Actual Way ! \\
let whatAmI = "";
for (word of quote){
    whatAmI += `${word} `;
}
console.log(whatAmI.trim());

