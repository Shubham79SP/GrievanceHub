import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Chatbot from "./components/Chatbot"
import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
        <Chatbot />
      </div>
    </BrowserRouter>
  )
}

export default App
