import { useContext } from "react";
import UserContext from "../context/userContext";

function About() {
  const { theme } = useContext(UserContext);

  return (
    <section
      className={`min-h-[calc(100vh-160px)] flex items-center justify-center px-6 ${
        theme === "light"
          ? "bg-zinc-50 text-zinc-900"
          : "bg-zinc-900 text-white"
      }`}
    >
      <div className="max-w-3xl text-center">
        <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          About StudentsHub
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Empowering Students
          <span className="text-green-600"> Every Day.</span>
        </h1>

        <p
          className={`mt-6 text-lg leading-8 ${
            theme === "light" ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          StudentsHub is a simple educational platform built to make learning
          more organized and accessible. It allows students to discover
          courses, keep track of their progress, and manage their learning
          experience through a clean and intuitive interface.
        </p>

        <p
          className={`mt-4 text-lg leading-8 ${
            theme === "light" ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          This project is built with React and Tailwind CSS, focusing on
          reusable components, modern UI practices, and a seamless light/dark
          theme experience. It's designed as both a learning resource and a
          foundation for building larger educational applications.
        </p>
      </div>
    </section>
  );
}

export default About;
