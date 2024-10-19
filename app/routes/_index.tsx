import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import IndexContentSection from "~/components/index/content";
import IndexHero from "~/components/index/hero";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Serene" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <IndexHero />
      <IndexContentSection />
    </>
  );
}
