import React from "react";
import "./EmailLists.css";
import EmailListController from "./EmailListController";
import EmailType from "./EmailType";
import EmailBody from "../EmailBody/EmailBody";

const EmailLists = () => {
  return (
    <div className="emaillist">
      <EmailListController />
      <EmailType  />
      <EmailBody/>
    
    </div>
  );
};

export default EmailLists;
