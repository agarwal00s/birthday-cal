import React from "react";
import "./Day.css";

const getBackgroundColor = (idx) => ['#555C7B','#9FD500','#CA7D99','#76CAE7', '#EA481C', '#0050D3', '#FF33AB'][idx];

function Day(props) {
  return (
    <div className="card">
      <div className="card_header">{props.day}</div>
      <div className="card_body">
        {props.people.sort((a,b) => a['birthDate']-b['birthDate']).map((person, idx) => {
          return (
            <div
              className="person"
              style={{ backgroundColor: getBackgroundColor(idx%7) }}
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
