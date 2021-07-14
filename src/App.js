import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Services from "./Components/Services";
import DemoP from "./Components/DemoP"
import Team from "./Components/Team";
import ClientsR from "./Components/ClientsR"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      
      <Nav />
      <Header />
      <Services />
      <DemoP />
      <Team />
      <ClientsR />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
