import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFount from "./pages/NotFount";
import "./mock/productApi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
