import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Results";
import {useState} from 'react';
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const[userInput,setUserInput] = useState({
        initialInvestment:15000,
        annualInvestment:900,
        expectedReturn:5,
        duration:10
    });

    function handleUserInput(inputIdentifier, newValue){
        setUserInput((prevUserInput)=>{
           return{
            ...prevUserInput,
            [inputIdentifier]:+newValue,
           } 
        });
    }

  return (
    <div>
      <Header/>
      <UserInput userInput={userInput} handleUserInput={handleUserInput}/>
      <Result input={userInput}/>
    </div>
  )
}

export default App
