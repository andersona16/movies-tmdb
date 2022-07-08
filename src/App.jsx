import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Movies lib</h2>
      <Outlet />
    </div>
  );
}

export default App;
