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
      <EmailBody  name="the clone gmail" subject="subject" message="bodybody86374085608637408560863740856086374085608637408560863740856086374085608637408560863740856086374085608637408560" time="2:30pm"/>
    
    </div>
  );
};

export default EmailLists;
