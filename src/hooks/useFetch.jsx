import { useEffect, useState } from "react"

export  function useFetch(url) {
    const [data, setData]= useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error , setError] = useState(null)

    useEffect(()=>{
        const useData = async()=>{
           try {
            setIsPending(true)
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(res.statusText)
            }
            const data = await res.json()

            setData(data)
            setIsPending(false)
           } catch (error) {
                setError(error.message)
                isPending(false)
           }
        }
            useData()
    }, [url])
  return{data, isPending, error}
}

