const textGenrator = () => {
  let text = "";
  for (let i = 0; i < 2; i++) {
    text += String.fromCharCode(randomNumber(65, 90));
    text += String.fromCharCode(randomNumber(97, 122));
    text += String.fromCharCode(randomNumber(48, 57));
  }
  return text;
};
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(textGenrator());
