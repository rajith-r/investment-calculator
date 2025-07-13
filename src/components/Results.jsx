import {calculateInvestmentResults,formatter} from '../../src/util/investment.js'
import {useState} from 'react';
export default function Result({input}){
    // console.log(input);
    console.log("sdsdsd"+input); 
    const results =   calculateInvestmentResults(input);
    console.log(results); 
    return (
        <table id="result">
        <thead>
            <tr className="center">
            <th>Year</th>
            <th>Investment Value (End of Year)</th>
            <th>Interest Earned</th>
            <th>Annual Investment</th>
            </tr>
        </thead>
        <tbody>
            {results.map((entry) => (
            <tr key={entry.year}>
                <td className="center">{entry.year}</td>
                <td>{formatter.format(entry.valueEndOfYear)}</td>
                <td>{formatter.format(entry.interest)}</td>
                <td>{formatter.format(entry.annualInvestment)}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}