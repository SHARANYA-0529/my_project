import React from 'react'
export default function ExpressionDemo({username,items}){
return(
    <div>
        <h2>Hello, {username}</h2>
        <p>2+3={2+3}</p>
        <p>Today is {new Date().toLocaleDateString()}</p>
        <ul>
            {
                items.map((item,idx)=>(
                    <li key={idx}>{item}</li>
                ))
            }
        </ul>
    </div>
)
}