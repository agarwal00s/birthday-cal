import React, { useState } from "react";
import "./UserInput.css";

function UserInput(props) {
  const [elements, setElements] = useState([]);
  const [year, setDisplayYear] = useState("");
  const calcDisplayData = () => {
    const temp = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };
    try {
      // eslint-disable-next-line
      const jsonObject = new Function("return " + elements)();
      jsonObject.forEach((person) => {
        let day = new Date(person.birthday);
        day.setYear(year);
        day = day.getDay();
        const initials = person.name
          .split(" ")
          .map((n) => n[0].toUpperCase())
          .join("");
        temp[day].push({
          initials: initials,
          birthDate: new Date(person.birthday),
        });
      });
      props.setDisplayData(temp);
    } catch (e) {
      alert("Please Enter proper Data");
    }
  };
  return (
    <div className="input_area">
      <div className="left_section">
        <textarea
          className="text_area"
          onChange={(e) => setElements(e.target.value)}
        />
      </div>
      <div className="right_section">
        <div className="year_text">Year</div>
        <div>
          <input
            className="input_year"
            type="text"
            onChange={(e) => setDisplayYear(e.target.value)}
          />
        </div>
        <div>
          <button className="update_button" onClick={() => calcDisplayData()}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
