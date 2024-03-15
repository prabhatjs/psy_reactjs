import React from 'react'
import { memo } from 'react';

function UsecallbackTodo({Addtodo}) {
    console.log('render every time',Addtodo);
  return (
    <div>
        <h1>todo Render</h1>
    </div>
  )
}

export default memo(UsecallbackTodo)