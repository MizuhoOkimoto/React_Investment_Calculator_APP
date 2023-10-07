import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/UserInput/InputForm";
import Result from "./components/Result/Result";

function App() {
  const [userInputData, setUserInputData] = useState([]);

  const saveInvestmentHandler = (data) => {
    setUserInputData(data);
  };

  const resetResultHandler = () => {
    setUserInputData([]);
  };

  return (
    <div>
      <Header />
      <InputForm
        onSaveInvestmentData={saveInvestmentHandler}
        resetResult={resetResultHandler}
      />
      <Result addInvestmentData={userInputData} />
      <div>
        <h2>Investment Data in Result:</h2>
        <pre>{JSON.stringify(userInputData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;

// THIS IS FOR CHECKING DATA
/* <div>
  <h2>Investment Data in Result:</h2>
  <pre>{JSON.stringify(userInputData, null, 2)}</pre>
</div>; */
