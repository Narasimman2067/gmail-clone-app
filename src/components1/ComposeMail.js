import { Box, Dialog, InputBase, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, IconButton } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import "../Css/ComposeMail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


function ComposeMail({ openDialog,setOPenDialog}) {
  
const [focus,setFocus] =useState(false)
const [data,setData] =useState({})
const [name, setName] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
  const config ={
    Host : "smtp.elasticemail.com",
    Username : "fdavidl073+ivhq5@gmail.com",
    Password : "C691D0B7AACA958173930816CCCF235DD0B3",
    Port :2525,
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI2MTA3OTRmM2RjYzI3ZTliYjUwYiIsImlhdCI6MTY4MTA2MzE3NywiZXhwIjoxNjgxNjY3OTc3fQ.WZ4opYKCdczDLZTUSih5YI8jBlmFZgUJMVn-CRZWV4s";
  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(`https://gmailclone-backend-j7ay.onrender.com/user/alluser`, {
          method: "GET",
          headers: {
            "Content-Type": "applications/json",
            "x-auth-token":token
          }
         
        })
        const data =await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
    getContent();
  }, []);

  






const closeComposeMail =()=>{

setOPenDialog(false)
}


const sendMail = (e)=>{
e.preventDefault();
// this code taken from smtpjs
  if(window.Email){
  window.Email.send({
  ...config,
    To : data.name,
    From :'mrbeastyt2067@gmail.com',
    Subject :data.subject,
    Body : data.textarea
}).then(
  message => alert(message),toastOptions
);
};
  setOPenDialog(false)
}

const onValueChange =(e)=>{
  setData({...data,[e.target.name] : e.target.value})
  console.log(data)
}

const formSubmit = (e) => {
  e.preventDefault() 
  if(name === ''){
    toast.error(
      "to is required",
      toastOptions)

  }
  if(subject === ''){
    toast.error(
      "subject is required",
      toastOptions);
    
  }
  if(message === ''){
    toast.error("message is required",toastOptions);
    
  }
}
const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};


  return (
    <Dialog 
    open={openDialog} 
    PaperProps={{ sx: dialogStyle }}>
      <Box>
        <Box className="compose">
          <Box className="compose-header">
            <Box className="compose-header-left">
              <Typography>New Message</Typography>
            </Box>

            <Box className="compose-header-right">
              <IconButton>
                <MinimizeIcon />
              </IconButton>
              <IconButton>
                <FullscreenExitOutlinedIcon />
              </IconButton>
              <IconButton>
                <CloseOutlinedIcon
                 onClick={() =>closeComposeMail()}
                />
              </IconButton>
            </Box>
          </Box>
          <form

            onSubmit={formSubmit}
          >
            <Box className="compose-body">
              <Box className="compose-body-form" >
                <Box sx={{ display: "flex", flexDirection: "Column" }}>
                  
                  <div   onClick={()=>setFocus(true)} >
                  <span style={{display:"flex",flexDirection:"row",alignItems:"center",marginLeft:"10px",gap:"0.5rem" }}> 
                  <p>{focus ? "To" : "Recipients"}</p>
                 <InputBase
                 className="compose-body-form"
                  type="email"
                  
                  name="name"
                 
                  onChange={(e)=>onValueChange(e)}
                    sx={{ borderBottom: "1px solid lightgrey" }}
                    placeholder="Recipients"
                  />
                  </span> 
                  </div>
                  <InputBase
                  type="text"
                  name="subject"
                  fullWidth
                   onChange={(e)=>onValueChange(e)}
                    sx={{ borderBottom: "1px solid lightgrey",width:"100vw"  }}
                    placeholder="Subject"
                  />
                </Box>
                <TextField
                type="text/number"
                name="textarea"
                  multiline
                  rows={8}
                  onChange={(e)=>onValueChange(e)}
                  sx={{ border: "transparent", outline: "none" }}
                ></TextField>
              </Box>
            </Box>

            <Box className="compose-footer">
              <Box className="compose-footer-left">
                <Button 
                onClick={(e)=>sendMail(e)}
                
                variant="contained" color="primary">
                  Send <ArrowDropDownIcon />

                </Button>
              </Box>
              <div className="compose-footer-right">
                <IconButton>
                  <FormatColorTextIcon />
                </IconButton>
                <IconButton>
                  <LinkIcon />
                </IconButton>
                <IconButton>
                  <InsertEmoticonIcon />
                </IconButton>

                <IconButton>
                  <NoteAddIcon />
                </IconButton>
                <IconButton>
                  <PhotoIcon />
                </IconButton>
                <IconButton>
                  <PhonelinkLockIcon />
                </IconButton>
                <IconButton>
                  <CreateIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>

                <IconButton>
                  <DeleteIcon 
                  onClick={()=>setOPenDialog(false)}
                  />
                </IconButton>
              </div>
            </Box>
          </form>
         
        </Box>
      </Box>
      <ToastContainer/>
    </Dialog>
   
  );
}

export default ComposeMail;

const dialogStyle = {
  background: "transparent",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
