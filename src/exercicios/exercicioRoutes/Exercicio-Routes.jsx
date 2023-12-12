import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../../home/Home"
import Cadastro from '../../cadastro/Cadastro'
import Sobre from '../../sobre/Sobre'
import FormsLogin from "../../components/form-Login/FormLogin"

import Header from "../../components/pagina-Estrutura/Header"
import Footer from "../../components/pagina-Estrutura/Footer"
import NotFound from '../../NotFound/NotFound'
import Perfil from '../../Perfil/Perfil'
const App = () => {

          return (
                    <BrowserRouter>
                              <Header />
                              <Routes>
                                        <Route path='/' element={<Home />} />
                                        <Route path='sobre' element={<Sobre />} />
                                        <Route path='cadastro' element={<Cadastro />} />
                                        <Route path='login' element={<FormsLogin />} />
                                        <Route path='perfil' element={<Perfil />} />
                                        <Route path='*' element={<NotFound />} />
                              </Routes>
                              <Footer />
                    </BrowserRouter>
          )
}

export default App
