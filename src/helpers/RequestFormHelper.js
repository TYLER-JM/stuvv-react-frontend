import { useEffect, useState } from 'react';
import axios from 'axios'

export default function RequestFormHelper(listingId) {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/requests/approved/${listingId}`, { withCredentials: true })
      .then(resp => {
        setRequests(resp.data)
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }
  }, [])


  return requests
}