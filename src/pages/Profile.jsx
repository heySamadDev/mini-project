import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { theme } = useContext(UserContext);

  return (
    <section className="px-30 py-10">
      <div
        className={`rounded-2xl border p-8 shadow-sm ${
          theme === "light"
            ? "border-zinc-200 bg-white"
            : "border-zinc-700 bg-zinc-800"
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600 text-4xl font-bold text-white">
            A
          </div>

          {/* Info */}
          <div>
            <h1
              className={`text-3xl font-bold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Admin Profile
            </h1>

            <p
              className={`mt-2 ${
                theme === "light" ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Manage your account information.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              className={`mb-2 block font-medium ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Full Name
            </label>

            <input
              type="text"
              value="Admin User"
              readOnly
              className={`w-full rounded-lg border px-4 py-3 ${
                theme === "light"
                  ? "border-zinc-300 bg-zinc-50"
                  : "border-zinc-600 bg-zinc-900 text-white"
              }`}
            />
          </div>

          <div>
            <label
              className={`mb-2 block font-medium ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Email
            </label>

            <input
              type="email"
              value="admin@dummy.com"
              readOnly
              className={`w-full rounded-lg border px-4 py-3 ${
                theme === "light"
                  ? "border-zinc-300 bg-zinc-50"
                  : "border-zinc-600 bg-zinc-900 text-white"
              }`}
            />
          </div>

          <div>
            <label
              className={`mb-2 block font-medium ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Role
            </label>

            <input
              type="text"
              value="Administrator"
              readOnly
              className={`w-full rounded-lg border px-4 py-3 ${
                theme === "light"
                  ? "border-zinc-300 bg-zinc-50"
                  : "border-zinc-600 bg-zinc-900 text-white"
              }`}
            />
          </div>

          <div>
            <label
              className={`mb-2 block font-medium ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Joined
            </label>

            <input
              type="text"
              value="July 2026"
              readOnly
              className={`w-full rounded-lg border px-4 py-3 ${
                theme === "light"
                  ? "border-zinc-300 bg-zinc-50"
                  : "border-zinc-600 bg-zinc-900 text-white"
              }`}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700">
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
