
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">ExamFit</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to give you the edge you need to succeed in competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border">
              <CardContent className="p-6 flex flex-col items-start">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
