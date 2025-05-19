
import { Card, CardContent } from "@/components/ui/card";

const examCategories = [
  {
    title: "Government",
    exams: ["UPSC Civil Services", "SSC CGL", "IBPS PO", "RRB NTPC"],
    bgGradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Engineering",
    exams: ["GATE", "IES", "JEE Main & Advanced", "BITSAT"],
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Medical",
    exams: ["NEET", "AIIMS", "JIPMER", "PGIMER"],
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Management",
    exams: ["CAT", "XAT", "MAT", "CMAT"],
    bgGradient: "from-amber-500/20 to-orange-500/20",
  },
];

const ExamCategories = () => {
  return (
    <section id="exams" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Exam <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We cover a wide range of competitive exams with specialized study materials,
            mock tests, and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className={`p-6 bg-gradient-to-br ${category.bgGradient}`}>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.exams.map((exam, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-examfit-blue mr-2"></span>
                      <span>{exam}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-examfit-blue font-medium hover:text-examfit-darkblue transition-colors">
                  View All →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
