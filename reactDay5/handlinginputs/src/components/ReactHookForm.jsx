//npm install react-hook-form

import React from 'react'
import {useForm} from 'react-hook-form'//provide hook tohandle forms data
function ReactHookForm() {
    const {register,handleSubmit}=useForm();//regsiter the from for use,register will return 3 function onblur,onref,onchange,useform provide handlesubmit function also
  return (
    <div>
        <form action='' onSubmit={handleSubmit(data=>console.log(data))}>
            <input {...register('name')} type='text' placeholder='Name'></input>
            <input {...register('email')} type='email' placeholder='Email'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default ReactHookForm