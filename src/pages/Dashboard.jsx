import { useContext } from "react";
import UserContext from "../context/userContext";

function Dashboard() {
  const { theme } = useContext(UserContext);

  const stats = [
    {
      id: 1,
      title: "Total Students",
      value: "248",
    },
    {
      id: 2,
      title: "Active Courses",
      value: "12",
    },
    {
      id: 3,
      title: "Instructors",
      value: "8",
    },
    {
      id: 4,
      title: "Completed Courses",
      value: "184",
    },
  ];

  return (
    <section
      className={`min-h-[calc(100vh-160px)] px-30 py-12 ${
        theme === "light"
          ? "bg-zinc-50 text-zinc-900"
          : "bg-zinc-900 text-white"
      }`}
    >
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Admin <span className="text-green-600">Dashboard</span>
        </h1>

        <p
          className={`mt-2 ${
            theme === "light" ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          Monitor students, courses, and training activities from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${
              theme === "light"
                ? "border-zinc-200 bg-white"
                : "border-zinc-700 bg-zinc-800"
            }`}
          >
            <p
              className={`text-sm ${
                theme === "light" ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              {item.title}
            </p>

            <h2 className="mt-3 text-4xl font-bold text-green-600">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div
        className={`mt-10 rounded-xl border p-6 ${
          theme === "light"
            ? "border-zinc-200 bg-white"
            : "border-zinc-700 bg-zinc-800"
        }`}
      >
        <h2 className="text-2xl font-semibold">
          Recent Activity
        </h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-700">
            <div>
              <p className="font-medium">
                New student enrolled in React.js
              </p>

              <p
                className={`text-sm ${
                  theme === "light"
                    ? "text-zinc-500"
                    : "text-zinc-400"
                }`}
              >
                10 minutes ago
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              New
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-700">
            <div>
              <p className="font-medium">
                Python course completed by 5 students
              </p>

              <p
                className={`text-sm ${
                  theme === "light"
                    ? "text-zinc-500"
                    : "text-zinc-400"
                }`}
              >
                1 hour ago
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Completed
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                JavaScript batch scheduled
              </p>

              <p
                className={`text-sm ${
                  theme === "light"
                    ? "text-zinc-500"
                    : "text-zinc-400"
                }`}
              >
                Yesterday
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Scheduled
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
