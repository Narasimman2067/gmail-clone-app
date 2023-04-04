import React from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

const EmailBody = () => {
  return (
    <div className="emailbody">
      <div className="emailbody-left">
        <CheckBoxOutlineBlankOutlinedIcon />
        <StarOutlineOutlinedIcon />
      

        <h4>This clone gmail</h4>
      </div>
      <div className="emailbody-middle">
        <div className="emailbody-middle-message">
          <p>
            <b>Subject</b>
            This is message body
          </p>
        </div>
      </div>
      <div className="emailbody-right">
       <p>2:30 pm</p>
      </div>
    
    </div>
  );
};

export default EmailBody;
