import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div></div>
      <div className="mfs-auto">
        <a href="https://seedigital.agency" target="_blank" rel="noopener noreferrer">SEE DIGITAL AGENCY</a>
        <span className="ml-1">&copy; 2021 SEE POS.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
