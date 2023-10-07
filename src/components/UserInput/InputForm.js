import { useState } from "react";
import "./InputForm.css";
import Button from "../UI/Button";

function InputForm(props) {
  const [isReset, setIsReset] = useState(false);
  const [enteredCurrentSaving, setEnteredCurrentSaving] = useState("");
  const [enteredYearlySaving, setEnteredYearlySaving] = useState("");
  const [enteredInterest, setEnteredInterest] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");

  const calculateHandler = (input) => {
    input.preventDefault();

    const yearlyData = [];

    const userInput = {
      currentSaving: +enteredCurrentSaving,
      yearlySaving: +enteredYearlySaving,
      interest: +enteredInterest / 100,
      duration: +enteredDuration,
      initialSaving: +enteredCurrentSaving,
    };

    for (let i = 0; i < userInput.duration; i++) {
      const yearlyInterest = userInput.currentSaving * userInput.interest;
      const saving =
        userInput.currentSaving + yearlyInterest + userInput.yearlySaving;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        currentSaving: saving,
        yearlySaving: userInput.yearlySaving,
        interest: userInput.interest,
        duration: userInput.duration,
        initialSaving: userInput.currentSaving,
      });
      props.onSaveInvestmentData(yearlyData);
    }
  };

  // Reset function
  const resetHandler = () => {
    console.log("Reset button Clicked!");
    setIsReset(false); //Reset
    props.resetResult(false);
    setEnteredCurrentSaving("");
    setEnteredYearlySaving("");
    setEnteredInterest("");
    setEnteredDuration("");
  };

  const currentSavingChangeHandler = (event) => {
    setEnteredCurrentSaving(event.target.value);
  };
  const yearlySavingChangeHandler = (event) => {
    setEnteredYearlySaving(event.target.value);
  };
  const interestChangeHandler = (event) => {
    setEnteredInterest(event.target.value);
  };
  const durationChangeHandler = (event) => {
    setEnteredDuration(event.target.value);
  };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSaving}
            onChange={currentSavingChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlySaving}
            onChange={yearlySavingChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredInterest}
            onChange={interestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      {/* If it's not reset... */}
      {!isReset && <Button onReset={resetHandler} />}
    </form>
  );
}

export default InputForm;
