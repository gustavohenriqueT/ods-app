import { useEffect, useState } from "react";
import Explanation from "../../components/Explanation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

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
      <Explanation />
      <Footer />
    </>
  );
}

export default Home;
