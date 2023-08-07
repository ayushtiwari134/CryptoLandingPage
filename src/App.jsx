import Earn from "./components/Earn";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app max-w-[2240px]">
      <Navbar />
      <Hero />
      <Featured />
      <Earn />
      <Footer />
    </div>
  );
}

export default App;
