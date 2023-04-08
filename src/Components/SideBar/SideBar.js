import React from "react";

import "./SideBar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SideBarLists from "./SideBarLists";
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
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";
const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose-btn"
      onClick={()=>dispatch(openSendMessage())}
      
      
      >
        Compose
      </Button>

      <div className="sidebarlists2">
        <SideBarLists
          Icon={InboxIcon}
          title="Inbox"
          number="224"
          isactive="true"
        />
        <SideBarLists
          Icon={StarOutlineOutlinedIcon}
          title="Starred"
          number="224"
        />
        <SideBarLists
          Icon={AccessTimeOutlinedIcon}
          title="Snoozed"
          number="224"
        />
        <SideBarLists Icon={SendIcon} title="Sent" number="224" />
        <SideBarLists Icon={DraftsIcon} title="Drafts" number="2" />
        <SideBarLists
          Icon={LabelImportantOutlinedIcon}
          title="Important"
          number="24"
        />
        <SideBarLists Icon={MessageIcon} title="Chats" number="24" />
        <SideBarLists
          Icon={ScheduleSendOutlinedIcon}
          title="scheduled"
          number="22"
        />
        <SideBarLists
          Icon={MarkAsUnreadOutlinedIcon}
          title="All Mail"
          number="4"
        />
        <SideBarLists
          Icon={ReportGmailerrorredOutlinedIcon}
          title="Spam"
          number="224"
        />
        <SideBarLists Icon={DeleteOutlineRoundedIcon} title="Bin" number="4" />
        <SideBarLists Icon={ExpandMoreIcon} title="More" number="4" />

        <h3 className="sidebarlists-heading" Icon={LabelOutlinedIcon}>
          Categories
        </h3>
        <SideBarLists
          Icon={PeopleOutlineOutlinedIcon}
          title="Social"
          number="4"
        />
        <SideBarLists
          Icon={ErrorOutlineOutlinedIcon}
          title="Updates"
          number="4"
        />
        <SideBarLists Icon={ForumOutlinedIcon} title="Forums" />

        <SideBarLists Icon={LocalOfferIcon} title="Promotions" />
        <h3 className="sidebarlists-heading2">Meet</h3>
        <SideBarLists Icon={VideocamOutlinedIcon} title="New meeting" />
        <SideBarLists Icon={KeyboardIcon} title="Join a meeting" />
      </div>
    </div>
  );
};

export default SideBar;
