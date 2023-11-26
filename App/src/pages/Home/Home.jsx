import { useEffect, useState } from "react";
import Explanation from "../../components/Explanation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function Home() {
  const [dataUser, setDataUser] = useState({
    idUsuario : "",
    nomeUsuario: "",
    emailUsuario: "",
  });
  useEffect(() => {
    const dataUser = localStorage.getItem("User");
    dataUser && setDataUser(JSON.parse(dataUser));
  }, []);
  console.log(dataUser);
  return (
    <>
      <Header nomeUsuario={dataUser.nomeUsuario} />
      <Hero nomeUsuario={dataUser.nomeUsuario} />
      <Explanation />
      <Footer />
    </>
  );
}

export default Home;
