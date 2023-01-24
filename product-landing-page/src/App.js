import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import CardText from "./components/CardText";
import Cards from "./components/Cards";
import Text from "./components/Text";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div class="container my-5">
        <Banner />
        <CardText />
        <Cards />
      </div>
      <Text />
      <Form />
      <Footer />
    </div>
  );
}
export default App;
