import "./App.css";
import FaqAccordian from "./components/atoms/FaqAccordian/FaqAccordian";
import PictureComponent from "./components/molecules/PictureComponent/PictureComponent";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import { faqData } from "./components/atoms/constant";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl h-96">
        <div className="bg-[url('/public/notes.png')]">
          <Header />
          <Hero />
        </div>
        <PictureComponent
          imgSrc="notes1.jpeg"
          imgAlt="Placeholder Image"
          title="Note Creation and Editing"
          description="Easily create new notes and edit existing ones with options for text formatting, bullet points, numbering, and more."
        />
        <PictureComponent
          imgSrc="notes2.jpeg"
          imgAlt="Placeholder Image"
          title="Cloud Sync"
          description="Synchronization across devices (e.g., smartphones, tablets, computers) to access notes from anywhere and ensure changes are updated in real-time."
          reverse
        />
        <PictureComponent
          imgSrc="notes3.jpeg"
          imgAlt="Placeholder Image"
          title="Collaboration Tools"
          description="Share notes with others for collaborative work, with options for viewing or editing permissions."
        />
        <PictureComponent
          imgSrc="notes4.jpeg"
          imgAlt="Placeholder Image"
          title="Reminder and Notification System"
          description="Set reminders and receive notifications for important notes or tasks to stay organized and on track."
        />
        <FaqAccordian faqData={faqData} />
        <Footer />
      </h1>
    </div>
  );
}

export default App;
