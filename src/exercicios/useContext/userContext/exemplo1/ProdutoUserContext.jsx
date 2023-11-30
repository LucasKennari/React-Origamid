import React from 'react'

import { GlobalContext } from '../../userContextExemplo2/GlobalContext'

const ProdutoUserContext = () => {
          const global = React.useContext(GlobalContext)


          return (
                    <div>
                              <h1>Produto: {global.contar}</h1>

                              <button onClick={() => global.adicionarUm()}>+ 1</button>
                    </div>
          )
}

export default ProdutoUserContext
