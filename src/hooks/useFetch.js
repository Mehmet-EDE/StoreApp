import { useEffect, useState } from 'react'
import axios from 'axios';
function useFetch({ url }) {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 const fetchData = async () => {
  try {
   const { data: resData } = await axios.get(url)
   setData(resData)
   setLoading(false)
   setError(null)
  } catch (error) {
   setError(error.message)
   setLoading(false)
  }

 }
 useEffect(() => {
  fetchData()
 }, [])

 return { error, loading, data }
}
export default useFetch