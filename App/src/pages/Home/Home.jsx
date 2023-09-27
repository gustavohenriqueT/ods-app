import Explanation from "../../components/Explanation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Reason from "../../components/Reason";
import Register from "../../components/Register";
import Stats from "../../components/Stats";
import Voting from "../../components/Voting";

function Home () {
    return (
        <>
        <Header/>
        <Hero/>
        <Stats/>
        <Explanation/>
        <Reason/>
        <Voting/>
        <Register/>
        <Footer/>
    </>
    )
}

export default Home