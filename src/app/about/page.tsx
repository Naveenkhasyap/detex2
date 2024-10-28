import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Page ",
  description: "About team",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Team" description="Team behind the product." />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
