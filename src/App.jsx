import { Header } from "./components/Header"
import { SnacksSection } from "./components/SnacksSection"
import { GlobalStyle } from "./styles/global"
import { GlobalReset } from "./styles/reset"

function App() {

  return (
    <>
    <GlobalStyle/>
    <GlobalReset/>
    <Header/>
    <main>
      <SnacksSection/>
    </main>
    </>
  )
}

export default App
