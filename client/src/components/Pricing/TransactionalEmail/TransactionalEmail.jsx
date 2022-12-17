import { Fragment } from "react";
import EmailPlans from "./Emailplans";
import Featured from "../Website/Featured";
import DeveloperFeatures from "./DeveloperFeatures";

export default function TransactionalEmail() {
  return (
    <Fragment>
      <EmailPlans />
      <Featured />
      <DeveloperFeatures />
    </Fragment>
  );
}
