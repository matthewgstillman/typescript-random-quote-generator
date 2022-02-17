import React, { useState, useEffect, FC } from "react";
import { ITask } from "../Interfaces";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Container } from "react-bootstrap";

const Request: FC = () => {
  const [quoteList, setQuoteList] = useState<ITask[]>([]);
  const [randomQuote, setRandomQuote] = useState<ITask[]>([
    {
      text:
        "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
      author: "Tom Jackson",
    },
  ]);

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuoteList(data);
    }
  }, []);

  const getRandom = () => {
    const rounded = Math.round(Math.random() * 1640);
    const text = quoteList[rounded]["text"];
    const author = quoteList[rounded]["author"];
    setRandomQuote([{ text, author }]);
    return rounded;
  };

  return (
    <div>
      <br></br>
      {randomQuote[0]["author"] !== null ? (
        <div>
          <p>
            <i className="quoteText">"{randomQuote[0]["text"]}"</i>
          </p>
          <h3>- {randomQuote[0]["author"]}</h3>
          <br />
        </div>
      ) : (
        <div>
          <p>
            <i className="quoteText">"{randomQuote[0]["text"]}"</i>
          </p>
          <h3>- Anonymous</h3>
          <br />
        </div>
      )}
      <div className="text-center">
        <Button variant="primary" onClick={getRandom} className="randomButton">
          Get Random Quote
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Request;
