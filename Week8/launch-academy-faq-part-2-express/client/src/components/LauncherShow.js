import React, { useState, useEffect } from "react"

const LauncherShow = (props) => {
  const [launcher, setLauncher] = useState({})
  const launcherId = props.match.params.id

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/v1/launchers/${launcherId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseData = await response.json()
      setLauncher(responseData.launcher)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>{launcher.name}</h2>
      <p>{launcher.bio}</p>
    </div>
  )
}

export default LauncherShow
