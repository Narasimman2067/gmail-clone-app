import React, { useState } from 'react'
import Header from './Header'
import SideBar from '../components1/SideBar';

import MailLists from './MailLists';

const Main = () => {

  const [openDrawer, setOPenDrawer] =useState(true)

  const toggleDrawer = () =>{

    setOPenDrawer(prevState =>!prevState);

  }
  return (
    <div>

<Header toggleDrawer={toggleDrawer}/>
<SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
<MailLists/>




    </div>
  )
}

export default Main