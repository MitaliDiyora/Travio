import React from 'react'
import Pagesbanner from '../Pagescomponanents/Pagesbanner'
import ContactForm from '../Contact/ContactForm'
import Contactdetail from '../Contact/Contact'

const Contact = () => {
  return (
  
    <>
    <Pagesbanner name='Contact'/> 
    <Contactdetail/>  
    <ContactForm/>
    
    </>
  )
}

export default Contact