import React from "react";

export const GlobalContext = React.createContext()


export const GlobalStorage = ({ children }) => {
          const [dados, setDados] = React.useState(null)

          React.useEffect(() => {
                    fetch("https://ranekapi.origamid.dev/json/api/produto/").then((res) => res.json()).then((res) => setDados(res))

          }, [])

          function limparDados() {
                    setDados(dados => null)
          }
          function buscarDados() {
                    fetch("https://ranekapi.origamid.dev/json/api/produto/").then((res) => res.json()).then((res) => setDados(res))
                    console.log(dados)

          }
          return (
                    <GlobalContext.Provider value={{ dados, limparDados, buscarDados }}>
                              {children}
                    </GlobalContext.Provider>
          )
}