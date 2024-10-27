import Footer from "~/common/footer";
import Header from "~/common/header";
import AboutUsContact from "~/components/about-us/contact";
import AboutUsForeword from "~/components/about-us/foreword";
import AboutUsHero from "~/components/about-us/hero";
import AboutUsTeam from "~/components/about-us/team";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <AboutUsHero />
      <AboutUsForeword />
      <AboutUsContact />
      <AboutUsTeam />
      <Footer />
    </>
  );
}
