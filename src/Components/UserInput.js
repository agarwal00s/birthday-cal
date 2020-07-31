import React, { useState } from "react";

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
    const jsonObject = new Function("return " + elements)();
    jsonObject.forEach((person) => {
      let day = new Date(person.birthday);
      day.setYear(year);
      day = day.getDay();
      const initials = person.name
        .split(" ")
        .map((n) => n[0])
        .join("");
      temp[day].push({
        initials: initials,
        birthDate: new Date(person.birthday),
      });
    });
    props.setDisplayData(temp);
  };
  return (
    <div style={{ display: "flex", paddingTop: "5%" }}>
      <div style={{ width: "50%", paddingLeft: "5%" }}>
        <textarea
          rows="20"
          cols="100"
          onChange={(e) => setElements(e.target.value)}
        />
      </div>
      <div style={{ width: "50%" }}>
        <div>Year</div>
        <div>
          <input type="text" onChange={(e) => setDisplayYear(e.target.value)} />
        </div>
        <div>
          <button onClick={() => calcDisplayData()}>UPDATE</button>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
