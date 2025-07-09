import "./App.css";
import Navbar  from "./components/Navbar";
import Codeforinterview from "./components/Codeforinterview";
import AddUser from "./components/AddUser.";
import AllUser from "./components/AllUser";

import { BrowserRouter , Route, Routes} from "react-router-dom";
import AllUsers from "./components/AllUsers";


function App() {
  return (
   <BrowserRouter className="App">
    <Navbar />
    <Routes>
   <Route path="/" element={<Codeforinterview />} />
   <Route path="/add" element={<AddUser />} /> 
   <Route path="/all" element= {<AllUsers />} />
    </Routes>

   </BrowserRouter>
  );
}

export default App;
