import React from 'react'
import Titulo from '../../components/titulo/Titulo'
import PrecoItensAmostra from '../../components/form/precoItensAmostra/PrecoItensAmostra'
import ImagemProdutoAmostra from '../../components/imagem/ImagemProdutoAmostra/ImagemProdutoAmostra'
const ExercicioProdutos = ({ dados }) => {

          return (
                    <div>
                              <Titulo texto={dados.nome} />
                              <PrecoItensAmostra preco={dados.preco} />
                              <ImagemProdutoAmostra src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
                    </div>
          )
}

export default ExercicioProdutos
