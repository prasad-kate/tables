import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Table1 from "./pages/MRTs/Table-1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* for unhandled route */}
        <Route path="*" element={<>Page not found</>} />

        {/* routes */}
        <Route path="/" element={<Home />} />
        <Route path="/table-1" element={<Table1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
