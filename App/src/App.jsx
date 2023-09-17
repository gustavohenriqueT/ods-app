import React from 'react'
import Header from "./components/Header";
import Stats from "./components/Stats";
import Explanation from "./components/Explanation";
import Reason from "./components/Reason";
import Voting from "./components/Voting";
import Register from "./components/Register";
import Footer from "./components/Footer";
const App = ()=>(
    <>
        <Header/>
        <Stats/>
        <Explanation/>
        <Reason/>
        <Voting/>
        <Register/>
        <Footer/>
    </>
);

export default App