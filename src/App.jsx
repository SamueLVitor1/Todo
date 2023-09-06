import { GlobalStyles } from "./Global Styles/styles"
import { AddTasks } from "./components/AddTasks"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <AddTasks />
      <GlobalStyles />
    </>
  )
}

export default App
