import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <AnnouncementBar />
      <header className="border-b border-gray-200 py-4 px-4 md:px-8">
        <Navbar />
      </header>
      <main className="container mx-auto px-4 md:px-8 py-8">
        <MainSection />
      </main>
    </>
  );
};

export default App;
