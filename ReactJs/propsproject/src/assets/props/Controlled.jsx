import React,{useState} from 'react'

export default function Controlled() {
    const [text,setText]=useState('');
  return (
    <div style={styles.container}>
        <h2>Controlled Input</h2>
        <input
        type="text"
        value={text}
        placeholder="Type somthing..."
        onChange={e=>setText(e.target.value)}
        style={styles.input}
        />
        <p> You typed: <strong>{text}</strong></p>
    </div>
  )
}

const styles={
    container:{
        border:'1px solid black',
        padding:'1rem',
        marginBottom:'1rem',
        borderRadius:'8px'
    },
    input:{
        padding:'0.5rem',
        width:'100%',
        boxSizing:'border-box',
    }

}
