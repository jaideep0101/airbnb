import "./App.css";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Regsiter"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
     <Route path="/" element={<Layout/>}>
      <Route  index element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;
