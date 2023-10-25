import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Login/Home/Home";
import Login from "./Components/Login/Login";
import Product from "./Components/Login/Product/Product";
import Book from "./Components/Login/Book/Book";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Product" element={<Product/>}></Route>
      <Route path="/Book" element={<Book/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
