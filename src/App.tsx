import Router from "./routes"
import { store } from "./store"
import { Provider } from "react-redux"
import "@/assets/index.css"

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
