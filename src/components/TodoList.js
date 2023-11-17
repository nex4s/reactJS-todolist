import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const createTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    // Clear the input field
    setNewTask('');
  };

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex items-center justify-center h-screen'>
      <div
        className='bg-opacity-20 backdrop-blur-12 backdrop-filter backdrop-blur-md rounded-xl border border-opacity-15 p-8 max-w-screen-md'
        style={{
          backgroundColor: 'rgba(38,36,36,0.5)',
          borderColor: 'rgba(38,36,36,0.25)',
          width: 'auto',
          maxWidth: '400px',
        }}
      >
        <h1 className='font-semibold text-white text-center text-2xl -mt-5 mb-5 pixel-font'>Todo List</h1>

        <form onSubmit={createTask}>
          <div className='flex items-center'>
            <input
              className='rounded-md h-9 w-full sm:w-64 lg:w-56 text-center pixel-font'
              placeholder='Task'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              type='submit'
              className='ml-3 bg-gray-600 transition duration-350 ease-out hover:ease-in hover:bg-gray-800 text-white font-bold py-2 px-4 rounded pixel-font'
            >
              Add
            </button>
          </div>
        </form>

        <input
          className='rounded-md h-9 w-full sm:w-64 lg:w-56 pixel-font text-center mt-3'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className='ml-auto w-1/10 transform mt-10 max-h-48 overflow-y-auto'>
          {filteredTasks.map((task, index) => (
            <div key={index} className='text-white pixel-font mb-2 border p-2 rounded'>
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
