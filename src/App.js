import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Person from "./components/Person/Person";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
              
                <Header />
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                </Routes> */}
                <Person />
                {/* <Footer /> */}
        </BrowserRouter>
  );
}

export default App;
