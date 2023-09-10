import { Route } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
