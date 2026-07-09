import { useContext } from "react";
import UserContext from "../context/userContext";
import { courses } from "../utils/courseData";

function Courses() {
  const { theme } = useContext(UserContext);

  return (
    <section
      className={`min-h-[calc(100vh-160px)] px-30 py-12 ${
        theme === "light"
          ? "bg-zinc-50 text-zinc-900"
          : "bg-zinc-900 text-white"
      }`}
    >
      <div className="mb-12">
        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          Learning Platform
        </span>

        <h1 className="mt-4 text-4xl font-bold">
          Explore <span className="text-green-600">Courses</span>
        </h1>

        <p
          className={`mt-3 max-w-2xl ${
            theme === "light" ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          Discover industry-focused courses designed to help you learn
          practical skills and advance your career.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              theme === "light"
                ? "border-zinc-200 bg-white"
                : "border-zinc-700 bg-zinc-800"
            }`}
          >

            <div className="h-2 bg-green-600" />

            <div className="p-6">

              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {course.level}
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                {course.courseName}
              </h2>

              <p
                className={`mt-4 leading-7 ${
                  theme === "light"
                    ? "text-zinc-600"
                    : "text-zinc-400"
                }`}
              >
                {course.heading}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-700">
                <div>
                  <p className="text-sm text-zinc-500">
                    Duration
                  </p>

                  <p className="font-semibold">
                    {course.duration}
                  </p>
                </div>

                <button className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;