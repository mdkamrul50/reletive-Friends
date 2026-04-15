"use client"

import ContactInfoProvider from '@/context/cotact.context'
import React from 'react'

const Providers = ({children}) => {
  return <ContactInfoProvider>
    {children}
    </ContactInfoProvider>;
}

export default Providers