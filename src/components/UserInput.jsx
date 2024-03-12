import React from "react";

const UserInput = () => {
  return (
    <form id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">initial investment</label>
          <input type="number" id="initial-investment" />
        </div>
        <div>
          <label htmlFor="anual-investment">Anual investment</label>
          <input type="number" id="anual-investment" />
        </div>
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" />
        </div>
      </div>
    </form>
  );
};

export default UserInput;
