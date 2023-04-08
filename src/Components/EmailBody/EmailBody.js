import React from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import "../EmailBody/EmailBody.css"

const EmailBody = ({name,subject,time,message}) => {
  return (
    <div className="emailbody">
      <div className="emailbody-left">
        <CheckBoxOutlineBlankOutlinedIcon />
        <StarOutlineOutlinedIcon />
      

        <h4>{name}</h4>
      </div>
      <div className="emailbody-middle">
        <div className="emailbody-middle-message">
          <p>
            <b>{subject}</b>
          <span>{message}</span>
          </p>
        </div>
      </div>
      <div className="emailbody-right">
       <p>{time}</p>
      </div>
    
    </div>
  );
};

export default EmailBody;
