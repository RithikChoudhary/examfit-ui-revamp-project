
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./ui/scroll-animation";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <AnimateOnScroll animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Master Your Exams With <span className="text-gradient bg-clip-text bg-gradient-to-r from-examfit-blue to-examfit-purple">Confidence</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Personalized preparation paths, expert-curated content, and analytics to help you ace any competitive exam.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-examfit-blue to-examfit-purple text-white hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-examfit-blue text-examfit-blue hover:bg-examfit-blue/10 hover:scale-105 transition-transform duration-300"
                >
                  Explore Exams
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-examfit-blue to-examfit-purple border-2 border-white flex items-center justify-center text-white text-xs shadow-md">
                    JS
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-examfit-purple to-examfit-pink border-2 border-white flex items-center justify-center text-white text-xs shadow-md">
                    KP
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-examfit-pink to-examfit-lightblue border-2 border-white flex items-center justify-center text-white text-xs shadow-md">
                    MR
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-examfit-blue text-xs shadow-md">
                    +27k
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">30,000+</span> students trust ExamFit
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="md:w-1/2">
            <AnimateOnScroll animation="slide-up-right" duration={1000} delay={300}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-examfit-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-examfit-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-examfit-blue/5 rounded-full"></div>
                  <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-examfit-purple/5 rounded-full"></div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 mb-4 border border-gray-100 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <span className="bg-examfit-blue/10 text-examfit-blue w-8 h-8 flex items-center justify-center rounded-full mr-2">🏛️</span>
                      UPSC Civil Services
                    </h3>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-examfit-blue to-examfit-purple h-full rounded-full" style={{ width: "68%", transition: "width 1.5s ease-in-out" }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white p-3 rounded-lg border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-examfit-blue">246</div>
                      <div className="text-xs text-gray-500">Tests taken</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-examfit-purple">18</div>
                      <div className="text-xs text-gray-500">Topics mastered</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-examfit-pink">84%</div>
                      <div className="text-xs text-gray-500">Avg. score</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-examfit-lightblue">Top 5%</div>
                      <div className="text-xs text-gray-500">Rank</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-examfit-blue to-examfit-purple hover:from-examfit-darkblue hover:to-examfit-purple transition-all duration-300 shadow-md hover:shadow-lg">
                    Continue Preparation
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
