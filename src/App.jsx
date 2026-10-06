// import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";


import hero1 from "./assets/hero.png";

function App() {
    return (
        <>
            <Header />
            <Hero container={true} name="Shifa"  heading= "Welcome To Recipe Website" pic1 = {hero1} />
            <Hero container={false} name="Shifa"  />
            <Hero container={true} name="Shifa"  heading= "About Us"/>
        </>
    );
}

export default App;