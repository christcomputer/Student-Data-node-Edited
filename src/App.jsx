import Form from "./Components/Form"
// import GoogleSheetData from "./Components/GetData"
import Header from "./Components/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<GoogleSheetData />} /> */}
        <Route path="/Student-Data-node-Edited/" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App
