import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Register />
    </div>
  );
}

export default App;
