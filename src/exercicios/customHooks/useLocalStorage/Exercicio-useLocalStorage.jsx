import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {
          const [produto, useproduto] = useLocalStorage("produto", "")
          return (
                    <div>
                              <button onClick={({ target }) => useproduto(target.innerText)}>notebook</button>
                    </div>
          )
}

export default App
