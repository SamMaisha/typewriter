const sentence = "hello there from lighthouse labs";

let timer = 0;
let i = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)
  timer = timer + 50;
};

setTimeout(() => {
  console.log("");
}, (50 * (sentence.length)))

