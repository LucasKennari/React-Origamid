import React from 'react'
import useFetch from './useFetch'
const App = () => {
          const { request, data, loading, error } = useFetch()

          React.useEffect(() => {
                    async function fetchData() {
                              const { response, json } = await request("https://pear-abalone-hat.cyclic.cloud/categorias")

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
                                                            <li key={item.id}>{item.descricao}</li>
                                                  )
                                        })}
                              </div>
                    )
          else return null
}

export default App
