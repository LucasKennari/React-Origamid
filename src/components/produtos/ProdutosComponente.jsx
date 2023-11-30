// import React from 'react'

// const ProdutosComponente = () => {
//           return (
//                     <div>
//                               const itens = produtos.map(({nome, propriedades, imagem}, index) => {

// return (
//                               <div key={index} style={{
//                                         width: '300px',
//                                         border: '1px solid #cccc',
//                                         borderRadius: '10px',
//                                         padding: '10px',
//                                         margin: '5px',
//                                         flexBasis: 'calc(50% - 20px)',
//                                         display: 'grid',
//                                         gridtemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                                         gridGap: '10px;'

//                               }}>
//                                         <h4>{nome}</h4>
//                                         {
//                                                   propriedades.map((item, chave) => {
//                                                             return (
//                                                                       <ul key={chave}>
//                                                                                 <li key={item}>{item} </li>
//                                                                       </ul>
//                                                             )
//                                                   })
//                                         }
//                                         <img src={imagem} alt={nome} style={{ height: '100px' }} />


//                               </div >
//                               )
// })
//                     </div>
//           )
// }

// export default ProdutosComponente

import React from 'react'
import style from '../style.module/style.module.css'
import Button from '../form/buttons/Button'
import PrecoItensAmostra from '../form/precoItensAmostra/PrecoItensAmostra'
import DescricaoItensAmostra from '../labels/descricaoItensAmostra/DescricaoItensAmostra'

const ProdutosComponente = ({ nome, propriedades, imagem, descricao, preco }) => {
          return (
                    <div className={style.item}
                    >
                              <a href={nome} style={{
                                        textDecoration: 'none',
                                        color: 'inherit'
                              }}>
                                        <div className={style.prodNome}> <h4 className={style.h4Prod}>{nome}</h4></div>
                                        <ul>

                                                  {propriedades.map(item => <li>{item}</li>)}
                                        </ul>
                                        <img src={imagem} alt="" className={style.imgProd}
                                        />

                                        <div style={{
                                                  borderTop: '1px solid #212F3D',
                                                  marginTop: '5px',
                                                  display: 'grid',
                                                  alignItems: 'center'
                                        }}>
                                                  <PrecoItensAmostra preco={preco} />
                                                  <DescricaoItensAmostra descricao={descricao} />
                                        </div>
                              </a>
                    </div>
          )
}

export default ProdutosComponente
