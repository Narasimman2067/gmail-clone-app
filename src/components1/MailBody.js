import React, { useEffect } from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import "../Css/MailBody.css";



export const MailBody = ({ name, subject,dateSaved, message }) => {
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
        <p>{dateSaved}</p>
      </div>
     
    </div>
  );
};

export default MailBody;
