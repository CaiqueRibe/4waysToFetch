import Fetch from "./components/Fetch"
import "./App.css"
import { Suspense, useState } from "react"
import Axios from "./components/Axios"
import Swr from "./components/Swr"
import ReactQuery from "./components/ReactQuery"

function App() {
   const [update, setUpdate] = useState(false)

   const fetchStyle = {
      display: "inline-block",
      marginRight: "10px", // Add some spacing between the photos
   }

   const handleButtonClick = () => {
      setUpdate(!update) // Toggle the value to force update
   }

   return (
      <>
         <div>
            <div>
               <ReactQuery />
            </div>
            <div>
               <Suspense fallback={<div>Loading...</div>}>
                  <Swr />
               </Suspense>
            </div>
            <div>
               <Axios />
            </div>
            <div style={fetchStyle}>
               <Fetch update={update} />
            </div>
            <div style={fetchStyle}>
               <Fetch update={update} />
            </div>
            <button onClick={handleButtonClick}>Change Picture</button>
         </div>
      </>
   )
}

export default App
