import React from "react";

import "./Quote.css";

const quotes = [
  "“Travel makes one modest. You see what a tiny place you occupy in the world.” -Gustav Flaubert",
  "“The gladdest moment in human life is a departure into unknown lands.” – Sir Richard Burton",
  "“Be fearless in the pursuit of what sets your soul on fire.” – Jennifer Lee",
  "“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta",
];

const Quote = () => {
  return (
    <div className="quote-text">
      <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
    </div>
  );
};

export default Quote;
