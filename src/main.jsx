import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import MyPromises from './functions/MyPromises'
// import MyFunctions from './functions/MyFunctions'
import MyPromisesAll from './functions/MyPromisesAll'
import './index.css'
import MyFetchAPIs from './functions/MyFetch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    <MyFetchAPIs/>
  </StrictMode>,
)
