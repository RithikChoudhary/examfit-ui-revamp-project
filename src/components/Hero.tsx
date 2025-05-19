
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./ui/scroll-animation";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <AnimateOnScroll animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Master Your Exams With <span className="text-gradient">Confidence</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Personalized preparation paths, expert-curated content, and analytics to help you ace any competitive exam.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-examfit-blue hover:bg-examfit-darkblue text-white hover:scale-105 transition-transform duration-300">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-examfit-blue text-examfit-blue hover:bg-examfit-blue/10 hover:scale-105 transition-transform duration-300">
                  Explore Exams
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-examfit-blue flex items-center justify-center text-white text-xs">
                    JS
                  </div>
                  <div className="w-8 h-8 rounded-full bg-examfit-purple flex items-center justify-center text-white text-xs">
                    KP
                  </div>
                  <div className="w-8 h-8 rounded-full bg-examfit-pink flex items-center justify-center text-white text-xs">
                    MR
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">30,000+</span> students trust ExamFit
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="md:w-1/2">
            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-examfit-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-examfit-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
                <div className="relative bg-white rounded-xl shadow-xl p-6 border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 hover:bg-gray-50 transition-colors duration-300">
                    <h3 className="font-semibold text-lg mb-2">UPSC Civil Services</h3>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-examfit-blue to-examfit-purple h-2 rounded-full animate-pulse" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-examfit-blue">246</div>
                      <div className="text-xs text-gray-500">Tests taken</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-examfit-purple">18</div>
                      <div className="text-xs text-gray-500">Topics mastered</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-examfit-pink">84%</div>
                      <div className="text-xs text-gray-500">Avg. score</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-examfit-lightblue">Top 5%</div>
                      <div className="text-xs text-gray-500">Rank</div>
                    </div>
                  </div>
                  <Button className="w-full bg-examfit-blue hover:bg-examfit-darkblue transition-colors duration-300">Continue Preparation</Button>
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
