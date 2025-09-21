//passing data from parent to child(using props)

//app.jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to My First React App!</h1>
      <Greeting name="Shifana" age={21} message="You are awesome!" />
      <Greeting name="Ayesha" age={20} message="Keep going!" />
      <Greeting name="Sana" age={19} message="Never give up!" />
    </div>
  );
}

export default App;


//Greeting.jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Age: {props.age}</p>
      <p>Message: {props.message}</p>
    </div>
  );
}

export default Greeting;

//-----------------------------------------------------------------------------------------------------------------------
//passing data from child to parent(using call back function)

//app.jsx
import React, { useState } from "react";
import Child from "./Child";

function App(){

  const [name,setName]=useState("")
  const recievename=(childName)=>{                    
    setName(childName)
  }

  return (
    <div>
          <h1>I am the parent</h1>
    <h2>name from child :{name}</h2>
   <Child onSend={recievename}/>
  
    </div>
  )

}

export default App;

//child.jsx
import React from "react";

function Child(props){
    return(
        <button onClick={()=>props.onSend("shifana")}>send name to parent</button>
    )

}
export default Child



//----------------------------------------------------------------------------------------------------------
//creating a custom hook

//app.jsx
import React, { useState } from "react";
import sayHello from "./useHello";

function App(){

  const message= sayHello()
  

  return (
    <div>
  <h1>custom hook demo</h1>
  <p>{message}</p>
    </div>
  )

}

export default App;

//useHello.js
import React from "react";

function sayHello(){

    return "helloo,shifana!!!"
}
export default sayHello;

//-----------------------------------------------------------------------------------------------------
//react.lazy()

//app.jsx
import React, { lazy,Suspense, useState } from "react";
const LazyComponent = lazy(()=>import('./lazyComponent'))

function App(){

const [show,setShow]= useState(false)

  return (
    <div>
        <h1>react lazy component example</h1>
        <button onClick={()=>setShow(true)}>load lazy component</button>
  
      <Suspense fallback={<p>loading component</p>}>{show && <LazyComponent/>}</Suspense>
    </div>
  )

}

export default App;

//lazyComponent.jsx
import React from "react";

function LazyComponent(){
    return <h2>this is a lazy component</h2>
}

export default LazyComponent;

//-------------------------------------------------------------------
//render props

//app.jsx
import React, { lazy,Suspense, useState } from "react";
import DataFetcher from "./DataFetcher";

function App(){
return(
  <div>
    <h1>render props example</h1>
    <DataFetcher render={(data)=> <h2>{data}</h2>
    }/>
  </div>
)


}

export default App;

//DataFetcher.jsx
import React from "react";

function DataFetcher({render}){
const data="hello im shifana";
return <div>{render(data)}</div>
}

export default DataFetcher;

//----------------------------------------------------------------------------
//counter using useState 

//App.js
import React,{useState} from "react";

function Counter(){
  const [count,setCount] = useState(0)

  const increment = ()=>setCount(count+1);
  const decrement=()=>{if(count!==0)setCount(count-1)};
  const reset = ()=>setCount(0)

    return (
      <div>
        <h2>Counter App</h2>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div>
)
  
}

export default Counter;

//----------------------------------------------------------------------------
// toggle checkbox using useref

import React, {useRef} from "react";

function checkBox(){
  const tickcheckBox= useRef();

  const handleClick=()=>{
    tickcheckBox.current.checked = !tickcheckBox.current.checked;
  }

  return (
    <div>
      <input type="checkbox" ref={tickcheckBox} />
      <button onClick={handleClick}>Check</button>
    </div>
  )
}

export default checkBox;

//toggle checkbox using customhook

import React,{useState} from "react";

function useCheckBox(){
  const [checked,setChecked]= useState();
  const toggle=()=>{
    setChecked(prev=>!prev)
    return [checked,toggle]
  }

  return(
    <div>
      <input type="checkbox"  checked={checked}/>
      <button onClick={toggle}>click</button>
    </div>
  )
}

export default useCheckBox;

// toggle checkbox using context api

import React,{createContext,useContext,useState} from "react";

const checkBoxContext = createContext();

function CheckBoxProvider({children}){
  const[checked,setChecked] = useState(false);
  const toggle =()=>{
    setChecked((prev)=>!prev)
  }

  return (
    <checkBoxContext.Provider value={{checked,toggle}}>
      {children}
    </checkBoxContext.Provider>
  )
}

function Checkbox(){
  const {checked,toggle} = useContext(checkBoxContext);

  return (
    <label htmlFor="">
      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? "CHECED" : "UNCHECKED"}
    </label>
  )
}

export default function App(){
  return (
    <CheckBoxProvider>
      <Checkbox/>
    </CheckBoxProvider>
  )
}


//-------------------------------------------------
//making a counter in which child component is displayed with the value
//app.jsx
import React, { useState } from "react";
import CounterDisplay from "../counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <CounterDisplay value={count} />
    </div>
  );
}

export default App;

//counter.jsx
import React from "react";

function CounterDisplay({ value }) {
  return <h2>count : {value}</h2>;
}

export default CounterDisplay;


//search for array of strings
import React,{useState} from "react";

export default function App(){
  const items =["apple","banana","guava",'pineapple'];
  const [query,setQuery]=useState("");
  const [result,setResult] = useState("");

  const handleSearch =()=>{
    if(items.includes(query.toLowerCase())){
      setResult(`found:${query}`)
    }else{
      setResult("not found")
    }
  }

  return (
    <div>
      <input type="text"  value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <button onClick={handleSearch}>search</button>
      <p>Result : {result}</p>
    </div>
  )
}

//------------------------------------------------------------------
//sibling to sibling communication

import { useState } from "react";

function SiblingOne({sendData}){

  return(
    <div>
      <h2>this is sibling one</h2>
      <button onClick={()=>sendData("data from sibling")}>send data to sibling </button>
    </div>
  )
}

function SiblingTwo({data}){

  return(
    <div>
      <h2>this is sibling two</h2>
      <h1>recieved data : {data}</h1>
    </div>
  )
}

function Parent(){
  const [message,setMessage] = useState("")

  return (
    <div>
      <h2>this is parent</h2>
      <SiblingOne sendData={setMessage}/>
      <SiblingTwo data={message}/>
    </div>
  )
}

export default Parent;

//-------------------------------------------------------------------------
//counter using usereducer
import React, { useReducer, useState } from "react";

const initialState={count:0};

function reducer(state,action){
  switch(action.type){
    case "increment": return { count:state.count+1}
    case "decrement": return { count:state.count-1}
    case "reset": return { count:0}
    default : return state;
  }
}

function Timer(){
  const [count,setCount]=useState(0);
  const [state,dispatch]=useReducer(reducer,initialState);


  return (
    <div>
      <h2>count:{state.count}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}
export default Timer;

//-----------------------------------------------------------------
//example for factorial using usememo

import React, { useMemo, useState } from "react";

function CalculateFactoraial(){
  const [number,setNumber]=useState()
  const [show,setShow]=useState(false)

  const handleNumChange=(e)=>{
    setNumber(e.target.value)
  }

const calculateResult=(n)=>{
  let result=1;
  for(let i=1;i<=n;i++){
    result *= i;
  }
  return result;
}

const showResult =()=>{
setShow(true)
}

  const memoizedValue = useMemo(()=>
  calculateResult(number)
  ,[number])

  return (
    <div>
      <input type="number"  value={number} onChange={handleNumChange}/>
      <button onClick={showResult}>Result</button>
      {show && <h2>the factorail for {number} is : {memoizedValue}</h2>}
    </div>
  )

}

export default CalculateFactoraial;

//------------------------------------------------------------
//example for useRef and forward ref

//parent.js
import React, { useRef } from "react";
import { Child } from "./Child";

function Parent(){
    const childRef=useRef();

    const handleFocus=()=>{
        childRef.current.focusInput()
    }

    return(
        <div>
            <Child  ref={childRef}/>
            <button onClick={handleFocus}>click to focus parent component</button>
        </div>
    )
}

export default Parent;

//child.js
import React, { useImperativeHandle, useRef } from 'react'

export const Child = React.forwardRef((props,ref) => {

    const inputRef=useRef();

    useImperativeHandle(ref,()=>({
        focusInput:()=>{
            inputRef.current.focus()
        }
    }))


  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
})

//------------------------------------------------------------------------------------------------------------------------
//creating multiple routes

import React from "react";
import {BrowserRouter as Router ,Routes ,Link,Route} from 'react-router-dom';
import Home from "../components/home";
import About from "../components/About";
import Contact from "../components/Contact";

function App(){

  return (
   <div>
    <h2>links</h2>
    <Router>
      <div>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>

    </Router>
   </div>
  )
}
export default App;

//----------------------------------------------------------------------------------------------------------------------------------------------
//using useparams

//about.jsx
import React from "react";
import { useParams } from "react-router-dom";
export default function About(){
    const {id} = useParams();
    return (
        <div>
            <h2>About Page</h2>
            <h3>the id is -{id}</h3>
        </div>
    )
}

//app.jsx
import React from "react";
import {BrowserRouter as Router ,Routes ,Link,Route} from 'react-router-dom';
import Home from "../components/home";
import About from "../components/About";
import Contact from "../components/Contact";

function App(){

  return (
   <div>
    <h2>links</h2>
    <Router>
      

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about/:id" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>

    </Router>
   </div>
  )
}
export default App;

//---------------------------------------------------------------------------------------------------------------------------
