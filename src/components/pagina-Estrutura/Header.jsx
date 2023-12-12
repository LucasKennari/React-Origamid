import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
          return <header style={{
                    background: '#9741E8',
                    margin: '0px',
                    padding: '0px',
                    textDecoration: 'none',
                    borderBottom: '1px solid #212F3D',
                    marginBottom: '10px',

                    borderRadius: "10px"
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
                                                  color: "#CCC"
                                        }}>
                                                  <NavLink to="/" end>
                                                            Home
                                                  </NavLink>


                                                  <NavLink to="sobre">
                                                            Sobre
                                                  </NavLink>

                                                  <NavLink to="cadastro">
                                                            Cadastro
                                                  </NavLink>
                                                  <NavLink to="login">
                                                            Login
                                                  </NavLink>
                                                  <NavLink to="perfil">
                                                            Perfil
                                                  </NavLink>
                                        </ul>
                              </nav>
                    </section>

          </header>

}

export default Header