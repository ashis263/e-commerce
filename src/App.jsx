import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <AnnouncementBar />
      <header className="border-b border-gray-200 py-4 px-4 md:px-8">
        <Navbar />
      </header>
    </>
  );
};

export default App;
