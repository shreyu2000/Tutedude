import Navbar from "./components/Navbar/Navbar"
import Overview from "./components/Overview/Overview"
import Curriculum from "./components/Curriculum/Curriculum.jsx"
import Internship from "./components/Internship/Internship.jsx"
import Refund from "./components/Refund/Refund.jsx"
import Companies from "./components/Companies/Companies.jsx"

function App() {

  return (
    <>
     <Navbar/>
     <Overview/>
     <Curriculum/>
     <Refund/>
     <Companies/>
     <Internship/>
    </>
  )
}

export default App
