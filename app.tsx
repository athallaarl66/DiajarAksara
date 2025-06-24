import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/kuisAksara"; // Pastikan path ini sesuai dengan struktur folder Anda
import Latihan from "./pages/latihan"; // Halaman latihan yang akan dituju

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/latihan" element={<Latihan />} />
      </Routes>
    </Router>
  );
}

export default App;
