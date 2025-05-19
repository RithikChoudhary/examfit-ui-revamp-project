
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
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">ExamFit</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to give you the edge you need to succeed in competitive exams.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100} threshold={0.2}>
              <Card className="hover:shadow-lg transition-all duration-300 border hover:-translate-y-1 h-full">
                <CardContent className="p-6 flex flex-col items-start h-full">
                  <div className="text-4xl mb-4 bg-examfit-blue/10 p-3 rounded-xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
