import TestimonialItem from "./components/TestimonialItem";
import Download from "./Sections/Download";
import Faq from "./Sections/Faq";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";
import Testimonials from "./Sections/Testimonials";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
