import './index.css'
import {BsGithub, BsLinkedin} from 'react-icons/Bs'
import {FaUniversity} from 'react-icons/Fa'
const Footer = () =>{
    return (
        <footer>
            <div className="footer_website" style={{gridArea:"website"}}>
                <p>Imparcialmente te mostrando o que realmente importa</p>
            </div>
            <div className="footer_divider" style={{gridArea:"institutional"}}>
                <h4>Institucional</h4>
                <ul className="footer_list">
                    <li>
                        <a href="#">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="#">Política de Privacidade</a>
                    </li>
                </ul>
            </div>
            <div className="footer_divider" style={{gridArea:"project"}}>
                <h4>O Projeto</h4>
                <ul className="footer_list">
                    <li>
                        <a href="#">Funcionamento</a>
                    </li>
                    <li>
                        <a href="#">Contribuição</a>
                    </li>
                    <li>
                        <a href="#">Comunidade</a>
                    </li>
                </ul>
            </div>
            <div className="footer-soc" style={{gridArea:"socials"}}>
                <h4>Nossas Redes</h4>
                <ul className="footer_socials">
                    <li>
                        <a href="#"><BsGithub/></a>
                    </li>
                    <li>
                        <a href="#"><BsLinkedin/></a>
                    </li>
                    <li>
                        <a href="#"><FaUniversity/></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer