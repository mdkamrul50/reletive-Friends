import React, { createContext, useState } from 'react'
export const contactContext = createContext()

const ContactInfoProvider = ({children}) => {
  const [contactDetail ,setContactDetail] = useState([])
  const data = {
    contactDetail,
    setContactDetail,
  };

  return (
    <contactContext.Provider value={data}>{children}</contactContext.Provider>
  );
}

export default ContactInfoProvider;