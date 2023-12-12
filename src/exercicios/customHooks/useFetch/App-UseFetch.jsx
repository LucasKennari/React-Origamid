import React from 'react'
import useFetch from './useFetch'
const App = () => {
          const { request, data, loading, error } = useFetch()

          React.useEffect(() => {
                    async function fetchData() {
                              const { response, json } = await request(" https://ranekapi.origamid.dev/json/api/produto")
                              console.log(response)
                              console.log(json)

                    }
                    fetchData()
          }, [request])

          if (error) return (
                    <>
                              <img src="error404.jpg" alt="" />
                    </>
          )
          if (loading) return (
                    <>
                              <img src="/22 (1).png" alt="" />
                    </>
          )
          if (data)
                    return (
                              <div>
                                        {data.map((item) => {
                                                  return (
                                                            <li key={item.id}>{item.nome}</li>
                                                  )
                                        })}
                              </div>
                    )
          else return null
}

export default App
