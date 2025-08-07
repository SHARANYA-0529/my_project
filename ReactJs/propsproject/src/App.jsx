import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicProps from './assets/props/BasicProps'
import Counter from './assets/props/Counter'
import Controlled from './assets/props/Controlled'
function App() {
  return(
    <>
   <BasicProps title="java" subtitle="programming" count="12"/>
   <Counter/>
   <Controlled/>
   </>
  )
}

export default App
