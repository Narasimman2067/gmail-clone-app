import React from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../Compose/Compose.css";
import { IconButton } from "@mui/material";

function Compose() {
  return (
    <div className="compose">
      <div className="compose-header">
        <div className="compose-header-left">
          <span>New Message</span>
         
        
        </div>
   
      <div className="compose-header-right">
        <IconButton>
        <MinimizeIcon />
        </IconButton>
        <IconButton>
        <FullscreenExitOutlinedIcon />
        </IconButton>
      <IconButton>
      <CloseOutlinedIcon />
      </IconButton>
      </div>
       
       
    
      </div>
      <div className="compose-body">
      <div className="compose-body-form">
        
     <input  type="email" placeholder="Reciepents" name="email"/>

        <input type="text" placeholder="subject" />
        
        <textarea rows={10} placeholder="message"></textarea>
      </div>
        </div>

      <div className="Compose-footer">

      </div>
    </div>
  );
}

export default Compose;
