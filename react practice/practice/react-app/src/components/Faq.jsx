import React, { useState } from 'react'

export const Faq = () => {
    const [arr,setArr] = useState([
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    tog : true
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    tog : false
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    tog : false
  },

  
]);


    const handleTog = (ind) => {
    const nw = arr.map((item,index) => index == ind ? {...item,tog : !item.tog }: item);
    console.log(nw);    
    setArr(nw);
    }

  return (
  <>
    <div><h1>Frequently Asked Questions</h1></div>
   <div>
      {arr.map((item,index)=>

        <div key={index}>
        <h2>
        <button type='button' onClick={() => handleTog(index)}>{ item.tog ? "🔼" : "🔽"}</button>
        {item.question}</h2>
        { item.tog && <p>{item.answer}</p> }

      </div>
      
      )}
   </div>
  </>
  )
}
 export default Faq;