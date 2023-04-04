import React from "react";
import { IconButton } from "@mui/material";
import  InboxIcon  from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import  PeopleOutlineOutlinedIcon  from '@mui/icons-material/PeopleOutlineOutlined';

const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype-lists emailtype-lists--active">
        <IconButton>
                <InboxIcon/>

        </IconButton>
        <p>Primary</p>
      </div>
      <div className="emailtype-lists">
        <IconButton>

           <LocalOfferIcon/>
        </IconButton>
        <p>Promotions</p>
      </div>
      <div className="emailtype-lists">
        <IconButton>

         <PeopleOutlineOutlinedIcon/>
        </IconButton>
       <p>Social</p>
      </div>
    </div>
  );
};

export default EmailType;
