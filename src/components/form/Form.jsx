import React from 'react'
import Input from './input/Input'
import Button from './buttons/Button'

const FormsCadastro = () => {
          return (
                    <form style={{
                              border: '1px solid #bbbb', padding: '10px',
                              borderRadius: '10px',
                              width: '400px'
                    }}>
                              <p>

                                        <Input id="usuario" label="Uuario" required />
                              </p>
                              <p>

                                        <Input id="email" label="Email" required />
                              </p>
                              <p>

                                        <Input id="senha" label="Senha" type="password" />
                              </p>
                              <Button texto='Cadastrar' />
                              <label htmlFor="">Possui uma conta?</label>
                              <Button texto='Logar' />
                    </form>
          )
}

export default FormsCadastro
