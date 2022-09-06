import React, { useState, useEffect } from 'react'

import Homepage from './Homepage'
import Loading from './Loading'

const App = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [loading])

  return (
    loading ? <Loading /> : <Homepage /> 
  )
}

export default App
