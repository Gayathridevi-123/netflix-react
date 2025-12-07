import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (email === "admin@netflix.com" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="relative w-full h-screen font-sans overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/netflix-bg.jpg'})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Netflix Logo */}
      <div className="absolute top-6 left-6 z-20">
        <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>
      </div>

      {/* Login Card */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="w-full max-w-[380px] bg-black bg-opacity-90 p-10 rounded-sm shadow-xl">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">Sign In</h2>

          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            onClick={submit}
            className="w-full bg-red-600 py-3 rounded-sm font-semibold hover:bg-red-700 transition mb-4"
          >
            Sign In
          </button>

          <div className="flex justify-between text-sm text-gray-400 mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>

          <p className="text-gray-400 text-sm text-center">
            New to Netflix?{" "}
            <span className="text-white hover:underline cursor-pointer">Sign up now</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
