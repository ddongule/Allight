import "./App.css";
import Diary from "./Pages/Diary";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
