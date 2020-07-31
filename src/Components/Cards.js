import React from "react";
import Day from "./Day";
import './Cards.css';

const getDayOfWeek = (dayIndex) =>
  ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][dayIndex];

function Cards(props) {
  return (
    <div
      className="cards"
    >
      {Object.keys(props.displayData).map((day, idx) => (
        <Day key={idx} day={getDayOfWeek(day)} people={props.displayData[day]} />
      ))}
    </div>
  );
}

export default Cards;
