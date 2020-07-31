import React, { useState } from "react";
import Header from "./Header";
import "./BirthdayCal.css";
import Cards from "./Cards";
import UserInput from "./UserInput";

const defaultBirthdayObj = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};
function BirthdayCal() {
  const [displayData, setDisplayData] = useState(defaultBirthdayObj);
  return (
    <div className="birthdayCal">
      <Header />
      <Cards displayData={displayData} />
      <UserInput displayData={displayData} setDisplayData={setDisplayData} />
    </div>
  );
}

export default BirthdayCal;
