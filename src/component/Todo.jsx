import React from 'react'

export default function Todo() {
  return (
    <div>
         <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List here</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder='Add Item' />
            <i className='fa fa-plus add-byn'></i>
          </div>
        </div>
       </div>
    </div>
  )
}
