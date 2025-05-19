
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="font-bold text-2xl text-gradient mb-4 inline-block">
              ExamFit
            </a>
            <p className="text-gray-600 mb-6">
              Your trusted partner for competitive exam preparation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-examfit-blue hover:text-white transition-colors">
                f
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-examfit-blue hover:text-white transition-colors">
                t
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-examfit-blue hover:text-white transition-colors">
                in
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-examfit-blue hover:text-white transition-colors">
                ig
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Exams</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">UPSC</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">SSC</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Banking</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Engineering</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Medical</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Study Material</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Mock Tests</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Previous Papers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Current Affairs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-examfit-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ExamFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
