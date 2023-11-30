import React from 'react'

const Header = () => {
          return <header style={{
                    background: '#D6DBDF',
                    margin: '0px',
                    padding: '0px',
                    textDecoration: 'none',
                    borderBottom: '1px solid #212F3D',
                    marginBottom: '10px'
          }}>
                    <section>
                              <nav >
                                        <ul style={{
                                                  display: 'flex',
                                                  flexWrap: 'nowrap',
                                                  flexDirection: 'row',
                                                  justifyItems: 'space-between',
                                                  gap: '50px',
                                                  listStyleType: 'none',
                                                  justifyContent: 'space-evenly',
                                                  textDecorationLine: 'none',

                                        }}>
                                                  <li>
                                                            <a href="/">Home</a>
                                                  </li>


                                                  <li>
                                                            <a href="/produtos">Produtos</a>
                                                  </li>

                                                  <li>
                                                            <a href="/cadastro">Cadastro</a>
                                                  </li>
                                        </ul>
                              </nav>
                    </section>

          </header>

}

export default Header