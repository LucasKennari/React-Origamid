import React from 'react'

const App = () => {
          const [carrinho, setCarrinho] = React.useState(0)
          const [notificacao, setNotificacao] = React.useState(null)

          const timeOutRef = React.useRef()
          function handleClick() {
                    setCarrinho(carrinho + 1)
                    setNotificacao("item adicionado ao carrinho")
                    clearTimeout(timeOutRef.current)
                    timeOutRef.current = setTimeout(() => {
                              setNotificacao(null)
                    }, 1000)
          }
          return (
                    <div>
                              <p>{notificacao}</p>
                              <button onClick={handleClick}>Adicionado no carrinho {carrinho}</button>
                    </div>
          )
}

export default App
