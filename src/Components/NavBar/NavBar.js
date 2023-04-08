import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

import "../NavBar/NavBar.css";
const NavBar = () => {


 

 

  return (
    // top of the navbar controller
    <div className="navbar">
      
      {/* /* ******* navbar left- contents ********* */}

      <div className="navbar-left">
        <IconButton> 
          <ReorderIcon />
        </IconButton>

        <img
          className="logo"
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail"
        />
      </div>

      {/* ********navbar middle contebnts ************** */}

      <div className="navbar-middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="search" placeholder="Search" />
          {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>

      {/* ***********navbar right contents****************** */}

      <div className="navbar-right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQS3FXn0alyEfNkVm9kWa0yA700XH0i3uV-lJzp7izIK10Ez8mh"></Avatar>
      </div>
    </div>
  );
};

export default NavBar;
