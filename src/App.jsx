import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter"
import { ProductsProvider } from "./contexts/ProductsContext";

const App = () => {
  return (
    <>
      <AnnouncementBar />
      <ProductsProvider>
        <header className="border-b border-gray-200 py-4 px-4 md:px-8">
          <Navbar />
        </header>
        <main className="container mx-auto px-4 md:px-8 py-8">
          <MainSection />
        </main>
        <Newsletter />
        <footer className="bg-white py-12 px-4 md:px-8">
          <Footer />
        </footer>
      </ProductsProvider>
    </>
  );
};

export default App;
