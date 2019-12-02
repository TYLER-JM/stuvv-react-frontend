import { useEffect, useState } from 'react';
import axios from 'axios'

export default function RequestFormHelper(listingId) {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    console.log("in the Request form use effect...")
    // axios.get(`http://localhost:3000/requests/${listingId}`, { withCredentials: true })
    axios.get(`http://localhost:3000/requests/approved/${listingId}`, { withCredentials: true })
      .then(resp => {
        // console.log("resp in REQUEST HELPER: ", resp)
        setRequests(resp.data)
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }
  }, [])


  return requests
}