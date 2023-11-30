import React from 'react'
import { GlobalStorage } from './GlobalContext'
import ProdutoUserContext from "../userContext/exemplo1/ProdutoUserContext"

const App = () => {
          return (
                    <GlobalStorage >
                              <ProdutoUserContext />
                    </GlobalStorage>
          )
}

export default App
