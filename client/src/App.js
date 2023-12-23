import "./App.css";
import AppProvider from "./context/AppContext";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AppProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="App bg-dark min-vh-100">
        <h1 className="text-center text-white pt-4">Users CRUD Operations</h1>
        <h2 className="text-center text-white lead">
          ReactJS - Django - Sqlite
        </h2>
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
