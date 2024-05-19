import React from "react";

const Table = ({ todoData }) => {
  return (
    <div>
      <table className='table border'>
        <thead>
          <td className='text-center'>Item Name</td>
          <td className='text-center'>Due Date</td>
        </thead>
        <tbody>
          {todoData &&
            todoData.map((item) => {
              return (
                <>
                  <tr>
                    <td className='text-center'>{item?.name}</td>
                    <td className='text-center'>{item?.dueDate}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
