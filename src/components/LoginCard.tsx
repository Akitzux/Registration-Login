
import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

const LoginCard: React.FC = () => {
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <div className="relative animate-fade-in bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-md w-[95vw] mx-auto p-8 flex flex-col items-center"
      style={{ minWidth: 340 }}>
      <h2 className="text-2xl font-bold text-primary mb-6 mt-2 tracking-wide text-center drop-shadow-sm">Registration</h2>
      <form
        className="flex flex-col gap-5 w-full"
        onSubmit={e => { e.preventDefault(); /* Here you could handle registration */ }}
      >
        <div className="relative">
          <input
            type="text"
            required
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full py-3 px-10 rounded-lg bg-white/20 focus:bg-white/30 transition shadow-inner border border-white/30 text-black/90 placeholder:text-black/50 focus:outline-none"
          />
          <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
        </div>
        <div className="relative">
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full py-3 px-10 rounded-lg bg-white/20 focus:bg-white/30 transition shadow-inner border border-white/30 text-black/90 placeholder:text-black/50 focus:outline-none"
          />
          <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
        </div>
        <div className="relative">
          <input
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full py-3 px-10 rounded-lg bg-white/20 focus:bg-white/30 transition shadow-inner border border-white/30 text-black/90 placeholder:text-black/50 focus:outline-none"
          />
          <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
        </div>
        <div className="flex items-center gap-2">
          <input
            id="agree"
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(a => !a)}
            className="accent-primary cursor-pointer"
            required
          />
          <label htmlFor="agree" className="text-xs text-black/70 select-none">
            I agree to the terms &amp; conditions
          </label>
        </div>
        <button
          type="submit"
          disabled={!agree}
          className="w-full bg-gradient-to-r from-primary to-purple-400 text-white py-2.5 rounded-xl font-semibold text-lg shadow transition-transform hover:scale-105 duration-200 disabled:opacity-60"
        >
          Register
        </button>
        <div className="text-sm text-black/80 text-center mt-3">
          Already have account?
          <a className="ml-1 text-primary font-medium hover:underline cursor-pointer" href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
