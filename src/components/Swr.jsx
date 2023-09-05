import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((resp) => resp.json())

export default function Swr() {
   //    const [data, setData] = useState(null) // in SWR we dont need a state // swr does this for us
   // makes life easier // its doning everything for u... but its not making the fetch for you
   const { data, error } = useSWR(
      "https://dog.ceo/api/breeds/image/random11212",
      fetcher,
      {
         suspense: true, //basically loading
      }
   )
   // useEffect(() => {}, []) // use effect also built in

   if (error) {
      return <div>failed to load</div>
   }

   return (
      <>
         <div>
            {/* <img width={600} height={600} src={data?.message} /> */}
            {/* <img width={600} height={600} src={data.message} /> */}

            {data ? (
               <img
                  width={600}
                  height={600}
                  src={data.message}
                  alt="Error loading image"
               />
            ) : (
               <div>Loading...</div>
            )}
         </div>
      </>
   )
}
