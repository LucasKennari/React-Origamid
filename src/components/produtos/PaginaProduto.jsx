import produtos from "../../bancoDeDados/produtos"
import Button from "../form/buttons/Button"
import Titulo from "../titulo/Titulo"

const PaginaProduto = () => {
          const { pathname } = window.location
          const produto = produtos.filter(({ nome }) => nome === pathname.replace("/", ""))

          return (
                    <>
                              {produto.map(({ imagem, descricao, nome, preco, propriedades }) => {
                                        return (
                                                  <div style={{
                                                            display: 'flex',
                                                            alignItems: 'space-between',
                                                            flexDirection: 'row',
                                                            flexWrap: 'nowrap',
                                                            justifyContent: 'space-evenly'
                                                  }}>

                                                            <img src={imagem} alt="" />
                                                            <div style={{
                                                                      border: '1px solid #212F3D',
                                                                      padding: '10px',
                                                                      borderRadius: '10px',
                                                                      height: '350px'
                                                            }}>
                                                                      <Titulo texto={nome} />
                                                                      <p>{preco}</p>
                                                                      {propriedades.map((itens) => {
                                                                                return (<p>{itens}</p>)
                                                                      })}
                                                                      <p>{descricao}</p>
                                                                      <Button texto='comprar' style={{
                                                                                marginTop: "5px",
                                                                                backgroundColor: '#11ff7c',
                                                                                marginRight: '10px',
                                                                                borderRadius: '5px'
                                                                      }}
                                                                      />
                                                                      <Button texto='Adicionar ' style={{
                                                                                marginTop: "5px",
                                                                                backgroundColor: '#f31519',
                                                                                color: '#FFFF',
                                                                                borderRadius: '5px'
                                                                      }}
                                                                      />
                                                            </div>
                                                  </div>
                                        )
                              })}
                    </>
          )
}
export default PaginaProduto