import Footer from "~/common/footer";
import Header from "~/common/header";
import CategoriesService from "~/components/categories/service";

export default function categoriesPage() {
  return (
    <>
      <Header />
      <CategoriesService />
      <Footer />
    </>
  );
}
