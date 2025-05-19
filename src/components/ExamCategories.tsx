
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./ui/scroll-animation";
import { ChevronRight } from "lucide-react";

const examCategories = [
  {
    title: "Government",
    exams: ["UPSC Civil Services", "SSC CGL", "IBPS PO", "RRB NTPC"],
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    borderGradient: "from-blue-300 to-indigo-300",
    icon: "🏛️",
  },
  {
    title: "Engineering",
    exams: ["GATE", "IES", "JEE Main & Advanced", "BITSAT"],
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderGradient: "from-purple-300 to-pink-300",
    icon: "⚙️",
  },
  {
    title: "Medical",
    exams: ["NEET", "AIIMS", "JIPMER", "PGIMER"],
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderGradient: "from-emerald-300 to-teal-300",
    icon: "🩺",
  },
  {
    title: "Management",
    exams: ["CAT", "XAT", "MAT", "CMAT"],
    bgGradient: "from-amber-500/10 to-orange-500/10",
    borderGradient: "from-amber-300 to-orange-300",
    icon: "📊",
  },
];

const ExamCategories = () => {
  return (
    <section id="exams" className="py-20 px-4 bg-gray-50/70 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Exam <span className="text-gradient bg-clip-text bg-gradient-to-r from-examfit-blue to-examfit-purple">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cover a wide range of competitive exams with specialized study materials,
              mock tests, and expert guidance.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examCategories.map((category, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 150} duration={800} threshold={0.2}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative">
                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r ${category.borderGradient}"></div>
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r ${category.borderGradient}"></div>
                <CardContent className={`p-6 bg-gradient-to-br ${category.bgGradient} h-full`}>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2 group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {category.exams.map((exam, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-examfit-blue mr-2 group-hover:w-3 transition-all duration-300"></span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">{exam}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="p-0 hover:bg-transparent text-examfit-blue font-medium hover:text-examfit-darkblue transition-colors group-hover:translate-x-2 duration-300"
                  >
                    View All <ChevronRight className="h-4 w-4 ml-1 inline group-hover:ml-2 transition-all duration-300" />
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
