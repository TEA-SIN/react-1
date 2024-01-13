import { useState } from 'react'
import './App.css'
import NavbarComponent from './NavbarComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavbarComponent/>
      </header>
      <main className=' bg-purple-300 h-screen'>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
