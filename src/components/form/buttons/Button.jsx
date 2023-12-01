import React from 'react'
import style from '../../style.module/style.module.css'
import Titulo from "../../titulo/Titulo"

const Button = async ({ texto, style, }) => {

          const [Produto, setProduto] = React.useState(null)
          const [dadoTitulo, setDadoTitulo] = React.useState("")

          async function handleClick(e) {
                    window.localStorage.clear()
                    const url = await fetch(`
                 https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`)
                    const resultado = await url.json()
                    setProduto(resultado)

          }

          React.useEffect(() => {
                    { Produto && window.localStorage.setItem("produto", Produto.nome) }


          }, [Produto])






          return (
                    <>

                              <Titulo texto={`Produto ${dadoTitulo && dadoTitulo.nome}`} />
                              <button onClick={handleClick} style={style}>
                                        {texto}
                              </button>
                    </>
          )
}
{/* <Button texto='comprar' style={{
                                                  marginTop: "5px",
                                                  backgroundColor: '#11ff7c'
                                        }}
                                        />
                                        <Button texto='Adicionar ' style={{
                                                  marginTop: "5px",
                                                  backgroundColor: '#f31519',
                                                  color: '#FFFF'
                                        }}
                                        /> */}
export default Button
