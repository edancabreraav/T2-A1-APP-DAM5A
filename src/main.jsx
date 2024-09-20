import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import MyPromises from './functions/MyPromises'
// import MyFunctions from './functions/MyFunctions'
import MyPromisesAll from './functions/MyPromisesAll'
import './index.css'
import MyFetchAPIs from './functions/MyFetch'
import MyFetchPost from './functions/MyFetchPost'
import MyFetchPut from './functions/MyFetchPut'
import MyFetchBlob from './functions/MyFetchBlob'
import MyDataTypes from './methods/MyDataTypes'
import MyObjects from './methods/MyObjects'
import { Contador } from './components/Contador'
import { ContadorHook } from './components/ContadorHook'
import { Login } from './components/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyFetchAPIs/> */}
    {/* <MyFetchPost/> */}
    {/* <MyFetchPut/> */}
    {/* <MyFetchBlob/> */}
    {/* <MyDataTypes/> */}
    {/* <MyObjects/> */}
    {/* <Contador/> */}
    {/* <ContadorHook/> */}
    <Login/>
  </StrictMode>,
)
