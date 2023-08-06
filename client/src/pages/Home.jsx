import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import ChatBubble from "../components/ChatBubble";
import Map from "../components/Map";
import TextToSpeechButton from "../components/TextToSpeechButton";


const Home = () => {
  return (
    <>
      <TextToSpeechButton/>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <Map/>
      <Contact />
      <Footer />
      <ChatBubble/>
    </>
  );
};

export default Home;
