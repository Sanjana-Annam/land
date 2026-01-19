import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chatbot from "./components/Chatbot/Chatbot";
import Hero from "./components/Hero/Hero";
import BrandSlider from "./components/BrandSlider/BrandSlider";
import CategoryCarousel from "./components/ProductShowcase/CategoryCarousel";
import ProcessFlow from "./components/ProcessFlow/ProcessFlow";
import Test from "./components/Test/Test";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

import BookSlotPage from "./pages/BookSlotPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>

      <Chatbot />

      <Routes>

        {/* MAIN LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BrandSlider />
              <CategoryCarousel />
              <ProcessFlow />
              <Test />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* NEW PAGES */}
        <Route path="/book-slot" element={<BookSlotPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
