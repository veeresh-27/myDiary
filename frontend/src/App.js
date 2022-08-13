import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Notes from "./pages/notes/index";
import Calendar from "./pages/calendar/index";
import Login from "./pages/login/index";
import Landing from "./pages/landing";
import Register from "./pages/register";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
