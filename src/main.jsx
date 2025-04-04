import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Data.jsx'
import App from './App.jsx'
import Bg_change from './Bg_change.jsx'
import Password from './assets/Password.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <App/> */}
    {/* <App sarname='Gaurav'/> */}
{/* <Bg_change/>  */}
<Password/>
  </StrictMode>,
)
