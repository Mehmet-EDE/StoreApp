import { useState } from 'react'
import axios from 'axios'

const usePost = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const post = async (url, apiData) => {
        try {
            setLoading(true)
            const { data: resData } = await axios.post(url, apiData)
            setData(resData)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }finally{
            setLoading(false)
            if(error){
                setError(Error)
            }
        }
    };
    return { data, loading, error, post }
}

export default usePost