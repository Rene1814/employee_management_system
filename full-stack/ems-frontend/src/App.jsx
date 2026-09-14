import HeaderComponent from "./components/HeaderComponent"
import ListEmployeeComponent from "./components/ListEmployeeComponent"
import "../src/assets/styles.css"
import FooterComponent from "./components/FooterComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* // http://localhost:5173 */}
        <Route path="/" element={<ListEmployeeComponent />} />
        {/* // http://localhost:5173/employees */}
        <Route path="/employees" element={<ListEmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
