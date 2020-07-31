import React from "react";
import "./Day.css";
import EmptyBday from "../EmptyBday.png";

const getBackgroundColor = (idx) =>
  ["#555C7B", "#9FD500", "#CA7D99", "#76CAE7", "#EA481C", "#0050D3", "#FF33AB"][
    idx
  ];

const getSize = (n) => {
  const area = 40000;
  let i = 1;
  while (n > i ** 2) {
    i++;
  }
  const noOfSquares = i ** 2;
  const areaOfEach = area / noOfSquares;
  const length = Math.sqrt(areaOfEach);
  return `${length}px`;
};

function Day(props) {
  return (
    <div className="card">
      <div className="card_header">{props.day}</div>
      <div className="card_body">
        {props.people.length === 0 && (
          <img className="no_birthday" src={EmptyBday} alt="No Birthday" />
        )}
        {props.people
          .sort((a, b) => b["birthDate"] - a["birthDate"])
          .map((person, idx) => {
            const size = getSize(props.people.length);
            return (
              <div
                key={idx}
                className="person"
                style={{
                  backgroundColor: getBackgroundColor(idx % 7),
                  height: size,
                  width: size,
                }}
              >
                {person.initials}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Day;
