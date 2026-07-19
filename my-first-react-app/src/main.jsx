import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Window from './Window'
import './App.css'
import Header from './Header'
import Footer from './Footer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Window></Window>
    <Footer></Footer>
  </StrictMode>,
)
