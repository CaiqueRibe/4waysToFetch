import { useEffect, useState } from "react"
import axios from "axios"

export default function Axios() {
   const [data, setData] = useState(null)

   useEffect(() => {
      axios.get("https://dog.ceo/api/breeds/image/random").then((resp) => {
         setData(resp.data.message)
      })
   }, [])
   return (
      <div>
         <>
            <div>
               <img width={600} height={600} src={data} />
            </div>
         </>
      </div>
   )
}
