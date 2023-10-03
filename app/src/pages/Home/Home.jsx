import Explanation from "../../components/Explanation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Reason from "../../components/Reason";
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
        <Footer/>
    </>
    )
}

export default Home