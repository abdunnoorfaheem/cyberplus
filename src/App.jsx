import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import {Routes ,Route} from "react-router-dom";
import Pages from "./components/pages/Pages";
import Support from "./components/pages/Support";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/pages" element={<Pages/>}/>
         <Route path="/support" element={<Support/>}/>
         <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
