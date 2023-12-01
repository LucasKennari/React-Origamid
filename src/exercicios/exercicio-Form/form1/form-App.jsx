import React from 'react'

const App = () => {
          const [nome, setNome] = React.useState("")
          const [email, setEmail] = React.useState("")

          function handleSubmit(e) {
                    e.preventDefault()

          }

          return (
                    <form onSubmit={handleSubmit}>
                              <label htmlFor="nome">Nome:</label>
                              <input type="text"
                                        id='nome'
                                        value={nome}
                                        onChange={({ target }) => setNome(target.value)}
                                        placeholder='Nome' />
                              {nome}
                              <label htmlFor="email">Email:</label>
                              <input type="email"
                                        id='email'
                                        value={email}
                                        onChange={({ target }) => setEmail(target.value)}
                                        placeholder='Email' />
                              {email}
                              <button >Registrar</button>
                    </form>
          )
}

export default App
