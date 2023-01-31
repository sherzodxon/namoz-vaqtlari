import { Route,Routes } from "react-router-dom";
import DataProvider from "./contexts/context";
import Calendar from "./pages/calendar/calendar";
import Home from "./pages/home/home";
import Names from "./pages/names/names";
import Mornings from "./pages/zikr/mornings";
import Zikr from "./pages/zikr/zikr";
import Duolar from "./pages/zikr/duolar";
import Evening from "./pages/zikr/evening";
import Zikrlar from "./pages/zikr/zikrlar"
import Name from "./pages/name/name";
import TonggiZikrlar from "./pages/zikr/tonggi-zikrlar/tonggi-zikrlar";
import QuronPage from "./pages/quron/quron-page";
import Suralar from "./pages/quron/suralar";
import Sura from "./pages/quron/sura"

function App() {
  return (
    <DataProvider>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/calendar" element={<Calendar />} />
     <Route path="/names" element={<Names />}/>
     <Route path={`/name/:id`} element={<Name />} />
     <Route path="/zikr" element={<Zikr/>} />
     <Route path="/tonggi-zikrlar" element={<Mornings/>} />
     <Route path="/duolar" element={<Duolar />} />
     <Route path="/kechki-zikrlar" element={<Evening />} />
     <Route path="/barcha-zikrlar"element={<Zikrlar/>} />
     <Route path={`/tonggi-zikrlar/:id`} element={<TonggiZikrlar />} />
     <Route path="/quron-bosh-sahifa" element={<QuronPage/>}/>
     <Route path="/suralar" element={<Suralar />} />
     <Route path={`/sura/:number`} element={<Sura />} />
    </Routes>
    </DataProvider>
  );
}

export default App;
