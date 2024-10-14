import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MaterialReactTable from "./pages/MRTs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* for unhandled route */}
        <Route path="*" element={<>Page not found</>} />

        {/* routes */}
        <Route path="/" element={<Navigate to={"/material-react-table"} />} />
        <Route path="/material-react-table" element={<MaterialReactTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
