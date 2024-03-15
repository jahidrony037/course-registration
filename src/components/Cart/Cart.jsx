import PropTypes from "prop-types";
const Cart = ({ selectedCourse, totalCredits }) => {
  // const credits = selectedCourse.reduce((p, c) => p + c.credit, 0);

  return (
    <div className="p-6">
      <h2 className="text-[#2F80ED]  text-lg font-bold text-left pb-4">
        Credit Hour Remaining {totalCredits} hr
      </h2>
      <hr />
      <div className="pb-5">
        <p className="text-[#1C1B1B] text-[20px] font-bold pt-4 pb-5">
          Course Name
        </p>
        {selectedCourse.map((course, idx) => (
          <li
            className="list-none text-[#1c1b1b99] text-[16px] font-normal"
            key={idx}
          >
            {idx + 1} {course.name}
          </li>
        ))}
      </div>
      <hr />
      <p className="text-[#1c1b1bcc] text-[16px] font-medium py-4">
        Total Credit Hour : {selectedCourse.reduce((p, c) => p + c.credit, 0)}
      </p>
      <hr />
      <p className="text-[#1c1b1bcc] text-[16px] font-medium py-4">
        Total Price : {selectedCourse.reduce((p, c) => p + c.price, 0)} USD
      </p>
    </div>
  );
};

Cart.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  totalCredits: PropTypes.number.isRequired,
};

export default Cart;
