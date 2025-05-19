
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    exam: "UPSC CSE",
    avatar: "PS",
    quote: "ExamFit's structured approach and mock tests were key to my success in the UPSC exam. The analytics helped me focus on my weak areas."
  },
  {
    name: "Rahul Mehta",
    exam: "GATE CSE",
    avatar: "RM",
    quote: "The practice questions on ExamFit are closest to the actual GATE exam pattern. I improved my score by 45 marks in just two months!"
  },
  {
    name: "Aisha Patel",
    exam: "CAT",
    avatar: "AP",
    quote: "The personalized study plan and time management strategies helped me score in the 99th percentile. Highly recommended for CAT aspirants!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students who transformed their exam preparation journey with ExamFit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 text-4xl text-gray-300">"</div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-examfit-blue flex items-center justify-center text-white font-medium">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.exam}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold mb-6">
            Join thousands of successful students today!
          </p>
          <div className="inline-flex items-center bg-white px-4 py-3 rounded-full shadow-lg">
            <div className="bg-examfit-blue text-white text-sm font-medium px-4 py-1 rounded-full mr-3">
              4.8 / 5
            </div>
            <div className="text-amber-400 text-xl">★★★★★</div>
            <div className="ml-3 text-gray-600">
              Based on <span className="font-medium">2,400+</span> reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
