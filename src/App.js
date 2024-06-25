import "./App.css";
import { FAQS } from "./constants/faq.constants";
import FaqAccordian from "./components/atoms/FaqAccordian/FaqAccordian";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import Features from "./components/organisms/features/Features";

function App() {
  return (
    <div className="App animate-fade">
      <h1 className="text-3xl h-96">
        <div className="bg-[url('/public/background-crop.gif')] md:bg-[url('/public/background.gif')] bg-cover">
          <Header />
          <Hero />
        </div>
        <Features />
        <FaqAccordian faqData={FAQS} />
        <Footer />
      </h1>
    </div>
  );
}

export default App;
