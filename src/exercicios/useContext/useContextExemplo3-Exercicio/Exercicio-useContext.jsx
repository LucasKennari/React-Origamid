import React from 'react'
import { GlobalStorage } from './useContext3'
import ProdutoExercicio from '../../../produtos/ProdutoExercicio'
const App = () => {
          return (
                    <GlobalStorage >
                              <ProdutoExercicio />
                    </GlobalStorage >
          )
}

export default App
