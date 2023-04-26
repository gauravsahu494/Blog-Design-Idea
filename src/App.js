import "./App.css";
import Main from "./main";
import OtherComponent from "./component/otherComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Main/>}/>
      <Route path="/expand" element={<OtherComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
