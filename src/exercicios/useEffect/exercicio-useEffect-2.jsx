import React from 'react'
import Button from "../../components/form/buttons/Button"
import Produto from '../../produtos/Produto'

const App = () => {
          const [produto, setProduto] = React.useState(null)
          const [dadoTitulo, setDadoTitulo] = React.useState("")
          async function handleClick({ target }) {
                    setProduto(target.innerText)


          }
          React.useEffect(() => {
                    const produtoLocal = window.localStorage.getItem("produto")
                    if (produtoLocal !== null) {
                              setProduto(produtoLocal)
                    }
                    console.log(produtoLocal)
          }, [])
          React.useEffect(() => {
                    if (produto !== null)
                              window.localStorage.setItem("produto", produto)


          }, [produto])

          return (
                    <>
                              <h1>Preferencia: {produto}</h1>

                              <button onClick={handleClick}>notebook</button>
                              <br />
                              <br />
                              <button onClick={handleClick}>tablet</button>
                              <br />
                              <br />
                              <button onClick={handleClick}>smartphone</button>
                              <Produto produto={produto} />


                    </>
          )
}

export default App
