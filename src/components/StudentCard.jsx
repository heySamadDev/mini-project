import { useContext } from "react";
import UserContext from "../context/userContext";

function StudentCard({students}) {
  const { theme } = useContext(UserContext);

  return (
    <section className="px-30 pb-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div
            key={student.id}
            className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
              theme === "light"
                ? "border-zinc-200 bg-white"
                : "border-zinc-700 bg-zinc-800"
            }`}
          >
            {/* Status */}
            <div className="mb-4 flex justify-end">
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {student.status}
              </span>
            </div>

            {/* Name */}
            <h2
              className={`text-2xl font-bold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              {student.name}
            </h2>

            {/* Email */}
            <p
              className={`mt-1 ${
                theme === "light" ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              {student.email}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span
                  className={`font-medium ${
                    theme === "light" ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Course
                </span>

                <span
                  className={
                    theme === "light" ? "text-black" : "text-white"
                  }
                >
                  {student.course}
                </span>
              </div>

              <div className="flex justify-between">
                <span
                  className={`font-medium ${
                    theme === "light" ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Age
                </span>

                <span
                  className={
                    theme === "light" ? "text-black" : "text-white"
                  }
                >
                  {student.age}
                </span>
              </div>

              <div className="flex justify-between">
                <span
                  className={`font-medium ${
                    theme === "light" ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  City
                </span>

                <span
                  className={
                    theme === "light" ? "text-black" : "text-white"
                  }
                >
                  {student.city}
                </span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-lg bg-green-600 py-3 font-medium text-white transition hover:bg-green-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentCard;