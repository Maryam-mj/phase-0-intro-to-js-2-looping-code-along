// function loopThroughBooks(books){
//     for(let i = 0; i<2;i++){
//         console.log(i<2)
//         console.log(i)
//     }
// }
// loopThroughBooks(books)
// let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// let j = 0;

// while (j < myArray.length) {
//   console.log(myArray[j++]);
// }
// const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// for (const element of myArray) {
//   console.log(element);
// }
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// 

function writeCards(names,gift){
  let messages=[];
  for(let i=0;i<names.length;i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
  }
  return messages;
}
// while loop
// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }
function countDown(){
  for(let i=10;i>=0;i--){
    console.log(i)
  }
}
countDown(10);
