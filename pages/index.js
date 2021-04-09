import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import HeaderHome from "../components/HeaderHome";
import Experiences from "../components/Experiences";
import CoursesHome from "../components/CoursesHome";
import AboutHome from "../components/AboutHome";
import pageContext from "../context/pages/pageContext";

export default function Home() {
    const { courses } = useContext(pageContext)


  return (
      <Layout path="">
          <HeaderHome/>
          <Experiences/>
          {
              courses ? (<CoursesHome/>) : null
          }

          <AboutHome/>
      </Layout>
  )
}
