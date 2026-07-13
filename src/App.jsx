import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyPage from "./pages/PropertyPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertyPage />} />
      </Routes>
    </>
  );
}

export default App;
