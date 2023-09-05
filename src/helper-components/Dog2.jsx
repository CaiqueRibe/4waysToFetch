// import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getDog } from "./Fetchers"

export default function Dog2() {
   //    const [data, setData] = useState(null)

   const { data } = useQuery("dog", getDog())

   //    useEffect(() => {
   //       fetch("https://dog.ceo/api/breeds/image/random")
   //          .then((res) => res.json())
   //          .then((apiData) => {
   //             setData(apiData.message)
   //          })
   //    })

   return (
      <div>
         <img width={600} height={600} src={data?.message} />
      </div>
   )
}
