import React, { createContext, useState } from 'react'
export const contactContext = createContext()

const ContactInfoProvider = ({children}) => {
  const [contactDetail ,setContactDetail] = useState([])
  const data = {
    contactDetail,
    setContactDetail,
  };
  return <contactInfoProvider.Provider value={data}>
    {children}
  </contactInfoProvider.Provider>
}

export default ContactInfoProvider;