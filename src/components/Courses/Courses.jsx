import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("courses.json");
      const data = await res.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1  md:gap-6">
        {courses.map((course, idx) => (
          <Course course={course} key={idx} {...props}></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {};

export default Courses;
