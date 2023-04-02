import React from 'react'
import "./SideBar.css";

const SideBarLists = ({Icon,title,number,isactive}) => {
  return (
    <div className={`sidebarlists ${isactive && "sidebarlists--active"}`}>
        <Icon/>
<h2>{title}</h2>
<p>{number}</p>



    </div>
  )
}

export default SideBarLists