import { BrowserRouter , Route, Routes,Navigate } from "react-router-dom";
import LoginPAge from "./Pages/LoginPAge";
import DasHboard from "./Pages/DasHboard";
import ErrorBoundary from "./Pages/ErrorBoundary";
import "./App.css";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<ErrorBoundary><LoginPAge /></ErrorBoundary>} />
        <Route path="/dashboard/:area/:department" element={<ErrorBoundary><DasHboard /></ErrorBoundary>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
