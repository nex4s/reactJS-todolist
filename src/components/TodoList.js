import React, { useState, useEffect } from 'react';

function TodoList() {
  // State to manage the tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input for adding new tasks
  const [newTask, setNewTask] = useState('');
  // State to manage the input for searching tasks
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect to load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      // Parse stored tasks from JSON and set them in the state
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // useEffect to save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    try {
      // Save tasks to local storage as a JSON string
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      // Log an error if there is an issue saving tasks to local storage
      console.error('Error saving tasks to local storage:', error);
    }
  }, [tasks]);

  // Function to handle the creation of a new task
  const createTask = (e) => {
    e.preventDefault();
    // Add the new task to the tasks state
    setTasks([...tasks, newTask]);
    // Clear the input field
    setNewTask('');
    console.log(JSON.stringify(tasks).length)
  };

  // Function to handle the deletion of a task
  const deleteTask = (index) => {
    // Create a new array excluding the task at the specified index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Update the tasks state with the modified array
    setTasks(updatedTasks);
  };

  // Function to render each task with a delete button
  const renderTasks = () => {
    return tasks.map((task, index) => (
      <div key={index} className='text-white pixel-font mb-2 border p-2 rounded flex items-center'>
        {task}
        <button
          className='ml-3 bg-red-600 text-white font-bold py-1 px-2 rounded'
          onClick={() => deleteTask(index)}
        >
          X
        </button>
      </div>
    ));
  };

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
        {/* Heading */}
        <h1 className='font-semibold text-white text-center text-2xl -mt-5 mb-5 pixel-font'>Todo List</h1>

        {/* Form to add new tasks */}
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

        {/* Input for searching tasks */}
        <input
          className='rounded-md h-9 w-full sm:w-64 lg:w-56 pixel-font text-center mt-3'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Container for displaying tasks with delete buttons */}
        <div className='ml-auto w-1/10 transform mt-10 max-h-48 overflow-y-auto'>
          {/* Render tasks with delete buttons */}
          {renderTasks()}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
