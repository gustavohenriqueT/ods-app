import './App.css'
import Header from "./components/Header";
import Stats from "./components/Stats";
import Explanation from "./components/Explanation";
import Reason from "./components/Reason";
import Voting from "./components/Voting";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Hero from "./components/Hero/index.jsx";
const App = () =>(
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
);

export default App