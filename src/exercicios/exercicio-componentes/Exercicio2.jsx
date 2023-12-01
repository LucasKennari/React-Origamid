import React from 'react'


const produtos = [
          {
                    id: 1,
                    nome: 'Smartphone',
                    preco: 'R$ 2000',
                    cores: ['#29d8d5', '#252a34', '#fc3766']
          },
          {
                    id: 2,
                    nome: 'Notebook',
                    preco: 'R$ 3000',
                    cores: ['#ffd045', '#d4394b', '#f37c59']
          },
          {
                    id: 3,
                    nome: 'Tablet',
                    preco: 'R$ 1500',
                    cores: ['#365069', '#47c1c8', '#f95786']
          },
]


const App = () => {

          const dados = produtos.filter(({ preco }) => Number(preco.replace("R$ ", "")))


          return (
                    <section>
                              {dados.map(({ id, nome, preco, cores }, index) => {
                                        return (
                                                  <div key={id}>
                                                            <h1>{nome}</h1>
                                                            <p>Preco : {preco}</p>


                                                            {cores.map((item, chave) => {

                                                                      return (
                                                                                <p key={chave} style={{
                                                                                          background: item,
                                                                                          color: '#fff'
                                                                                }}>{item}</p>
                                                                      )
                                                            })}
                                                  </div>
                                        )
                              })}
                    </section>
          )

}


export default App