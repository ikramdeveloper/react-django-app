import "./App.css";
import AppProvider from "./context/AppContext";
import Home from "./components/Home";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
      ;
    </AppProvider>
  );
}

export default App;
