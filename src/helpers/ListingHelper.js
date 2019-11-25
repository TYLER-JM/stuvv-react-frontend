import { useEffect, useState } from 'react';
import axios from 'axios'

export default function ListingHelper() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    console.log("in the use effect")
    axios.get("http://localhost:3000/listings", { withCredentials: true })
      .then(resp => {
        console.log("resp in HELPER: ", resp)
        setListings(resp.data)
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }
  }, [])


  return listings
}
