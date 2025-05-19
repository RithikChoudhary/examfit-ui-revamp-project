
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-gradient">ExamFit</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#exams" className="text-gray-700 hover:text-examfit-blue transition-colors">Exams</a>
          <a href="#features" className="text-gray-700 hover:text-examfit-blue transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-examfit-blue transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-examfit-blue transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-examfit-blue transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-b animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#exams" className="text-gray-700 hover:text-examfit-blue transition-colors py-2">Exams</a>
            <a href="#features" className="text-gray-700 hover:text-examfit-blue transition-colors py-2">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-examfit-blue transition-colors py-2">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-examfit-blue transition-colors py-2">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-examfit-blue transition-colors py-2">Contact</a>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
