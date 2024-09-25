import React from 'react'

const BusinessPage = ({title,children}) => {
  return (
    <div className='container-fluid'> 
    <div className='row'>
        <div className='col-md-12'>
                <h1 className='alert alert-danger'>{title}</h1>
                <div className='container'>
                    <div>{children}</div>
                    </div>
                
        </div>
    </div>

    </div>
   

  )
}

export default BusinessPage