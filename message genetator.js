let quotes = [
    "This is one",
    "This is 2",
    "This is number three",
];

const random_message = () => {
   let random = Math.floor(Math.random()* quotes.length);
   return quotes[random];
};

console.log(random_message());