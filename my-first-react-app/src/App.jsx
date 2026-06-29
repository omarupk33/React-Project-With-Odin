import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './Header'
import Center from './Center'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Center></Center>
    <Footer></Footer>
    </>
  )
}

export default App
