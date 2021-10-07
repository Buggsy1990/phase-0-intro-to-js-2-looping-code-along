// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  }
  return messages;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num -= 1;
  }
}
countDown(4);
