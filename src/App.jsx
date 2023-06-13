import { Header } from "./components/Header"
import { SnacksSection } from "./components/SnacksSection"
import { GlobalStyle } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { useState } from "react"

function App() {
  const [search , setSearch] = useState('')
  const [inputSearch , setInputSerach] = useState('')
  const [cartProduct , setCartProduct] = useState([])

  return (
    <>
    <GlobalStyle/>
    <GlobalReset/>
    <Header callback={(inputSearch) => setSearch(inputSearch)} 
    inputSearch={inputSearch} 
    setInputSerach={setInputSerach}
    cartProduct={cartProduct}/>
    <main>
      <SnacksSection search={search} setCartProduct={setCartProduct}/>
    </main>
    </>
  )
}

export default App
