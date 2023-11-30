import React from 'react'
import { GlobalContext } from '../exercicios/useContext/useContextExemplo3-Exercicio/useContext3'
import Titulo from ".././components/titulo/Titulo"
import PrecoItensAmostra from "../components/form/precoItensAmostra/PrecoItensAmostra"
const ProdutoExercicio = () => {
          const produto = React.useContext(GlobalContext)

          if (produto === null) return null

          return (
                    <>
                              {

                                        produto.dados && produto.dados.map((item) => {
                                                  return (
                                                            <ul>
                                                                      <div>
                                                                                <Titulo texto={item.nome} />
                                                                                <li key={item.id}>{item.nome}</li>
                                                                                <img src={item.fotos[0].src} alt="" style={{ width: "150px" }} />
                                                                                <PrecoItensAmostra preco={item.preco} />
                                                                      </div>
                                                            </ul>

                                                  )
                                        })
                              }

                              <button style={{ margin: ".5rem" }} onClick={() => produto.limparDados()}>Limpar dados</button>
                              <button style={{ margin: ".5rem" }} onClick={() => produto.buscarDados()}>Buscar dados</button>
                    </>
          )
}

export default ProdutoExercicio
