import './index.css'
import {svgOds} from "../utils/ods.jsx";
const ODS=[
    {
        name:'Erradicação da Probreza',
        svg: svgOds.Ods1,
        id:1
    },
{
        name:'Fome Zero e Agricultura Sustentável',
    svg: svgOds.Ods2,
        id:2
    },
{
        name:'Saúde e Bem-Estar',
    svg: svgOds.Ods3,
        id:3
    },
{
        name:'Educação de Qualidade',
    svg: svgOds.Ods4,
        id:4
    },
{
        name:'Igualdade de Gênero',
    svg: svgOds.Ods5,
        id:5
    },
{
        name:'Água Potável e Saneamento',
    svg: svgOds.Ods6,
        id:6
    },
{
        name:'Energia Limpa e Sustentável',
    svg: svgOds.Ods7,
        id:7
    },
{
        name:'Trabalho Decente E Crescimento Econômico',
    svg: svgOds.Ods8,
        id:8
    },
{
        name:'índustria, Inovação E Infraestrutura',
    svg: svgOds.Ods9,
        id:9
    },
    {
        name:'Água Potável e Saneamento',
        svg: svgOds.Ods10,
        id:10
    },
    {
        name:'Cidades e Comunidades Sustentáveis',
        svg: svgOds.Ods11,
        id:11
    },
    {
        name:'Consumo E Produção Responsáveis',
        svg: svgOds.Ods12,
        id:12
    },
    {
        name:'Ação Contra A Mudança Global Do Clima',
        svg: svgOds.Ods13,
        id:13
    },
    {
        name:'Vida Na Água',
        svg: svgOds.Ods14,
        id:14
    },
    {
        name:'Vida Terrestre',
        svg: svgOds.Ods15,
        id:15
    },
    {
        name:'Paz, Justiça e Instituições Eficazes',
        svg: svgOds.Ods16,
        id:16
    },
    {
        name:'Parcerias E Meios de Implementação',
        svg: svgOds.Ods17,
        id:17
    }
]
import {Link} from "react-router-dom"

const Navbar = () =>{
    const listOds = ODS.map(ods =>
        <li key={ods.id} >
            <Link to={"/ods"+ods.id} style={ods.id >= 2 ? { pointerEvents: 'none' } : {}}>
                <img src={ods.svg} alt={ods.name}/>
            </Link>
        </li>
      );
    return (
        <nav>
            <ul>
                {listOds}
            </ul>
        </nav>
    )
}

export default Navbar