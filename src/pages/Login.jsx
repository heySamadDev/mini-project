import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { replace, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const { theme, setLogin, navigate } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("You must add something");
    } else if (email !== "admin@dummy.com" || password !== "dummy123") {
      alert("Invalid Credentials");
    } else {
      setLogin(true);
      const redirectPath = location.state?.from || "/";
      navigate(redirectPath, { replace: true });
    }
  }

  return (
    <section
      className={`min-h-[calc(100vh-89px)] flex items-center justify-center px-4 ${
        theme === "light"
          ? "bg-zinc-50 text-zinc-900"
          : "bg-zinc-900 text-white"
      }`}
    >
      <form
        className={`w-full max-w-md rounded-2xl border p-8 shadow-lg ${
          theme === "light"
            ? "bg-white border-zinc-200"
            : "bg-zinc-800 border-zinc-700"
        }`}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-600">Welcome Back</h1>
          <p
            className={`mt-2 ${
              theme === "light" ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            Login to your StudentsHub account.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-200 ${
                theme === "light"
                  ? "border-zinc-300 bg-white"
                  : "border-zinc-600 bg-zinc-900"
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-200 ${
                theme === "light"
                  ? "border-zinc-300 bg-white"
                  : "border-zinc-600 bg-zinc-900"
              }`}
            />
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
