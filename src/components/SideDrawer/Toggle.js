import React from 'react'


const Toggle = (props) => {
    return(
        <div className='toggle'
          onClick={()=>props.setToggleStatus(!props.toggleStatus)}>
          <div className='toggleLi'></div>
          <div className='toggleLi'></div>
          <div className='toggleLi'></div>
        </div>
    );
}

export default Toggle