import React from 'react'

function MultipleButton({children,onSelect}) {
  return (
    <div>
         <button onClick={onSelect} className='px-4 py-1 text-xs rounded bg-sky-700  text-zinc-100 mt-3 flex items-center justify-center'>{children}</button>
    </div>
  )
}

export default MultipleButton