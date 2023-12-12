import React from 'react'
import Input from '../form/input/Input'
import useFetch from "../../exercicios/customHooks/useFetch/useFetch"
import { useNavigate } from 'react-router-dom'
const FormsLogin = () => {

          const navigate = useNavigate()

          const { data, error, loading, request } = useFetch()
          const [nome, setNome] = React.useState("")
          const [email, setEmail] = React.useState("")
          const [senha, setSenha] = React.useState("")
          const form = {
                    email,
                    senha
          }
          const [response, setResponse] = React.useState("")
          const [botaoValor, setBotaoValor] = React.useState("Logar")
          async function handleSubmit(e) {
                    e.preventDefault()
                    const { response, json } = await request("https://pear-abalone-hat.cyclic.cloud/login", {
                              method: "POST",
                              headers: {
                                        'Content-Type': "application/json",
                              },
                              body: JSON.stringify(form)
                    })
                    !response && setTimeout(() => {
                              setBotaoValor(<img style={{
                                        width: "30px"
                              }} src="Iphone-spinner-2.gif" alt="" />)
                    }, [500])

                    setResponse(response)
                    console.log(response.status)
                    if (response.ok === true && response.status === 200) {
                              return navigate("perfil")
                    }

          }



          return (
                    <form style={{
                              border: '1px solid #9741E8', padding: '10px',
                              borderRadius: '10px',
                              width: '400px'
                    }}
                              onSubmit={handleSubmit}
                    >





                              <Input id="email"
                                        label="Email"
                                        type="email"
                                        value={email}
                                        onChange={({ target }) => setEmail(target.value)}
                                        required />


                              <Input id="senha" label="Senha"
                                        value={senha}
                                        type="password"
                                        onChange={({ target }) => setSenha(target.value)}
                                        required />

                              {response && response.ok && <p>Conta Criada</p>}

                              <button style={{
                                        backgroundColor: "#9741E8",
                                        color: "#E8EEFF",
                                        borderRadius: "5px"
                              }} >{botaoValor}</button>
                              <br />
                              <label style={{
                                        display: 'flex',
                                        justifyItems: 'end',
                                        borderBottom: "1px solid #9741E8",
                                        " flex-wrap": "nowrap"
                              }} htmlFor="">Crie uma Conta</label>

                    </form>
          )
}

export default FormsLogin
