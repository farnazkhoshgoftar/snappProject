import React from "react";
import Header from "../../components/header";
import Description from "../../components/description";
import SnapServices from "../../components/snappServices";
import SnapIntro from "../../components/snapIntro";
import SnapTabs from "../../components/snapTabs";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const Home = () => {
  return (
    <div>
      <Navbar/>
        <Header />
        <Description />
        <SnapServices />
        <SnapIntro />
        <SnapTabs />
        <Footer/>
    </div>
  );
};
export default Home;
