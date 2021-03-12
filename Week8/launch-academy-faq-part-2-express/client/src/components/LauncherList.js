import React, { useState, useEffect } from "react"

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])

  const getLaunchers = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const data = await response.json()
      setLaunchers(data.launchers)
      console.log(`Body: ${data}`)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getLaunchers()
  }, [])

  const launcherList = launchers.map((launcher) => {
    return <li key={launcher.id}>{launcher.name}</li>
  })

  return (
    <div>
      <ul>{launcherList}</ul>
    </div>
  )
}

export default LauncherList
