import React from 'react'
import Modal from '../../components/modal/Modal'
import ButtonModal from '../../components/modal/ButtonModal'

const App = () => {
          // const [ativo, setAtivo] = React.useState(false)
          // const [dados, setDados] = React.useState(
          //           {
          //                     nome: 'Lucas',
          //                     idade: '26'
          //           })

          // === É A MESMA COISA  QUE === //
          // const ativoHook = React.useState(false)
          // const ativoValor = ativoHook[0]
          // const atualizaValor = ativoHook[1]

          const [modal, setModal] = React.useState(false)
          const [itens, setItens] = React.useState(['item 1 '])
          const [contar, setContar] = React.useState(1)
          // function handleClick() {
          //           setAtivo(!ativo)
          //           setDados({ ...dados, faculdade: 'Possui Faculdade' })
          // }

          function handleClick() {

                    setContar((contar) => {
                              return contar + 1
                    })
                    setItens((itens) => [...itens, 'item' + (contar + 1)])

          }



          // <div>
          //           <p>{itens}</p>
          //           <button onClick={handleClick}>Clicar</button>
          // </div>

          //           <div>
          //                     <p>{dados.nome}</p>
          //                     <p>{dados.idade}</p>
          //                     <p>{dados.faculdade}</p>
          //                     <button onClick={handleClick}>{ativo ? ' Ativo' : ' Inativo'}</button >
          //           </div>
          // 

          return (
                    <div>

                              {/* {itens.map((item) => {
                                        return (
                                                  <li key={item}>{item}</li>
                                        )
                              })}
                              <button onClick={handleClick}>{contar}</button> */}

                    </div>



          )
}

export default App
