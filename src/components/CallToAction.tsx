
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./ui/scroll-animation";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <AnimateOnScroll animation="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-examfit-blue to-examfit-purple rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Animated dots */}
            <div className="absolute inset-0">
              <div className="absolute top-12 left-[10%] w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-16 left-[20%] w-2 h-2 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Transform Your <span className="relative">
                  <span className="relative z-10">Exam Preparation?</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-white/20 rounded"></span>
                </span>
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                Join ExamFit today and gain access to comprehensive study materials, 
                practice tests, and personalized learning paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-examfit-blue hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Explore Plans
                </Button>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-1 bg-white/10 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default CallToAction;
