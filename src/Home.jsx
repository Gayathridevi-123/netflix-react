import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/netflix-bg.jpg'})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Sign In button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 px-5 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Sign In
        </button>
      </div>

      {/* Landing Text */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
        <p className="text-xl mb-6">Watch anywhere. Cancel anytime.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
