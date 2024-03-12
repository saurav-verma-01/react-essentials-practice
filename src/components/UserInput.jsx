const UserInput = ({ onChange, userInput }) => {
  return (
    <form id="user-input" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">initial investment</label>
          <input
            type="number"
            required
            min={1000}
            max={100000}
            step={10}
            id="initial-investment"
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          />
        </div>
        <div>
          <label htmlFor="anual-investment">Anual investment</label>
          <input
            type="number"
            min={100}
            required
            max={100000}
            step={10}
            id="anual-investment"
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
          />
        </div>
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            min={5}
            required
            max={30}
            step={0.1}
            id="expected-return"
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            min={1}
            required
            max={30}
            step={1}
            id="duration"
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
          />
        </div>
      </div>
    </form>
  );
};

export default UserInput;
