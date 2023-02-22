import React from 'react'

const Loader = () => {
  return (
    <div className='vh-100 vw-100 loader_container d-flex justify-content-center align-items-center'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader