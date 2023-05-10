import React, { useEffect, useState } from "react";
import "../Css/MailLists.css";
import MailListController from "./MailListController";
import MailBody from "./MailBody";
import MailType from "./MailType";


const MailLists = () => {
  const [emails, setEmails] = useState([]);

  
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI2MTA3OTRmM2RjYzI3ZTliYjUwYiIsImlhdCI6MTY4MTA2MzE3NywiZXhwIjoxNjgxNjY3OTc3fQ.WZ4opYKCdczDLZTUSih5YI8jBlmFZgUJMVn-CRZWV4s";
  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(
          `https://gmailclone-backend-j7ay.onrender.com/user/alluser`,
          {
            method: "GET",
            headers: {
              "Content-Type": "applications/json",
              "x-auth-token": token,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setEmails(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    getContent();
  }, []);


 
  return (
    <div className="emaillist">
      <MailListController />
      <MailType />

      {emails.map(({ name, message, subject, dateSaved},index ) => {
        return (
          <MailBody
          key={index}
            name={name}
            subject={subject}
            message={message}
            dateSaved={dateSaved}
          />
        );
        //
      })}
    </div>
  );
};

export default MailLists;
