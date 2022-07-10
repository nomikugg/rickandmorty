import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Projects from "./pages/Projects";
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
