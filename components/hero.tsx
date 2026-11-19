import { ArrowRight } from "lucide-react";

const whatsappNumber = "+918169891400"; // Replace with your actual WhatsApp number
const whatsappMessage =
  "Hi,I would like to know more about the driving lessons.";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

// No entrance animation here on purpose: the hero heading is the page's
// Largest Contentful Paint element, so it must be visible as soon as the
// HTML arrives instead of waiting for JavaScript to fade it in.
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center  mb-6 mt-6">
            <span className="text-5xl md:text-7xl font-bold text-black">
              Driv
            </span>
            <span className="text-5xl md:text-7xl font-bold text-yellow-400">
              Ed
            </span>
          </div>
        </div>

        {/* "Pune" in the h1 matters for local search: Google weighs the h1 heavily */}
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 ">
          Learn Driving the Right Way in Pune.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          A Pune driving school with personalized lessons in your own car. Build confidence on real roads with flexible
          scheduling tailored to your pace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all hover:shadow-lg flex items-center gap-2 w-full sm:w-auto"
          >
            Book a Session <ArrowRight size={20} />
          </a>
          <a
            href="#programs"
            className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all w-full sm:w-auto"
          >
            View Programs
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-gray-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-black">500+</div>
            <p className="text-sm">Students Trained</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">98%</div>
            <p className="text-sm">Pass Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">5★</div>
            <p className="text-sm">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
