import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AdminLoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        alert(error);
        return;
      }

      const data = await response.json();

      localStorage.setItem(
        "token",
        data.token
      );

      login();

      navigate("/admin");

      onClose();

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-slate-900/95 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-8 border-b border-slate-800">

          <div className="flex justify-between items-start">

            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>

              <h2 className="text-white text-3xl font-bold">
                Admin Portal
              </h2>

              <p className="text-gray-400 mt-2">
                Secure access to portfolio messages
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition"
            >
              ✕
            </button>

          </div>

        </div>

        {/* Form */}
        <div className="p-8">

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold py-3 rounded-xl shadow-lg"
            >
              Login to Dashboard
            </button>

          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Authorized administrators only
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLoginModal;