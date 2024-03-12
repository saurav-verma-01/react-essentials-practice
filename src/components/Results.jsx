import React, { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
import ResultRow from "./ResultRow";

const Results = ({ userInputs }) => {
  // console.log(userInputs);
  const results = calculateInvestmentResults(userInputs);

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <ResultRow result={result} key={result.year} />
        ))}
      </tbody>
    </table>
  );
};

export default Results;
