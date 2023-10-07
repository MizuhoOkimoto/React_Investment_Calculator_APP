import "./ResultBody.css";

function ResultBody(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const investedCapital = props.currentSaving + props.yearlySaving * props.year;

  const interest = props.currentSaving * props.interest;

  const totalSavings = props.currentSaving + props.interest + props.duration;

  // const savingsEndOfYear =
  //   props.currentSaving + props.yearlyInterest + props.yearlySaving;

  const totalInterest =
    props.currentSaving - props.initialSaving - props.yearlySaving * props.year;

  console.log("currentSaving:" + props.currentSaving);
  console.log("initialSaving:" + props.initialSaving);
  console.log("yearlySaving:" + props.yearlySaving);
  console.log("year:" + props.year);

  return (
    <tbody>
      <tr>
        <td>{props.year}</td>
        <td>{formatter.format(totalSavings)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    </tbody>
  );
}

export default ResultBody;
