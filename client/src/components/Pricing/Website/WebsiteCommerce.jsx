import { Fragment } from "react";
import WebsiteFeatures from "./WebsiteFeatures";
import WebsitePlans from "./WebsitePlans";

export default function WebsiteCommerce() {
  return (
    <Fragment>
      <WebsitePlans />
      <WebsiteFeatures />
    </Fragment>
  );
}
