import { useEffect, useState } from "react"
import PropTypes from "prop-types"

export default function Fetch({ update }) {
   const [data, setData] = useState(null)

   useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
         .then((res) => res.json())
         .then((apiData) => {
            setData(apiData.message)
         })
   }, [update])

   return (
      <>
         <div>
            <img width={600} height={600} src={data} />
         </div>
      </>
   )
}

Fetch.propTypes = {
   update: PropTypes.any.isRequired, // You can adjust the prop type as needed
}
