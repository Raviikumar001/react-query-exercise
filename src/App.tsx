import axios from "axios"
import { useQuery } from "react-query"

function App() {
 
 const queryInfo = useQuery('pokemon', ()=> 
 axios.get(`https://pokeapi.co/api/v2/pokemon`).then(res=> res.data.results))

 console.log(queryInfo)

  return queryInfo.isLoading ? (
    'loading'
  ): (
    <>
      {queryInfo.data?.map((data)=> (
        <div key={data.name}>
          {data.name}
        </div>
      ))}
    </>
  )
}

export default App
