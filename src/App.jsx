import { HashRouter, Route, Routes } from "react-router-dom";
import HomeV10 from "./pages/HomeV10";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeV10 />} />
        
      </Routes>
    </HashRouter>
  );
}

export default App;
