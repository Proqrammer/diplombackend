import React from "react";
import Layout from "../../controllers/Layout/Layout";
import MoreCard from "../../controllers/MoreCard/MoreCard";
import Awesome from "../../controllers/Awesome/Awesome";
import MeetTeam from "../../controllers/MeetTeam/MeetTeam";
import ProductSec from "../../controllers/ProductSec/ProductSec";
import BitcoinSec from "../../controllers/BitcoinSec/BitcoinSec";
import News from "../../controllers/News/News";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) return;

  if(user) {
    console.log("Qeydiyyat var")
  }

  return (
    <Layout>
      <MoreCard />
      <BitcoinSec />
      {/* <ProductSec/> */}
      {/* <News/> */}
      <Awesome />
      <MeetTeam />
    </Layout>
  );
};

export default Home;
