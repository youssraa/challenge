import React from "react" ;
import App, {listNav } from '../App.js'
import "../App.css" ;
function Logo(props){  
    return(
        <header className ="entete"> 
        <div className="logo"><img src="logo.png" /> </div>
           <h1 >Web fundamentals</h1>
           <nav className="menu">
              <ul className="main">
         {props.listNav.map((currentList,index)=>(<li key={index}><a href={currentList.href}></a>{currentList.navl} </li> ))}   
              </ul>
            </nav> 
    </header>
)
} ;
export default Logo ;