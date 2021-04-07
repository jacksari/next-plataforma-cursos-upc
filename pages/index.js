import Layout from "../components/layout/Layout";
import HeaderHome from "../components/HeaderHome";
import Experiences from "../components/Experiences";
import CoursesHome from "../components/CoursesHome";
import AboutHome from "../components/AboutHome";

export default function Home() {
  return (
      <Layout path="">
          <HeaderHome/>
          <Experiences/>
          <CoursesHome/>
          <AboutHome/>
      </Layout>
  )
}
