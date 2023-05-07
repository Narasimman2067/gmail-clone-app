import React, { useState } from 'react'
import Header from './Header'
import SideBar from '../components1/SideBar';
import DisplayMails from './DisplayMails';
import MailLists from './MailLists';

const Main = () => {

  const [openDrawer, setOPenDrawer] =useState(true)

  const toggleDrawer = () =>{

    setOPenDrawer(prevState =>!prevState);

  }
  return (
    <div>

<Header toggleDrawer={toggleDrawer}/>
<SideBar openDrawer={openDrawer}/>
<MailLists/>

<div><DisplayMails/></div>

    </div>
  )
}

export default Main