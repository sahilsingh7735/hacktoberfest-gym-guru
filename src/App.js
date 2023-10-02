import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Plans from "./pages/Plans"
import JoinNow from "./pages/JoinNow";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/plans" element={<Plans/>} />
        <Route path="/join" element={<JoinNow/>} />
      </Routes>
    </>
  );
}

export default App;
