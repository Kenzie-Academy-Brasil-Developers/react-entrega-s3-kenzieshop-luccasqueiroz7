import "./App.css";
import Header from "./components/Header";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
