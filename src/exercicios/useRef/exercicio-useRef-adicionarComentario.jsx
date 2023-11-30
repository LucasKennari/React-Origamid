import React from 'react'

const App = () => {
          const [comentarios, setComentarios] = React.useState(["teste 1", "teste 2"])
          const [input, setInput] = React.useState("")

          const inputElement = React.useRef()

          function handleClick() {
                    setComentarios([...comentarios, input])
                    setInput("")
                    inputElement.current.focus()
          }

          return (
                    <div>
                              <ul>
                                        {
                                                  comentarios.map((comentario) => {
                                                            return (
                                                                      <li key={comentario}>{comentario}</li>
                                                            )
                                                  })
                                        }
                              </ul>
                              <input type="text"
                                        ref={inputElement}
                                        value={input}
                                        onChange={({ target }) => setInput(target.value)} />

                              <button style={{ marginTop: ".5rem" }}
                                        onClick={handleClick}>Adicionar novo item</button>
                    </div>
          )
}

export default App
