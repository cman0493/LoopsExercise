//1
for (i = 1; i <= 7; i++){
    console.log(i);
  }

//2
  for (i = 5; i <= 25; i += 4){
    console.log(i);
  }

//3
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
for (item of wizards){
    console.log(item);
  }

//4
let harryPotterMovies = 0
while (harryPotterMovies <= 7) {
    harryPotterMovies++;
  }
console.log(harryPotterMovies);

//5
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
for (item of hogwartsHouses){
    for (char of item){
      console.log(char);
    }
  }

//6
const quote = ["Yer", "A", "Wizard", "Harry"]
