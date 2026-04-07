import Header from "./Navbar/Header";
import "./App.css";
import Home from "./ContentPage/Home";

function App() {
  return (
    <>
      <div style={{ paddingTop: "64px" }}>
         <h2 style={{ textAlign: "center" } }>Welcome to RahiRide 🚀</h2>
        <Header />
        <Home />
       
      </div>
    </>
  );
}

export default App;
