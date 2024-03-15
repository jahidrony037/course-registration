import PropTypes from "prop-types";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { toast } from "react-toastify";
const Course = ({ course, addCourse, removeCourse, totalCredits }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { name, photo, description, price, credit } = course;

  const handleSelect = () => {
    totalCredits = totalCredits - credit;
    if (totalCredits < 0) {
      totalCredits = 0;
      return toast.error(
        `your course duration is ${credit} hour but you have not enough hour to take this course.`
      );
    }
    addCourse(course);
    toast.success("successfully Added");
    setIsSelected(!isSelected);
  };

  const handleRemove = () => {
    totalCredits = totalCredits + credit;
    removeCourse(course);
    toast.warn("remove successfully");
    setIsSelected(!isSelected);
  };
  return (
    <div className="bg-[#FFF] rounded-xl p-4 space-y-3">
      <img
        className="w-full  rounded-lg object-cover"
        src={photo}
        alt={`photo of ${name}`}
      />
      <h2 className="text-[#1C1B1B] text-lg font-semibold">{name}</h2>
      <p className="text-[#1c1b1b99] text-justify">{description}</p>
      <div className="flex flex-row justify-between items-center gap-2 mt-4">
        <div className="flex flex-row items-center justify-between gap-1">
          <FaDollarSign />
          <p className="text-[#1c1b1b99]">Price: {price}</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-1">
          <IoBook />
          <p className="text-[#1c1b1b99]">Credit: {credit}hr</p>
        </div>
      </div>
      {isSelected ? (
        <button
          onClick={() => handleRemove()}
          className="disabled w-full bg-[#3e6eac] rounded-lg text-[#FFF] py-[9px] text-lg cursor-pointer btn mt-6"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => handleSelect()}
          className="w-full bg-[#2F80ED] rounded-lg text-[#FFF] py-[9px] text-lg cursor-pointer btn mt-6"
        >
          Select
        </button>
      )}
      {/* <button
        onClick={() => handleSelect(course)}
        className="w-full bg-[#2F80ED] rounded-lg text-[#FFF] py-[9px] text-lg cursor-pointer btn mt-6"
      >
        Select
      </button> */}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  addCourse: PropTypes.func.isRequired,
  removeCourse: PropTypes.func.isRequired,
  selectedCourse: PropTypes.array.isRequired,
  totalCredits: PropTypes.number.isRequired,
};

export default Course;
