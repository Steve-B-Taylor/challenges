import React, { useState, useEffect } from "react"

const Locationshow = (props) => {
  const [location, setLocation] = useState({ adventures: [] })

  useEffect(() => {
    const locationId = props.match.params.id
    async function getLocation() {
      try {
        const response = await fetch(`/api/v1/locations/${locationId}`)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
        const responseBody = await response.json()
        console.log(`LocationShow.getLocation: ${responseBody}`)
        setLocation(responseBody.location)
      } catch (err) {
        console.error(`Error in Fetch: ${err.message}`)
      }
    }
    getLocation()
  }, [])

  useEffect(() => {
    getLocation()
  }, [])

  const adventureListItems = location.adventures.map((adventure) => {
    return <li key={adventure.id}>{adventure.title}</li>
  })

  return (
    <>
      <h1>{location.name}</h1>
      <h2>Adventures:</h2>
      <ul>{adventureListItems}</ul>
    </>
  )
}

export default Locationshow
