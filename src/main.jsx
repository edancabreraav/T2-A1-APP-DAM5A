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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyFetchAPIs/> */}
    {/* <MyFetchPost/> */}
    {/* <MyFetchPut/> */}
    <MyFetchBlob/>
  </StrictMode>,
)
