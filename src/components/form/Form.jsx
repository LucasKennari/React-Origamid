import React from 'react'
import Input from './input/Input'
import useFetch from "../../exercicios/customHooks/useFetch/useFetch"
const FormsCadastro = () => {

          const { data, error, loading, request } = useFetch()
          const [nome, setNome] = React.useState("")
          const [email, setEmail] = React.useState("")
          const [senha, setSenha] = React.useState("")
          const form = {
                    nome,
                    email,
                    senha
          }
          const [response, setResponse] = React.useState("")
          const [botaoValor, setBotaoValor] = React.useState("Registrar")
          async function handleSubmit(e) {
                    e.preventDefault()
                    const { response, json } = await request("https://pear-abalone-hat.cyclic.cloud/usuario", {
                              method: "POST",
                              headers: {
                                        'Content-Type': "application/json",
                              },
                              body: JSON.stringify(form)
                    })
                    setResponse(response)
                    setTimeout(() => {
                              setBotaoValor(<img style={{
                                        width: "100"
                              }} src="Iphone-spinner-2.gif" alt="" />)
                    }, [1000])

          }



          return (
                    <form style={{
                              border: '1px solid #9741E8', padding: '10px',
                              borderRadius: '10px',
                              width: '400px'
                    }}
                              onSubmit={handleSubmit}
                    >


                              <Input id="nome"
                                        label="Nome"
                                        value={nome}
                                        onChange={({ target }) => setNome(target.value)}
                                        required />


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
                              }} onClick={handleLoad}>{botaoValor}</button>
                              <br />
                              <label style={{
                                        display: 'flex',
                                        justifyItems: 'end',
                                        borderBottom: "1px solid #9741E8",
                                        " flex-wrap": "nowrap"
                              }} htmlFor="">Possui uma conta?</label>

                    </form>
          )
}

export default FormsCadastro
