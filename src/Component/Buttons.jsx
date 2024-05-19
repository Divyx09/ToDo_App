import React from "react";

const Buttons = ({ handelAddItem, handleDeleteItem }) => {
  return (
    <div>
      <button className='btn-primary btn ' onClick={handelAddItem}>
        <b>+</b>Add
      </button>
      <button className='btn-danger mx-2 btn ' onClick={handleDeleteItem}>
        Delete
      </button>
    </div>
  );
};

export default Buttons;
