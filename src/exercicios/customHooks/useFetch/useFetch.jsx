import React from 'react'

const useFetch = () => {

          const [data, setData] = React.useState(null) // estado para segurar dados
          const [error, setError] = React.useState(null) // estado para erro
          const [loading, setloading] = React.useState(null) // estado para loading

          const request = React.useCallback(async (url, options) => {
                    let response
                    let json
                    try {
                              setError(null)
                              setloading(true)
                              response = await fetch(url, options)
                              json = await response.json()
                    } catch (error) {
                              json = null
                              setError(error)
                    } finally {
                              setData(json)
                              setloading(false)
                              return { response, json }
                    }
          }, [])

          return { data, error, loading, request }
}

export default useFetch
