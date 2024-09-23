
for (let i = 0; i <13; i++) {
  let randomNum=Math.floor(Math.random() * 6) +1;
  console.log(randomNum);
}

for (let i = 1; i <= 1024; i*= 2) {
  //console.log(i);

}

for (let i = 10; i >=0 ; i--) {
  console.log(i);

}

function solve(input1,input2) {
  return Math.pow(input1,input2);

}
console.log (solve (4, 24));
