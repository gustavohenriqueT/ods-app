import { useEffect, useState } from "react";
import Explanation from "../../components/Explanation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Reason from "../../components/Reason";
import Stats from "../../components/Stats";
import Voting from "../../components/Voting";

function Home() {
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const dataUser = localStorage.getItem("teste");
    dataUser && setDataUser(JSON.parse(dataUser));
  }, []);
  console.log(dataUser);
  return (
    <>
      <Header username={dataUser.username} />
      <Hero username={dataUser.username} />
      <Stats />
      <Explanation />
      <Reason />
      <Voting />
      <Footer />
    </>
  );
}

export default Home;
