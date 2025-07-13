import {calculateInvestmentResults,formatter} from '../../src/util/investment.js'
import {useState} from 'react';
export default function Result({ initialInvestment,annualInvestment,expectedReturn,duration,results}){

    const[annualData,setAnnualData]=  useState([]); 
    function handleFetchResults(initialInvestment,annualInvestment,expectedReturn,duration){
        const results = calculateInvestmentResults ({initialInvestment,annualInvestment,expectedReturn,duration});
        setAnnualData(results);
        console.log(results);
    }
    return(
        <div>
           <button onClick={()=>handleFetchResults(initialInvestment,annualInvestment,expectedReturn,duration)}></button>
            <table id='result'>
            <thead>
                <tr>
                <th>Year</th>
                <th>Annual Investment</th>
                <th>Interest</th>
                <th>Value End of Year</th>
                </tr>
            </thead>
            <tbody>
                {results.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.year}</td>
                    <td>{formatter.format(entry.annualInvestment)}</td>
                    <td>{formatter.format(entry.interest)}</td>
                    <td>{formatter.format(entry.valueEndOfYear)}</td>
                </tr>
                ))}
            </tbody>
            </table>

        </div>

        
    );
    
}