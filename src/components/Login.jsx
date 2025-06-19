import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-md p-8 rounded w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6">Welcome, please login</h2>
        <p className="mb-4 text-sm">
          Not registered yet?{" "}
          <a href="/register" className="text-blue-500 underline">
            Create an Account
          </a>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              User name or Email address
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-xs text-blue-500 mt-1 inline-block">
              Forgot password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
