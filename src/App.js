import { Route,Routes } from "react-router-dom";
import DataProvider from "./contexts/context";
import Calendar from "./pages/calendar/calendar";

import Home from "./pages/home/home";
function App() {
  return (
    <DataProvider>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/calendar" element={<Calendar />} />
    </Routes>
    </DataProvider>
  );
}

export default App;
