import { Route,Routes } from "react-router-dom";
import Calendar from "./pages/calendar/calendar";

import Home from "./pages/home/home";
function App() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
