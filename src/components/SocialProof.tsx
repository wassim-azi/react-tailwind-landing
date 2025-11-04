import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "FlowSync has completely transformed how our team collaborates. We've cut context-switching time by 60% and everyone stays perfectly in sync.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "StartupXYZ",
    content: "The automatic syncing across Slack, Notion, and GitHub is a game-changer. No more manually updating multiple tools. It just works.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "GrowthCo",
    content: "Best investment we've made this year. Our team's productivity has skyrocketed, and onboarding new members is now seamless.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Company Logos */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            Trusted by leading teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-gray-600">
            <i className="fab fa-github text-4xl sm:text-5xl md:text-6xl hover:text-gray-800 transition-colors" title="GitHub"></i>
            <i className="fab fa-slack text-4xl sm:text-5xl md:text-6xl hover:text-gray-800 transition-colors" title="Slack"></i>
            <i className="fab fa-microsoft text-4xl sm:text-5xl md:text-6xl hover:text-gray-800 transition-colors" title="Microsoft"></i>
            <i className="fab fa-google text-4xl sm:text-5xl md:text-6xl hover:text-gray-800 transition-colors" title="Google"></i>
            <i className="fab fa-dropbox text-4xl sm:text-5xl md:text-6xl hover:text-gray-800 transition-colors" title="Dropbox"></i>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg">
            <div className="text-center">
              <i className="fas fa-quote-left text-3xl sm:text-4xl text-primary-400 mb-4 sm:mb-6"></i>

              <div className="relative h-56 sm:h-48 md:h-40">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-4 sm:mb-6 italic px-2 sm:px-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center mt-6 sm:mt-8">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 border-4 border-white shadow-md"
                />
                <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary-600 w-6 sm:w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
