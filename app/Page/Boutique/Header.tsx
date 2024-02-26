import Icons from '@/app/components/Icons/Icons';
import ImgHeader from '@/app/components/ImgHeader'
import store from '@/app/components/store';
import { card } from '@/app/constants/constants'
import { color } from 'framer-motion';
import React from 'react'
import { useSnapshot } from 'valtio/react';

function Header() {
    
    const {id}= useSnapshot(store)  
  
   
     const companyToShow:any = Object.values(card.shoplist)[id];

  return (
    <div className='img' style={{ position: 'relative' }}> 
    <ImgHeader/>
          <div className="containers" style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        backgroundColor: 'white',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius:'10px',
      }}>
         
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`}  </p>
          <p style={{ color: 'green' }}>ouvert de {companyToShow.openingTime1 } à {companyToShow.closingTime1} et de {companyToShow.openingTime2}  à {companyToShow.closingTime2}</p>
          <p>
            {" "}
            {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town}   
          </p>
          <a href=''>Informations utiles</a>
            <div>
              
            </div>
            <Icons/>
        
        </div>
        </div>
        </div>

  )
}

export default Header
