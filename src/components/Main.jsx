import React, { useState } from "react";
import { ReactComponent as NextIcon } from "../svgs/next.svg";
import { ReactComponent as PrevIcon } from "../svgs/previous.svg";
import  Data  from "./data";

const Main = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const { name, job, description, img } = data[index];

  const checkIndex = (newIndex) => {
    if (newIndex > data.length - 1) {
      return 0;
    }
    if (newIndex < 0) {
      return data.length - 1;
    }
    return newIndex;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

const handleSurprise = ()=>{
    const randomNumber =Math.floor(Math.random()*(data.length));
    console.log(randomNumber)
    setIndex(randomNumber);
}


  return (
    <div>
      <h1>Our Reviews</h1>
      <div className="container">
        <img src={img} alt="" />
        <h4 className="name">{name}</h4>
        <p className="title">{job}</p>
        <p className="description">{description}</p>
        <div className="icons">
          <button onClick={prevPerson}>
            <PrevIcon />
          </button>
          <button onClick={nextPerson}>
            <NextIcon />
          </button>
        </div>
        <button className="surprise" onClick={handleSurprise}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Main;