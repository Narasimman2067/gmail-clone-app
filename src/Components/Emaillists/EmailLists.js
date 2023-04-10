import React, { useEffect, useState } from "react";
import "./EmailLists.css";
import EmailListController from "./EmailListController";
import EmailType from "./EmailType";
import EmailBody from "../EmailBody/EmailBody";

const EmailLists = () => {
  const [emails,setEmails]=useState([])
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
        setEmails(data.message)
      } catch (error) {
        console.log(error)
      }
    };
    getContent();
  }, []);
  return (
    <div className="emaillist">
      <EmailListController />
      <EmailType  />

      {
        emails.map(({name,message,subject,dateSaved})=>{
          return  <EmailBody name={name} subject={subject} message={message} dateSaved={dateSaved}/>
          // <EmailBody name="rajasrinath" subject="Reactjs and backend" message="learning react js" time="11:20 am"/>
          // <EmailBody name="rajapraga" subject="mongo db" message="learning mongoose and backend" time="12:20 pm"/>
          // <EmailBody name="gokulraja" subject="nodejs" message="deploy node js " time="10:20 pm"/>
        
        })
      }
     
    </div>
  );
};

export default EmailLists;
