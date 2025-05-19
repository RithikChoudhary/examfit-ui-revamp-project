
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./ui/scroll-animation";

const features = [
  {
    icon: "📚",
    title: "Comprehensive Study Materials",
    description: "Access well-structured content covering complete syllabi for all major competitive exams."
  },
  {
    icon: "📝",
    title: "Practice Tests & Quizzes",
    description: "Take mock tests designed to simulate the real exam environment with detailed analytics."
  },
  {
    icon: "🎯",
    title: "Personalized Learning",
    description: "Get customized study plans based on your strengths, weaknesses, and learning pace."
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description: "Track your progress with detailed insights and recommendations for improvement."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Guidance",
    description: "Learn from top educators with proven track records in competitive exam preparation."
  },
  {
    icon: "📱",
    title: "Study Anywhere",
    description: "Access your study materials on any device, anytime, anywhere with our mobile app."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-examfit-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-examfit-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient bg-clip-text bg-gradient-to-r from-examfit-blue to-examfit-purple">ExamFit</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to give you the edge you need to succeed in competitive exams.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} animation={index % 2 === 0 ? "fade-up" : "slide-up-right"} delay={index * 100} threshold={0.2}>
              <Card className="hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 h-full group overflow-hidden rounded-xl">
                <CardContent className="p-6 flex flex-col items-start h-full relative">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-examfit-blue/5 to-examfit-purple/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-4xl mb-4 bg-gradient-to-br from-examfit-blue/10 to-examfit-purple/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 relative z-10">{feature.icon}</div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-examfit-blue transition-colors duration-300">{feature.title}</h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">{feature.description}</p>
                  
                  <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-examfit-blue to-examfit-purple rounded transition-all duration-700"></div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
