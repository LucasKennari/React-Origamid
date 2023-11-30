import React from "react";

// 1' Primeiro se cria um contexto
// // 2'depois é exportado

export const GlobalContext = React.createContext()

// // // 3' tambéem da pra criar o PROVIDER dentro de um arquivo so, mantendo o organizado
// 4 o storage eh como se fosse um bau pra colocar DADOS, sendo um COMPONENTE de REACT

// 5 'E Dentro dele ja vai retornara um PROVIDER

// // 6 e dentro dele é passado o children, que é das props
export const GlobalStorage = ({ children }) => {

          const [contar, setContar] = React.useState(0)
          function adicionarUm() {
                    setContar((contar) => contar + 1)
          }
          return (
                    <GlobalContext.Provider value={{ contar, adicionarUm }} >
                              {children}
                    </GlobalContext.Provider>
          )
}
// // 7 pois quando for no App, podera jogar a informacao dentro do children'