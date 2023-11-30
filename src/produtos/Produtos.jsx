import React from 'react'
import produtos from '../bancoDeDados/produtos'
import Titulo from '../components/titulo/Titulo'
import ProdutosComponente from '../components/produtos/ProdutosComponente'
const Produtos = ({ style }) => {



          return (
                    <section style={{
                              background: '#D6DBDF',
                              border: '1px solid #212F3D',
                              borderRadius: '4px',
                              padding: '10px',

                    }}>
                              <Titulo texto='Produtos' />
                              {produtos.map((produto) => {

                                        return (
                                                  <>

                                                            < ProdutosComponente key={produto.nome} {...produto} />

                                                  </>
                                        )

                              })}
                    </section >
          )
}

export default Produtos
