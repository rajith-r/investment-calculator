import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Results";
import {useState} from 'react';
import { calculateInvestmentResults } from "./util/investment.js";

function App() {

    const[initialInvestment,setInitialInvestment]=useState(0);
    const[annualInvestment,setAnnualInvestment]=useState(0);
    const[expectedReturns,setExpectedReturns]=useState(0);
    const[duration,setDuration]=useState(0);
    const[results,setResults] = useState([]);

    function handleInitialInvestmentChange(event){
        const newInitialInvestment = +event.target.value;
        setInitialInvestment(newInitialInvestment)
        setResults([]);
        setResults(()=>{
          const newResults = 
          calculateInvestmentResults({        
          initialInvestment: newInitialInvestment,
          annualInvestment: +annualInvestment,
          expectedReturn: +expectedReturns,
          duration: +duration});

          console.log(newResults);
          return newResults;
        });
    }

    
    function handleAnnualInvestmentChange(event){
        const newAnnualInvestment = +event.target.value;
        setAnnualInvestment(newAnnualInvestment)
        setResults([]);
        setResults(() => {
          return calculateInvestmentResults({
            initialInvestment: +initialInvestment,
            annualInvestment: +newAnnualInvestment,
            expectedReturn: +expectedReturns,
            duration: +duration,
          });
        });
    }
    
    function handleExpectedReturnsChange(event){
        const newExpectedReturns = +event.target.value;
        setExpectedReturns(newExpectedReturns)
        setResults([]);
        setResults(() => {
          return calculateInvestmentResults({
            initialInvestment: +initialInvestment,
            annualInvestment: +annualInvestment,
            expectedReturn: newExpectedReturns,
            duration: +duration,
          });
        });
    }
    
    function handleDurationChange(event){
        // console.log(event.target.value);
        const newDuration = +event.target.value;
        setDuration(newDuration)
        setResults([]);
      setResults(() => {
        return calculateInvestmentResults({
          initialInvestment: +initialInvestment,
          annualInvestment: +annualInvestment,
          expectedReturn: +expectedReturns,
          duration: newDuration,
        });
      });
    }


  return (
    <div>
      <Header/>
      <div id="user-input">
      <div className="input-group"></div>
      <UserInput  title="Initial Investment"  onModify={handleInitialInvestmentChange} initialValue={initialInvestment}/>
      <UserInput  title="Annual Investment"  onModify={handleAnnualInvestmentChange} initialValue={annualInvestment}/>
      <UserInput  title="Expected Returns"  onModify={handleExpectedReturnsChange} initialValue={expectedReturns}/>
      <UserInput  title="Duration"  onModify={handleDurationChange} initialValue={duration}/>
      </div>

      <Result initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturns} duration={duration} results={results}/>
    </div>
  )
}

export default App
