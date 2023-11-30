import React from 'react'
import UserContext from './UserContext'
import ProdutoUserContext from './ProdutoUserContext'

const App = () => {

          return (
                    <UserContext.Provider value={{ nome: "Andre" }}>
                              <ProdutoUserContext />
                    </UserContext.Provider>
          )
}
export default App
