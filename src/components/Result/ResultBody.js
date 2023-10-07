import "./ResultBody.css";

function ResultBody(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const investedCapital = formatter.format(
    props.currentSaving + props.yearlySaving
  );

  const interest = props.currentSaving * props.interest;

  const totalSavings = investedCapital + interest;
  formatter.format(totalSavings);

  return (
    <tbody>
      <tr>
        <td>{props.year}</td>
        <td>{totalSavings}</td>
        <td>{interest}</td>
        <td>{props.interest}</td>
        <td>{investedCapital}</td>
      </tr>
    </tbody>
  );
}

export default ResultBody;
