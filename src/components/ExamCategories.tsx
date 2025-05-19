
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./ui/scroll-animation";
import { ChevronRight } from "lucide-react";

const examCategories = [
  {
    title: "Government",
    exams: ["UPSC Civil Services", "SSC CGL", "IBPS PO", "RRB NTPC"],
    bgGradient: "from-blue-500/20 to-indigo-500/20",
    icon: "🏛️",
  },
  {
    title: "Engineering",
    exams: ["GATE", "IES", "JEE Main & Advanced", "BITSAT"],
    bgGradient: "from-purple-500/20 to-pink-500/20",
    icon: "⚙️",
  },
  {
    title: "Medical",
    exams: ["NEET", "AIIMS", "JIPMER", "PGIMER"],
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    icon: "🩺",
  },
  {
    title: "Management",
    exams: ["CAT", "XAT", "MAT", "CMAT"],
    bgGradient: "from-amber-500/20 to-orange-500/20",
    icon: "📊",
  },
];

const ExamCategories = () => {
  return (
    <section id="exams" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Exam <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cover a wide range of competitive exams with specialized study materials,
              mock tests, and expert guidance.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examCategories.map((category, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 150} threshold={0.2}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className={`p-6 bg-gradient-to-br ${category.bgGradient} h-full`}>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">{category.icon}</span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {category.exams.map((exam, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-examfit-blue mr-2 group-hover:w-3 transition-all duration-300"></span>
                        <span>{exam}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="p-0 hover:bg-transparent text-examfit-blue font-medium hover:text-examfit-darkblue transition-colors group-hover:translate-x-1 duration-300"
                  >
                    View All <ChevronRight className="h-4 w-4 ml-1 inline" />
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
