import { Box } from '@mui/material';
import React from 'react'
import "../Css/SideBarContent.css"



const SideBarLists1 = ({Icon,title,number,isactive}) => {
  return (
    <Box className='sidebarlists'>
<Icon/>
<h2>{title}</h2>
<p>{number}</p>
<p>{isactive}</p>



    </Box>
  )
}

export default SideBarLists1;