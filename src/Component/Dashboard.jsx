import React, { useState } from "react";
import Table from "./Table";
import Buttons from "./Buttons";
const Dashboard = () => {
  const [todoData, setTodoData] = useState([]);
  const [itemName, setItemName] = useState();
  const [dueDate, setDueDate] = useState();
  const [actionButton, setActionButton] = useState(false);

  const handelItemName = (e) => {
    setItemName(e.target.value);
  };
  const handelDueDate = (e) => {
    setDueDate(e.target.value);
  };
  const handelAddItem = (e) => {
    e.preventDefault();
    setTodoData([...todoData, { name: itemName, dueDate: dueDate }]);
    setDueDate("");
    setItemName("");
    setActionButton(true);
  };
  const handleDeleteItem = (e) => {
    e.preventDefault();
    if (todoData.length > 0) {
      setTodoData(todoData.slice(0, -1));
    }
  };

  return (
    <div
      className='container bg- border mt-5 dashboard'
      style={{ width: "40rem" }}
    >
      <h1 className='text-center'>Dashboard</h1>
      <div className='my-2 border'></div>
      <div className='row my-3'>
        <div className='col-4'>
          <input
            type='text'
            className='w-100 form-control'
            name='ItemName'
            onChange={handelItemName}
            value={itemName}
          />
        </div>
        <div className='col-4'>
          <input
            type='date'
            className='form-control'
            name='DueDate'
            onChange={handelDueDate}
            value={dueDate}
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <Buttons
            handelAddItem={handelAddItem}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
      <Table todoData={todoData} />
    </div>
  );
};

export default Dashboard;
