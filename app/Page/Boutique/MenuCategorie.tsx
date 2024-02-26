import { card } from '@/app/constants/constants'
import { Card } from '@nextui-org/react'
import React, { useState } from 'react'
import Modal from'@/app/components/Modal/Modal';

function MenuCategorie() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card>

   
    <div className="d-flex justify-content-between">
    <div className='mt-2'>
    <a   onClick={() => setShowModal(true)}>
    <ul style={{backgroundColor  :"#FFFFFF"}}>
      {Object.entries(card.categories) .slice(0, 10).map(([key, value] :any) => (
        <li key={key}>{value.title}</li>
      ))}
    </ul>

    </a>
    {showModal ? (
              <>
                <div
                  className="modal-background"
                  onClick={() => setShowModal(false)}
                />
                <Modal setShowModal={setShowModal} showModal={showModal} />
              </>
            ) : null}
    </div>
    <div className='d-flex align-items-center'>

    <select className="max-w-xs nav-link mx-5"> 
    {Object.entries(card.categories) .slice(10, Object.keys(card.categories).length).map(([key, value] :any) => (
         <option key={key} value={value.title}> {value.title}</option>  
      ))}
 </select> 
  </div>
  </div>
 
  </Card>
  )
}

export default MenuCategorie
