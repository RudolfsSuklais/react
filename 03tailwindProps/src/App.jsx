import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Rudolfs',
    age: '18',
    address: {
      city: 'Nīca',
      country: 'Latvia'
    }
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md hover:bg-green-900 cursor-pointer'>Vite with Tailwind</h1>
     <Card username="Rudolfs" myArr={newArr}/>
     <Card username='Json' post = 'Staff Eng.'/>
    </>
  )
}

export default App
