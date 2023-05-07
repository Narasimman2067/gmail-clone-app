import React from "react";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const MailListController = () => {
  return (
    <div className="emailcontainer">
      
      <div className="emailcontainer-left">
        <IconButton>
            <CheckBoxOutlineBlankOutlinedIcon/>
        </IconButton>
        <IconButton>
            <ArrowDropDownIcon/>
        </IconButton>
        <IconButton>
            < RefreshOutlinedIcon/>
        </IconButton>
        <IconButton>
            <MoreVertOutlinedIcon/>
        </IconButton>
      </div>
      <div className="emailcontainer-right">
      <p className="number">1-50  0f 100</p>
        <IconButton>
            <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
            <ChevronRightIcon/>
        </IconButton>
        
      </div>
    </div>
  );
};

export default MailListController;
