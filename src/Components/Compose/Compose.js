import React, { useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../Compose/Compose.css";
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
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";



function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const formSubmit = (e) => {
      e.preventDefault();}
  // const [emailBody, setEmailBody] = useState({
  //   to: "",
  //   subject: "",
  //   message: "",
  // });

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   if (to === "") {
  //     return "To is required";
  //   }
  //   if (subject === "") {
  //     return "subject is required";
  //   }
  //   if (message === "") {
  //     return "message is required";
  //   }
   
  // };
  //  axios
  //     .post(
  //       "https://gmailcloneapk-backend.vercel.app/user/post",
  //       emailBody
  //     )
  //     .then((res) => {
  //       setEmailBody({
  //         to,
  //         subject,
  //         message,
  //       });
  //       setTo("");
  //       setSubject("");
  //       setMessage("");
  //       dispatch(closeSendMessage());
  //     })
  //     .catch((err) => {
  //       console.log("Error in emailbody!",err);
  //     });

  // const onChange = (e) => {
  //   setEmailBody({ ...emailBody, [e.target.name]: e.target.value });
  // };

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
            <CloseOutlinedIcon onClick={() => dispatch(closeSendMessage())} />
          </IconButton>
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose-body">
          <div className="compose-body-form">
            <input
              type="email"
              placeholder="Reciepents"
              name="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              name="text"
              type="text"
              placeholder="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              rows={12}
              placeholder="message"
              onChange={(e) => setMessage(e.target.value)}
            >
              {message}
            </textarea>
          </div>
        </div>

        <div className="compose-footer">
          <div className="compose-footer-left">
            <Button type="submit" variant="contained" color="primary">
              Send <ArrowDropDownIcon />
            </Button>
          </div>
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
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
