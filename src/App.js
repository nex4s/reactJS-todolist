import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

function Main() {
  const backgroundImageUrl = 'bg.jpg';

  return (
    <div className='h-full' style={{
      background: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover', // You can adjust this based on your requirements
      backgroundPosition: 'center', // You can adjust this based on your requirements
      width: '100vw',
      height: '100vh',
    }}>
    

    <TodoList/>

    </div>
  );
}

export default Main;
