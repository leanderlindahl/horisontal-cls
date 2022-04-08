const thePostalPicker = document.querySelector(".pick-postal");
const theStorePicker = document.querySelector(".pick-store");

const postalEventHandler = (event) => {
  thePostalPicker.querySelector('.textwrapper .text').innerHTML = 'Lorem ipsum dolor sit amet consectetuer';
};
const storeEventHandler = (event) => {
  theStorePicker.querySelector('.textwrapper .text').innerHTML = 'The quick brown fox jumped';
};


setTimeout(() => {postalEventHandler()}, 1000);
setTimeout(() => {storeEventHandler()}, 2000);
