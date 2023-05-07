import React, { useState } from "react";

import "../Css/SideBarContent.css";
import { Box, Button } from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from "@mui/icons-material/Inbox";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import MessageIcon from "@mui/icons-material/Message";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SideBarLists1 from "./SideBarLIst1";
import ComposeMail from "./ComposeMail";
// import { useDispatch } from "react-redux";
// import { openSendMessage } from "../../features/mailSlice";




const SideBarContent = () => {
//   const dispatch = useDispatch();



const [openDialog,setOPenDialog] =useState(false)

const onComposeClick =()=>{
  setOPenDialog(true);
}


  return (
    <Box>
    <div  className="btn-side">
      <Button 
      variant="contained"
      startIcon={<CreateOutlinedIcon />} 
      className="compose-btn1"
    //   sx={{background:" #2684d1"}}
      onClick={()=>onComposeClick()}
      
      
      >
        Compose
      </Button>
      </div>
      <Box>
      <div className="sidebarlists2">
        <SideBarLists1
          Icon={InboxIcon}
          title="Inbox"
          number="224"
          isactive="true"
        />
        <SideBarLists1
          Icon={StarOutlineOutlinedIcon}
          title="Starred"
          number="224"
        />
        <SideBarLists1
          Icon={AccessTimeOutlinedIcon}
          title="Snoozed"
          number="224"
        />
        <SideBarLists1 Icon={SendIcon} title="Sent" number="224" />
        <SideBarLists1 Icon={DraftsIcon} title="Drafts" number="2" />
        <SideBarLists1
          Icon={LabelImportantOutlinedIcon}
          title="Important"
          number="24"
        />
        <SideBarLists1 Icon={MessageIcon} title="Chats" number="24" />
        <SideBarLists1
          Icon={ScheduleSendOutlinedIcon}
          title="scheduled"
          number="22"
        />
        <SideBarLists1
          Icon={MarkAsUnreadOutlinedIcon}
          title="All Mail"
          number="4"
        />
        <SideBarLists1
          Icon={ReportGmailerrorredOutlinedIcon}
          title="Spam"
          number="224"
        />
        <SideBarLists1 Icon={DeleteOutlineRoundedIcon} title="Bin" number="4" />
        <SideBarLists1 Icon={ExpandMoreIcon} title="More" number="4" />

        <h3 className="sidebarlists-heading" Icon={LabelOutlinedIcon}>
          Categories
        </h3>
        <SideBarLists1
          Icon={PeopleOutlineOutlinedIcon}
          title="Social"
          number="4"
        />
        <SideBarLists1
          Icon={ErrorOutlineOutlinedIcon}
          title="Updates"
          number="4"
        />
        <SideBarLists1 Icon={ForumOutlinedIcon} title="Forums" />

        <SideBarLists1 Icon={LocalOfferIcon} title="Promotions" />
        <h3 className="sidebarlists-heading2">Meet</h3>
        <SideBarLists1 Icon={VideocamOutlinedIcon} title="New meeting" />
        <SideBarLists1 Icon={KeyboardIcon} title="Join a meeting" />
      </div>
      </Box>
      <ComposeMail openDialog={openDialog} setOPenDialog={setOPenDialog} />
      </Box>
  );
};


export default SideBarContent;