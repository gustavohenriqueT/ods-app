import Comment from "../../components/Comentario"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import VoteButton from "../../components/upvote"
import './style.css'
function Dados() {
    return (
       <>
       <Header/>
        <Comment/>
        <VoteButton/>
       <Footer/>
       </>
    )
}

export default Dados
