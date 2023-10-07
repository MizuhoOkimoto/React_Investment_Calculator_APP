import "./Result.css";
import ResultBody from "./ResultBody";

function Result(props) {
  if (!props.addInvestmentData || props.addInvestmentData.length === 0) {
    return <p className="warning">No investment data found</p>;
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.addInvestmentData.map((data, index) => (
        <ResultBody
          key={index}
          currentSaving={data.currentSaving}
          yearlySaving={data.yearlySaving}
          interest={data.interest}
          duration={data.duration}
          year={data.year}
        />
      ))}
    </table>
  );
}

export default Result;

/* <div>
  <h2>Investment Data in Result:</h2>
  <pre>{JSON.stringify(props.addInvestmentData, null, 2)}</pre>
</div>; */
