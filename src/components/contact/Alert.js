import React, { useEffect } from 'react'

import { GiCheckMark } from 'react-icons/gi'

const Alert = ({ alert, clearAlert }) => {
  useEffect(() => {
    const interval = setInterval(clearAlert, 5000);
    return () => clearInterval(interval);
  }, [alert, clearAlert]);

  return (
    <p className='alert email__alert'>Email Sent Successfully <GiCheckMark /></p>
    // <p className='alert copy__alert'>Copied to Clipboard <GiCheckMark /></p>
  )
}

export default Alert