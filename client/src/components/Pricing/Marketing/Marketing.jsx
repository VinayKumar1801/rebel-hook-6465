import { Fragment } from "react";
import Features from "./Features";
import PlanVariants from "./PlanVariants";
import Questions from "./Questions";

export default function MarketingPlatform() {
  return (
    <Fragment>
      <PlanVariants />
      <Features />
      <Questions />
    </Fragment>
  );
}
