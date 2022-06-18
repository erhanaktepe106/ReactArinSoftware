import React from 'react'
import ReactDOM from 'react-dom'


const names=["Erhan","Ayşe","Fatma","Hayriye"]

function App2()
{
    const buttonValue="JSX BUTTON";

    return (
    <div>
        {names.map(name=>(<h1>{name}</h1>))}
        <h1>Hello React</h1>
        <button className='ButtonClassName' type="button" style={{padding: '20px',backgroundColor:'red' ,color: 'white', bacgroundColor:'blue', border:'2px solid yellow'}}>{buttonValue}</button>      
    </div>   
    );
}


ReactDOM.render(
    <App2/>,
    document.getElementById("root")
);