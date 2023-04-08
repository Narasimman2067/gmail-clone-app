import React from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../Compose/Compose.css";
import { Button, IconButton } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";

function Compose() {

const dispatch=useDispatch()

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
      <CloseOutlinedIcon onClick={()=>dispatch(closeSendMessage())} />
      </IconButton>
      </div>
       
       
    
      </div>
      <div className="compose-body">
      <div className="compose-body-form">
        
     <input  type="email" placeholder="Reciepents" name="email"/>

        <input name="text" type="text" placeholder="subject" />
        
        <textarea rows={12} placeholder="message"></textarea>
      </div>
        </div>

      <div className="compose-footer">
      <div className="compose-footer-left">
       
        {/* <button type="submit" > Send <ArrowDropDownIcon/> </button> */}
<Button variant="contained" color="primary">Send <ArrowDropDownIcon/></Button>
      
   

  
      </div>
      <div className="compose-footer-right">
        <IconButton>
        <FormatColorTextIcon/>
        </IconButton>
        <IconButton>
        <LinkIcon/>
          </IconButton>
          <IconButton>
          <InsertEmoticonIcon/>
          </IconButton>

            <IconButton>
            <NoteAddIcon/>
        </IconButton> 
         <IconButton>
         <PhotoIcon/>
          </IconButton>
          <IconButton>
          <PhonelinkLockIcon/>
          </IconButton>
          <IconButton>
          <CreateIcon/>
          </IconButton>
          <IconButton>
          <MoreVertIcon/>
          </IconButton>

          <IconButton>
          <DeleteIcon/>
          </IconButton>


</div>

      </div>
    </div>
  );
}

export default Compose;
