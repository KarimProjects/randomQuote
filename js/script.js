quotes = [
  {
    quoteText: "“Be yourself; everyone else is already taken.”",
    quoteAuthor: "― Oscar Wilde",
  },
  {
    quoteText:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    quoteAuthor: "― Marilyn Monroe",
  },
  {
    quoteText:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    quoteAuthor: "― Albert Einstein",
  },
  {
    quoteText: "“So many books, so little time.”",
    quoteAuthor: "― Frank Zappa",
  },
  {
    quoteText: "“A room without books is like a body without a soul.”",
    quoteAuthor: "― Marcus Tullius Cicero",
  },
  {
    quoteText:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    quoteAuthor: "― Bernard M. Baruch",
  },
  {
    quoteText:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    quoteAuthor: "― Dr. Seuss",
  },
  {
    quoteText: "“You only live once, but if you do it right, once is enough.”",
    quoteAuthor: "― Mae West",
  },
  {
    quoteText: "“Be the change that you wish to see in the world.”",
    quoteAuthor: "― Mahatma Gandhi",
  },
  {
    quoteText:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    quoteAuthor: "― Robert Frost",
  },
  {
    quoteText: "“If you tell the truth, you don't have to remember anything.”",
    quoteAuthor: "― Mark Twain",
  },
  {
    quoteText:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    quoteAuthor: "― Maya Angelou",
  },
  {
    quoteText:
      "“A friend is someone who knows all about you and still loves you.”",
    quoteAuthor: "― Elbert Hubbard",
  },
  {
    quoteText:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    quoteAuthor: "― Mahatma Gandhi",
  },
];

var previousNumber;
function getRandomNumber(max) {
  var randomNumber = Math.floor(Math.random() * (max + 1));
  if (randomNumber === previousNumber) {
    return getRandomNumber(max);
  }
  previousNumber = randomNumber;
  // console.log(randomNumber);
  return randomNumber;
}

function displayQuote() {
  var randomQuoteNumber = getRandomNumber(quotes.length - 1);
  var quoteContent = `
      <p>
      ${quotes[randomQuoteNumber].quoteText}
      </p>
      <span class="fw-semibold fst-italic">
      ${quotes[randomQuoteNumber].quoteAuthor}
      </span>
`;
  document.getElementById("Quote").innerHTML = quoteContent;
}
