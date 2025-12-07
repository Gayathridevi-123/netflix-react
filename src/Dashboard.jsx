import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Floating particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const arr = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 6 + 3,
      delay: Math.random() * 4,
      duration: Math.random() * 5 + 5,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgZoom"
        style={{ backgroundImage: "url('/netflix-bg.jpg')" }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* FLOATING PARTICLES */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bg-red-500/40 rounded-full blur-sm animate-float"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            bottom: "-30px",
          }}
        ></span>
      ))}

      {/* HEADER */}
      <div className="relative z-20 flex justify-between items-center px-5 md:px-10 py-6">
        <h1 className="text-3xl md:text-5xl font-bold text-red-600 drop-shadow-md">
          NETFLIX
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-red-700 transition text-sm md:text-lg"
        >
          Sign Out
        </button>
      </div>

      {/* MAIN TEXT */}
      <div className="relative z-20 flex flex-col items-center text-center mt-16 md:mt-28 px-4">

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-titleGlow leading-tight">
          Unlimited Movies & Shows
        </h2>

        <p className="text-base md:text-xl opacity-90 max-w-lg md:max-w-2xl mb-8 animate-fadeUp">
          Watch anywhere. Cancel anytime. Enjoy entertainment without limits.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="px-8 md:px-14 py-3 bg-red-600 rounded-lg text-lg md:text-xl hover:bg-red-700 transition transform hover:scale-110"
        >
          Explore Now
        </button>
      </div>

      {/* TRENDING MOVIES */}
      <div className="relative z-20 mt-16 px-5 md:px-10">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Trending Now</h3>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-none">
          {[1, 2, 3, 4, 5, 6].map((movie) => (
            <div
              key={movie}
              className="min-w-[150px] md:min-w-[200px] h-[220px] md:h-[280px] bg-gray-700 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg')",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* GLASS CARD */}
      <div className="relative z-20 mt-14 flex justify-center px-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 md:p-10 rounded-xl max-w-3xl text-center">
          <h3 className="text-xl md:text-3xl font-bold mb-3">Exclusive For You</h3>
          <p className="opacity-80 text-sm md:text-lg">
            More personalized content will appear soon...
          </p>
        </div>
      </div>

      {/* POPUP MODAL */}
      {open && (
        <div className="absolute inset-0 z-50 bg-black/70 flex items-center justify-center animate-fadeIn px-4">
          <div className="bg-[#141414] w-full max-w-md p-6 md:p-8 rounded-xl border border-red-500/30 text-center animate-zoom">
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">Coming Soon!</h2>

            <p className="opacity-90 mb-6 text-sm md:text-lg">
              More features, animations and pages will be added soon.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="bg-red-600 w-full py-2 md:py-3 rounded-md hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes bgZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-bgZoom { animation: bgZoom 20s ease-in-out infinite alternate; }

        @keyframes glow {
          0% { text-shadow: 0 0 10px red; }
          100% { text-shadow: 0 0 25px red; }
        }
        .animate-titleGlow { animation: glow 2s ease-in-out infinite alternate; }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 1s forwards; }

        @keyframes float {
          0% { transform: translateY(0); opacity: 0.7; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }

        @keyframes zoomIn {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoom { animation: zoomIn 0.3s forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.5s forwards; }
      `}</style>
    </div>
  );
}

export default Dashboard;
