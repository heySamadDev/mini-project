import { students } from "../utils/studentData";

const activeStudent = students.filter(
  (student) => student.status === "Active",
).length;

export const stats = [
  {
    id: 1,
    title: "Total Students",
    value: students.length,
  },
  {
    id: 2,
    title: "Active Courses",
    value: activeStudent,
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
