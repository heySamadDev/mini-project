import { useContext } from "react";
import UserContext from "../context/userContext";

function Home() {
  const { theme } = useContext(UserContext);

  return (
    <section
      className={`flex min-h-[calc(100vh-160px)] items-center justify-center px-6 ${
        theme === "light"
          ? "bg-zinc-50 text-zinc-900"
          : "bg-zinc-900 text-white"
      }`}
    >
      <div className="max-w-3xl text-center">
        <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          Welcome to StudentsHub
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Learn Smarter,
          <span className="text-green-600"> Grow Faster.</span>
        </h1>

        <p
          className={`mt-6 text-lg leading-8 ${
            theme === "light" ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          StudentsHub is a modern learning platform built to help students
          explore courses, manage their learning journey, and track progress
          with a simple and intuitive interface. Whether you're just getting
          started or improving your skills, everything you need is in one
          place.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700">
            Explore Courses
          </button>

          <button
            className={`rounded-lg border-2 border-green-600 px-6 py-3 font-medium text-green-600 transition hover:bg-green-600 hover:text-white ${
              theme === "dark" && "hover:border-green-500"
            }`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
