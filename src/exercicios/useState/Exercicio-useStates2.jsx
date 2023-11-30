import React from 'react'
import ExercicioProdutos from '../Exercicio-Produtos'

const App = () => {
          const [dados, setDados] = React.useState(null)
          const [carregando, setCarregando] = React.useState(null)



          async function handleClick(event) {

                    setCarregando(true)
                    const res = await fetch(
                              `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
                    )
                    const resultado = await res.json()

                    setDados(resultado)

                    setCarregando(false)



          }

          return (
                    <>
                              <button style={{ margin: '.5rem' }} onClick={handleClick}>notebook</button>
                              <button style={{ margin: '.5rem' }} onClick={handleClick}>smartphone</button>
                              <button style={{ margin: '.5rem' }} onClick={handleClick}>tablet    </button>
                              {carregando && <p>Carregando...</p>}

                              {!carregando && dados && <ExercicioProdutos dados={dados} />}
                    </>
          )
}

export default App
