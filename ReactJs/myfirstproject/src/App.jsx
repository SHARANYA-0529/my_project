import React, { useState } from 'react';
import Page from './Page.jsx'
import Greeting from './ClassComponent/Greeting.jsx'
import Counter from './ClassComponent/Counter.jsx'
import Counter1 from './functionalComponent/Counter.jsx'
import Exp from './components/ExpressionDemo.jsx'
import AttributeDemo from './components/AttributeDemo.jsx';
import { Container } from './components/Container.jsx';
import Conditional from './components/Conditional.jsx';
function App(){
  const items=['Apple','Banana','Cherry'];
  const kit=['bat','ball','glose','wickets','jersey']
  
  return(
    <div style={{padding:'2rem',fontFamily:'sans-serif',textalign:'center'}}>
      <div style={{display:'flex',gap:"20px"}}>
      <section style={{border:'1px solid black',padding:'20px'}}>
        <Exp username="Student" items={items} />
      </section>
       <section style={{border:'1px solid black',margintop:'10px'}}>
        <Exp username="Virat Kohli" items={kit} />
      </section>
      </div>
      <hr/>
      <div>
        <section>
          <AttributeDemo/>
        </section>
      </div>
       <div>
        <section>
          <Container children="narendar"/>
        </section>
      </div>
      <div>
        <section>
          <Conditional initaialLogedIn={true}
          />
        </section>
      </div>
    </div>
  )
}

export default App;
