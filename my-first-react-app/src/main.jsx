import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './Header'
import Center from './Center'
import Footer from './Footer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Center></Center>
    <Footer></Footer>
  </StrictMode>,
)
