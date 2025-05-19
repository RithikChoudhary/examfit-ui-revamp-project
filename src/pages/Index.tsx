
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExamCategories from "@/components/ExamCategories";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  // Function to handle smooth scrolling to section when URL has hash
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element by id (without the # character)
      const element = document.getElementById(window.location.hash.substring(1));
      
      // If the element exists, scroll to it
      if (element) {
        // Wait a bit for the page to fully load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExamCategories />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
