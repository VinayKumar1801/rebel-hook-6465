import { Fragment } from "react";
import EmailPlans from "./Emailplans";
import Featured from "../Website/Featured";
import DeveloperFeatures from "./DeveloperFeatures";
import Questions from "../Marketing/Questions";
import SendEmail from "./SendEmails";

export default function TransactionalEmail() {
  return (
    <Fragment>
      <EmailPlans />
      <Featured />
      <DeveloperFeatures />
      <Questions />
      <SendEmail />
    </Fragment>
  );
}
