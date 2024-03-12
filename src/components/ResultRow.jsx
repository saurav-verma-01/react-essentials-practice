import React from "react";
import { formatter } from "../util/investment";

const ResultRow = ({ result }) => {
  const { year, interest, valueEndOfYear, annualInvestment } = result;
  const totalInterest = valueEndOfYear - annualInvestment * year - interest;
  const totalAmountInvested = valueEndOfYear - interest;
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
};

export default ResultRow;
