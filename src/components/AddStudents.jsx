import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function AddStudents() {
  const { theme } = useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    city: "",
    status: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(user);

    setUser({
      name: "",
      email: "",
      age: "",
      course: "",
      city: "",
      status: "",
    });
  }

  const inputClasses = `w-full rounded-lg border px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200 ${
    theme === "light"
      ? "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
      : "border-zinc-600 bg-zinc-900 text-white placeholder:text-zinc-500"
  }`;

  const labelClasses = `mb-2 ml-2 block font-medium ${
    theme === "light" ? "text-black" : "text-white"
  }`;

  return (
    <section className="px-30 py-10">
      <div
        className={`rounded-2xl border p-8 shadow-sm ${
          theme === "light"
            ? "border-zinc-200 bg-white"
            : "border-zinc-700 bg-zinc-800"
        }`}
      >
        {/* Heading */}
        <div className="mb-8">
          <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-3xl font-bold`}>
            Add <span className="text-green-600">Student</span>
          </h1>

          <p
            className={`mt-2 ${
              theme === "light" ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            Fill in the details below to register a new student.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={labelClasses}
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={user.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={user.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Course */}
          <div>
            <label htmlFor="course" className={labelClasses}>
              Course
            </label>

            <select
              id="course"
              name="course"
              value={user.course}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select Course</option>
              <option value="HTML & CSS">HTML & CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="Java">Java</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className={labelClasses}>
              Age
            </label>

            <input
              type="number"
              id="age"
              name="age"
              placeholder="20"
              value={user.age}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className={labelClasses}>
              City
            </label>

            <input
              type="text"
              id="city"
              name="city"
              placeholder="Mumbai"
              value={user.city}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className={labelClasses}>
              Status
            </label>

            <select
              id="status"
              name="status"
              value={user.status}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddStudents;
