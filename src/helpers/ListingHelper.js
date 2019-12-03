import { useEffect, useState } from 'react';
import axios from 'axios'

export default function ListingHelper(term = false) {
  const [listings, setListings] = useState([])

    useEffect(() => {

      if (!term) {
        axios.get("http://localhost:3000/listings", { withCredentials: true })
          .then(resp => {
            console.log("resp in HELPER: ", resp)
            setListings(resp.data)
          })
          .catch(error => console.log(error))
      } else {
        axios.post(`http://localhost:3000/search`, { term }, {withCredentials: true})
          .then(resp => {
            console.log("the resp of the search:", resp);
            setListings(resp)
          })
          .catch(error => console.error())
      }
      
        return function cleanup() {
          console.log("all done");
        }
    }, [])

  



  return listings;
}
