import { useState } from "react";

export default function UserInput({userInput,handleUserInput}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                <label>initialInvestment</label>
                <input value={userInput.initialInvestment} onChange={(event)=>{handleUserInput("initialInvestment",event.target.value)}}></input>
                </p>
                <p>
                <label>annualInvestment</label>
                <input value={userInput.annualInvestment} onChange={(event)=>{handleUserInput("annualInvestment",event.target.value)}}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                <label>expectedReturn</label>
                <input value={userInput.expectedReturn} onChange={(event)=>{handleUserInput("expectedReturn",event.target.value)}}></input>
                </p>
                <p>
                <label>duration</label>
                <input value={userInput.duration} onChange={(event)=>{handleUserInput("duration",event.target.value)}}></input>
                </p>
            </div>
        </section>
    );
}