import React from 'react'
import './index.css'
const ODS=[
    {
        name:'Erradicação da Probreza',
        id:1
    },
{
        name:'Fome Zero e Agricultura Sustentável',
        id:2
    },
{
        name:'Saúde e Bem-Estar',
        id:3
    },
{
        name:'Educação de Qualidade',
        id:4
    },
{
        name:'Igualdade de Gênero',
        id:5
    },
{
        name:'Água Potável e Saneamento',
        id:6
    },
{
        name:'Energia Limpa e Sustentável',
        id:7
    },
{
        name:'Trabalho Decente E Crescimento Econômico',
        id:8
    },
{
        name:'índustria, Inovação E Infraestrutura',
        id:9
    },
    {
        name:'Água Potável e Saneamento',
        id:10
    },
    {
        name:'Cidades e Comunidades Sustentáveis',
        id:10
    },
    {
        name:'Consumo E Produção Responsáveis',
        id:12
    },
    {
        name:'Ação Contra A Mudança Global Do Clima',
        id:13
    },
    {
        name:'Vida Na Água',
        id:14
    },
    {
        name:'Vida Terrestre',
        id:15
    },
    {
        name:'Paz, Justiça e Instituições Eficazes',
        id:16
    },
    {
        name:'Parcerias E Meios de Implementação',
        id:17
    }
]

const Navbar = () =>{
    const listOds = ODS.map(ods =>
        <li key={ods.id} alt={ods.name}>
            <a href="#" style={{padding:'10px'}}><img src="./assets/SDG-1.SVG"/></a>
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