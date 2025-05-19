
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "./ui/scroll-animation";

const testimonials = [
  {
    name: "Priya Sharma",
    exam: "UPSC CSE",
    avatar: "PS",
    quote: "ExamFit's structured approach and mock tests were key to my success in the UPSC exam. The analytics helped me focus on my weak areas.",
    achievement: "AIR 45",
  },
  {
    name: "Rahul Mehta",
    exam: "GATE CSE",
    avatar: "RM",
    quote: "The practice questions on ExamFit are closest to the actual GATE exam pattern. I improved my score by 45 marks in just two months!",
    achievement: "99.2 Percentile",
  },
  {
    name: "Aisha Patel",
    exam: "CAT",
    avatar: "AP",
    quote: "The personalized study plan and time management strategies helped me score in the 99th percentile. Highly recommended for CAT aspirants!",
    achievement: "99.8 Percentile",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50/70 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAzLjk4LTEuNzggNC00ek0yNCAxNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTI0IDIwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-gradient bg-clip-text bg-gradient-to-r from-examfit-blue to-examfit-purple">Stories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who transformed their exam preparation journey with ExamFit.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 200}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-examfit-blue/5 via-transparent to-examfit-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-examfit-blue/10 text-examfit-blue border-examfit-blue/20 font-medium group-hover:bg-examfit-blue group-hover:text-white transition-colors duration-500">
                      {testimonial.achievement}
                    </Badge>
                  </div>
                  <div className="mb-6 text-6xl text-examfit-blue opacity-20 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-110 transform origin-left">"</div>
                  <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br from-examfit-blue to-examfit-purple text-white shadow-md">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-semibold group-hover:text-examfit-blue transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.exam}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-in" delay={300}>
          <div className="mt-16 text-center">
            <p className="text-2xl font-semibold mb-6">
              Join thousands of successful students today!
            </p>
            <div className="inline-flex items-center bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-examfit-blue to-examfit-purple text-white text-sm font-medium px-4 py-1 rounded-full mr-3 shadow-inner">
                4.8 / 5
              </div>
              <div className="text-amber-400 text-xl">★★★★★</div>
              <div className="ml-3 text-gray-600">
                Based on <span className="font-medium">2,400+</span> reviews
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
