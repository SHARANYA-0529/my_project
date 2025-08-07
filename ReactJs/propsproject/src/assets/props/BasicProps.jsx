import React from 'react'

function BasicProps({title,subtitle,count}) {
  return (
    <div style={styles.card}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>you have {count}  new notifications.</p>
    </div>
  )
}
const styles={
    card:{
        border:'1px solid black',
        padding:'1rem',
        marginBottom:'1rem',
        borderRadius:'8px',
    }
};

export default BasicProps