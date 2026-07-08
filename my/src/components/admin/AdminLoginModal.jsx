import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginAdmin } from "../../services/authService";
import { FaLock, FaUser, FaKey, FaTimes } from "react-icons/fa";
import Button from "../common/Button";

function AdminLoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await loginAdmin(username, password);
      localStorage.setItem("token", data.token);
      login();
      navigate("/admin");
      onClose();
    } catch (error) {
      console.error(error);
      alert(error.message || "Unable to authenticate. Backend server is offline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[1000] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#020617]/90 border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden animate-float">
        
        {/* Top Glow bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-brand-indigo to-brand-violet" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition cursor-pointer"
        >
          <FaTimes size={14} />
        </button>

        {/* Header */}
        <div className="p-8 pb-4 text-center select-none">
          <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo flex items-center justify-center mx-auto mb-4 text-lg">
            <FaLock />
          </div>
          <h2 className="text-white text-2xl font-bold">Admin Login</h2>
          <p className="text-slate-500 text-xs mt-1 font-semibold uppercase tracking-wider">Authorized access to contact messages</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleLogin} className="p-8 pt-4 space-y-5">
          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <FaUser size={10} /> Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 focus:border-brand-indigo/50 outline-none text-sm placeholder:text-slate-700 text-slate-200 transition duration-200"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <FaKey size={10} /> Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 focus:border-brand-indigo/50 outline-none text-sm placeholder:text-slate-700 text-slate-200 transition duration-200"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            className="w-full text-xs uppercase tracking-wider py-4 font-extrabold"
          >
            {isSubmitting ? "Authenticating..." : "Login to Control Panel"}
          </Button>
        </form>

        <div className="pb-6 text-center select-none">
          <p className="text-[9px] text-slate-650 font-bold tracking-wider uppercase">
            Sulakshan Admin Console v1.0
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginModal;