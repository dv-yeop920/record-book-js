const quotes = [
    {
        quotes:"The way to get started is to quit talking and begin doing",
        author: "walt Disney",
    },
    {
        quotes:"Life is what happens when you`re busy making other plans",
        author: "John Lennon",
    },
    {
        quotes:"The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quotes:"You will face many defeats in life, but never let yourself be defeated",
        author:"Maya Angelou",
    },
    {
        quotes:" The greatest glory in living lies not in never falling, but in rising every time we fall",
        author:"Nelson Mandela",
    },
    {
        quotes:"In the end, it's not the years in your life that count. It's the life in your years.",
        author:"Abraham Lincoln",
    },
    {
        quotes:"Never let the fear of striking out keep you from playing the game.",
        author:"Babe Ruth",
    },
    {
        quotes:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison",
    },
    {
        quotes:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author:"Dr. Seuss",
    },
    {
        quotes:"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author:" Rosa Parks",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quotes;
author.innerText = todayQuotes.author;