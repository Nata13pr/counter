import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(1);
  
    const date=new Date('june 21 2027');
    date.setDate(date.getDate()+count)
  
    function handleIncreaseStep(){
      if(step>=0){
        setStep(current=>current + 1)
      }
    }
    
    function handleDecreaseStep(){
      if(step>0){
        setStep(current=>current - 1)
      }
    }
  
    function handleDecreaseCount(){
  setCount(current=>current-step)
    }
  
    function handleIncreaseCount(){
        setCount(current=>(current+ step))
    }
  
    return(
      <div>Hell
        <div>
           <button onClick={handleDecreaseStep} >-</button>
           <span>Step : {step}</span>
           <button onClick={handleIncreaseStep}>+</button>
        </div>
        <div>
           <button onClick={handleDecreaseCount}>-</button>
           <span>Count : {count}</span>
           <button onClick={handleIncreaseCount}>+</button>
  </div>
    <p>
       <span>
      {count === 0 
      ? 'Today is'
    : count > 0
    ? `${count} days fro today is`
    : `${Math.abs(count)} days ago was`}
       </span>
       <span>{date.toDateString()}</span>
   </p>
      </div>
    )
}
