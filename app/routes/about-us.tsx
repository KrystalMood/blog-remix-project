import { MetaFunction } from "@remix-run/react";
import Footer from "~/common/footer";
import Header from "~/common/header";
import AboutUsContact from "~/components/about-us/contact";
import AboutUsForeword from "~/components/about-us/foreword";
import AboutUsHero from "~/components/about-us/hero";
import AboutUsTeam from "~/components/about-us/team";

export const meta: MetaFunction = () => {
  return [{ title: "About Us | Serene" }, { name: "description", content: "" }];
};
export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsHero />
      <AboutUsForeword />
      <AboutUsTeam />
      <AboutUsContact />
      <Footer />
    </>
  );
}
