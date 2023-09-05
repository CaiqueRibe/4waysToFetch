// making just one request and being able to use the data in multiple places in the project
// react query is a library that does this for us

// we dont use useEffect or useState anymore // queryClient is a global state manager which does this for us

import Dog1 from "../helper-components/Dog1"
import Dog2 from "../helper-components/Dog2"
import { QueryClientProvider, QueryClient } from "react-query"
import { Suspense } from "react"

// import { useEffect, useState } from "react"

export default function ReactQuery() {
   //    const [data, setData] = useState(null)
   const client = new QueryClient({
      defaultOptions: {
         queries: {
            suspense: true,
         },
      },
   })

   //    useEffect(() => {
   //       fetch("https://dog.ceo/api/breeds/image/random")
   //          .then((res) => res.json())
   //          .then((resp) => {
   //             setData(resp)
   //          })
   //    }, [])

   return (
      <div>
         <QueryClientProvider client={client}>
            <Suspense fallback={<h1>Loading...</h1>}>
               <Dog1 />
               <Dog2 />
            </Suspense>
         </QueryClientProvider>
      </div>
   )
}
