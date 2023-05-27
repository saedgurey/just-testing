import React, { useState } from 'react'
import ReactModal from 'react-modal';

const ModalTest = () => {
    const [modeIsOpen , setModalIsOpen] = useState(false)
  return (
    <div>
        <button onClick={()=>setModalIsOpen(true)} className=' rounded-md shadow-md p-2 bg-gray-400'>OpenModal</button>
<ReactModal isOpen={modeIsOpen}>
    <p>modal body</p>
    <button onClick={()=>setModalIsOpen(false)}  className=' rounded-md shadow-md p-2 bg-gray-400'>cancel</button>
</ReactModal>
    </div>
  )
}

export default ModalTest