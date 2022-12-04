import React,{useState,createContext, useContext} from 'react'
const DarkModeContext=createContext();
const DarkModeProvider = (props) => {
    const[darkMode,setDartMode]=useState(false);
    const toggleDarkMode=()=>{
        console.log("function running");
        setDartMode(!darkMode);
    }
  return (
    <div>
      <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext,DarkModeProvider}
