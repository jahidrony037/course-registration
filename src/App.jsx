import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredits, setTotalCredits] = useState(20);

  const removeCourse = (course) => {
    // console.log(course);

    const remaining = selectedCourse.filter(
      (sCourse) => sCourse.id !== course.id
    );
    setSelectedCourse(remaining);
    setTotalCredits(totalCredits + course.credit);
  };

  const addCourse = (course) => {
    // const { name } = course;
    if (totalCredits < 0) {
      return console.log("you can not addddded");
    }

    setTotalCredits(totalCredits - course.credit);

    const selectCourses = [...selectedCourse];

    const uniqueCourse = selectCourses.find(
      (selectCourse) => selectCourse.id === course.id
    );
    if (!uniqueCourse) {
      setSelectedCourse([...selectedCourse, course]);
    } else {
      return alert("you already added this course ");
    }
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto md:grid md:grid-cols-12 md:gap-4 px-2 md:px-0">
        <div className="md:col-span-9">
          <Courses
            addCourse={addCourse}
            selectedCourse={selectedCourse}
            removeCourse={removeCourse}
            totalCredits={totalCredits}
          ></Courses>
        </div>
        <div className="md:col-span-3 bg-[#FFF] rounded-xl">
          <Cart
            totalCredits={totalCredits}
            selectedCourse={selectedCourse}
          ></Cart>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
