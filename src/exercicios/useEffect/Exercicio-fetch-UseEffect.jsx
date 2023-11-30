import React from 'react'

const App = () => {
          const [dados, setDados] = React.useState(null)
          // const [contar, setContar] = React.useState(0)

          // React.useEffect(() => console.log('renderizado'), [])
          // React.useEffect(() => { document.title = "Total " + contar, [contar] })

          React.useEffect(() => {


                    fetch('https://pear-abalone-hat.cyclic.cloud/categorias').then((res) => res.json()).then((resposta) => setDados(resposta))
          }, [])

          return (
                    <div>
                              {dados && <div>{dados.map((item => {
                                        return (
                                                  <ul key={item.id}>
                                                            <li key={item.id}>{item.descricao}</li>
                                                  </ul>
                                        )
                              }))}
                              </div>}
                    </div>

          )
}

export default App
