import React from 'react'
import Titulo from '../components/titulo/Titulo'
import PrecoItensAmostra from "../components/form/precoItensAmostra/PrecoItensAmostra"
const Produto = ({ produto }) => {
          const [dados, setDados] = React.useState(null)

          React.useEffect(() => {
                    if (produto !== null) { // se existir algum dado na propriedade PRODUTOS, ele vai fazer o fetch
                              fetch(`
                    https://ranekapi.origamid.dev/json/api/produto/${produto}`).then((res) => res.json()).then((resposta) => setDados(resposta))

                    }


          }, [produto])



          if (dados === null) return null //se o dados NAO existir, n vai retornar nad nesse elemento

          return (

                    <div>
                              <Titulo texto={dados.nome} />
                              <PrecoItensAmostra preco={dados.preco} />
                    </div>
          )
}

export default Produto
