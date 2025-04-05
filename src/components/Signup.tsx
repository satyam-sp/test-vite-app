import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signup } from '../stores/user-action';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', role: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return alert("Passwords do not match");
    signup(form, navigate)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="bg-[#1e293b] p-8 rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mt-16 animate-pulse">Sign up </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
          <select 
            name="role" 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-transform duration-200 hover:scale-105"
          >
            Create Account
          </button>
          <p className="text-center text-sm mt-4 text-gray-300">
            Already a member? <Link to="/signin" className="text-purple-400 hover:underline">Sign in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
