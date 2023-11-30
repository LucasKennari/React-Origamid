import React from 'react'
import Header from '../components/pagina-Estrutura/Header'
import Footer from '../components/pagina-Estrutura/Footer'
import Produtos from '../produtos/produtos'
import Home from '../home/Home'
import Cadastro from '../cadastro/Cadastro'
import PaginaProduto from '../components/produtos/PaginaProduto'
const App = () => {
          const { pathname } = window.location
          let Pagina

          if (pathname === '/') {
                    Pagina = Home
          }

          if (pathname === '/produtos') {
                    Pagina = Produtos
          }
          if (pathname === '/cadastro') {
                    Pagina = Cadastro
          }
          if (pathname === '/Notebook' || pathname === '/Smarphone' || pathname === '/Caixa de Som') {
                    Pagina = PaginaProduto
          }

          return (
                    <>
                              <section>

                                        <Header />
                                        <Pagina />
                                        <Footer />
                              </section>
                    </>
          )
}

export default App
