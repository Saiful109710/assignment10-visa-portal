import React from 'react'

const Modal = ({onClose,children}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-scroll ]'>
        <div className='max-w-2xl max-h-[700px] overflow-scroll w-full rounded-lg bg-white p-6 relative'>
            <button onClick={onClose} className='absolute top-4 right-6'>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal
