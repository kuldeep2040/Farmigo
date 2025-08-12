import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from '/images/home-banner/home2.jpg';

function Hero() {
  const navigate = useNavigate();
  const scrollToCategory = () => {
    const categorySection = document.querySelector('.category-section');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-black">
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto lg:mx-0">
          {/* Premium badge */}
          <div className="mb-6 lg:mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
            <span className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 backdrop-blur-sm">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-100 font-semibold text-xs lg:text-sm">
                Trusted by 10,000+ Farmers
              </span>
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 lg:space-y-4 mb-6 lg:mb-8">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-white transform translate-y-full animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
                <span className="relative inline-block bg-gradient-to-r from-yellow-400 via-green-400 to-green-600 bg-clip-text text-transparent animate-[slideUp_0.8s_ease-out_0.5s_forwards] translate-y-full">
                  Farmigo
                  <div className="absolute -bottom-1 lg:-bottom-3 left-0 w-full h-1 lg:h-2 bg-gradient-to-r from-yellow-400 via-green-400 to-emerald-400 transform scale-x-0 animate-[scaleX_0.8s_ease-out_1.2s_forwards] origin-left rounded-full"></div>
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden mb-8 lg:mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-200 max-w-4xl font-light transform translate-y-full opacity-0 animate-[slideUpFade_0.8s_ease-out_0.7s_forwards]">
              <span className="font-semibold text-white">
                Connecting Farmers and Consumers
              </span>{" "}
              —
              <br className="hidden sm:block" />
              Bringing Fresh, Sustainable Produce
              <span className="inline-block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent font-semibold ml-2">
                Directly to Your Doorstep
              </span>
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-10 lg:mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto">
                <button 
                  onClick={scrollToCategory}
                  className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold text-base lg:text-lg rounded-xl lg:rounded-2xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Shopping
                    <svg
                      className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <button 
                  onClick={() => navigate("/account/seller")}
                  className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-white/30 text-white font-semibold text-base lg:text-lg rounded-xl lg:rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-500 hover:scale-105 backdrop-blur-md bg-white/5 hover:border-white cursor-pointer"
                >
                  <span className="flex items-center justify-center">
                    Join as Farmer
                    <svg
                      className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transform group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Stats Preview */}
              <div className="flex items-center space-x-4 lg:space-x-6 text-white/80 text-sm mt-4 lg:mt-0">
                <div className="text-center">
                  <div className="font-bold text-lg lg:text-2xl text-white">
                    10K+
                  </div>
                  <div className="text-xs lg:text-sm">Happy Customers</div>
                </div>
                <div className="w-px h-6 lg:h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="font-bold text-lg lg:text-2xl text-white">
                    500+
                  </div>
                  <div className="text-xs lg:text-sm">Partner Farms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-white/60 text-xs font-medium">
            Scroll to explore
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideUpFade {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-8deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}

export default Hero;
