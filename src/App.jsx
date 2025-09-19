import Navbar1 from "./components/Navbar1";
import HomePage1 from "./components/HomePage1";
import Thirdui from "./components/Thirdui";
import FourthUi from "./components/FourthUi";
import FifthUi from "./components/FifthUI";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth">

      <Navbar1 />

      <section id="home">
        <HomePage1 />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      </section>

      <section id="about">
        <Thirdui />
      </section>

      <section id="services">
        <FourthUi />
      </section>

      <section id="blog">
        <FifthUi />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
