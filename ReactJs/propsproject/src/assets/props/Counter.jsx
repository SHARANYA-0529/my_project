import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
  return (
    <div style={styles.container}>
      <h2>Simple Counter</h2>
      <p>Current Count : {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
 
  )
}

const styles={
    container:{
        border:'1px solid #888',
        padding:'1rem',
        marginBottom:'1rem',
        borderRadius:'8px'
    }
}
