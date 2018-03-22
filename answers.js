for (i = 1; i <=20; i++) {
  console.log(i);
};
//evens
for (i = 1; i <=200; i++) {
  if (i % 2 === 0) {
      console.log(i);
  }
};
//kittens
let phrase = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (var i = 1; i < 20 ; i++) {
  if(i % 2 === 0) {
    let a = Math.floor(Math.random()*(phrase.length));
    console.log(phrase[a]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
};
//fizzbuzz
for (i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log('fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}
//getting to know you
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = 'Gameboy';
karolin[1] = 17;
matt[2] = 'Gotham City';
kristyn[2] = 'Brooklyn'
