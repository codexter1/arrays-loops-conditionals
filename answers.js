for (i = 1; i <=20; i++) {
  console.log(i);
};

for (i = 1; i <=200; i++) {
  if (i % 2 === 0) {
      console.log(i);
  }
};
let phrase = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (var i = 1; i < 20 ; i++) {
  if(i % 2 === 0) {
    let a = Math.floor(Math.random()*(phrase.length));
    console.log(phrase[a]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
};
