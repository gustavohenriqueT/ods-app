import React, {useEffect, useState} from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Comment from "../../components/Comentario";

function ods1() {
    const [dataUser, setDataUser] = useState({
        idUsuario : "",
        nomeUsuario: "",
        emailUsuario: "",
    });
    useEffect(() => {
        const dataUser = localStorage.getItem("User");
        dataUser && setDataUser(JSON.parse(dataUser));
    }, []);
    return (
        <>
            <Header nomeUsuario={dataUser.nomeUsuario}/>
            <div className="ods">
                <div>
                    <h2>Erradicação da Pobreza</h2>
                    <p>
                        Segundo informações do site da Plataforma Agenda 2030, até 2015, a pobreza havia sido reduzida
                        significativamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como
                        foram realizados progressos na promoção da igualdade de gênero e no empoderamento das
                        mulheres e meninas. Contudo, a erradicação da pobreza extrema em todas as suas formas é o
                        maior desafio global para ser atingido o desenvolvimento sustentável.
                    </p>
                    <p>
                        São metas do ODS 1:
                    </p>
                    <ul>
                        <li>1.1 Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares,
                            atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia.
                        </li>
                        <li>1.2 Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças, de
                            todas as idades, que vivem na pobreza, em todas as suas dimensões, de acordo com as
                            definições nacionais.
                        </li>
                        <li>1.3 Implementar, em nível nacional, medidas e sistemas de proteção social apropriados, para
                            todos, incluindo pisos, e até 2030 atingir a cobertura substancial dos pobres e vulneráveis.
                        </li>
                        <li>1.4 Até 2030, garantir que todos os homens e mulheres, particularmente os pobres e
                            vulneráveis, tenham direitos iguais aos recursos econômicos, bem como acesso a serviços
                            básicos, propriedade e controle sobre a terra e outras formas de propriedade, herança,
                            recursos naturais, novas tecnologias apropriadas e serviços financeiros, incluindo
                            microfinanças.
                        </li>
                        <li>1.5 Até 2030, construir a resiliência dos pobres e daqueles em situação de vulnerabilidade,
                            e reduzir a exposição e vulnerabilidade destes a eventos extremos relacionados com o clima e
                            outros choques e desastres econômicos, sociais e ambientais.
                        </li>
                        <li>1.a Garantir uma mobilização significativa de recursos a partir de uma variedade de fontes,
                            inclusive por meio do reforço da cooperação para o desenvolvimento, de forma a proporcionar
                            meios adequados e previsíveis para que os países em desenvolvimento, em particular os países
                            de menor desenvolvimento relativo, implementem programas e políticas para acabar com a
                            pobreza em todas as suas dimensões.
                        </li>
                        <li>1.b Criar marcos políticos sólidos, em níveis nacional, regional e internacional, com base
                            em estratégias de desenvolvimento a favor dos pobres e sensíveis a gênero, para apoiar
                            investimentos acelerados nas ações de erradicação da pobreza.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Ações do TRT/CE relacionadas ao ODS 1</h2>
                    <p>
                        A coordenadora do Núcleo de Responsabilidade Socioambiental do TRT/CE (Ecosétima), Silvana
                        Dias, destaca atividades desenvolvidas no âmbito da Justiça do Trabalho do Ceará que visam à
                        redução da pobreza. “As campanhas solidárias são as principais ações. TRT Solidário e Natal
                        Solidário são exemplos de iniciativas voltadas para o segmento que não tem salário e vive à
                        margem da sociedade”, comentou.
                    </p>
                    <p>
                        Silvana frisou ainda sobre o trabalho de coleta seletiva feito nas dependências do Regional.
                        “Quando se destina material reciclável para associações de catadores, a instituição está
                        contribuindo com a garantia de renda desses trabalhadores”, salientou.
                    </p>
                    <p>
                        Para a servidora, todos podem contribuir com a erradicação da pobreza. “Ser solidário e
                        voluntário em causas sociais; aliar-se a projetos sociais e apoiar as organizações não
                        governamentais; doar alimentos, objetos e outros itens” são algumas das atitudes apontadas por
                        Silvana.
                    </p>
                    <p>
                        A gestora da Ecosétima afirmou que magistrados, servidores e estagiários podem ajudar
                        concretamente na redução da pobreza. “Dentro da instituição, podem participar ativamente das
                        campanhas solidárias, além de se desfazer de algum bem que não tenha mais utilidade. Ter em
                        mente que aquele bem pode ter utilidade para alguma pessoa necessitada”, finalizou Silvana.
                    </p>
                    <p>
                        A Ecosétima recolhe permanentemente as doações, que podem ser feitas na sala da unidade
                        (mezanino do Anexo 1 do TRT/CE) ou na Diretoria do Fórum Autran Nunes (1º andar do Ed. Dom
                        Hélder), em Fortaleza.
                    </p>
                </div>

                <div>
                    <h2>A erradicação da pobreza é um objetivo ambicioso e crucial...</h2>
                    <p>
                        Sobre a ODS 1: Erradicação da Pobreza:
                    </p>
                    <p>
                        Definição: A meta é acabar com a pobreza em todas as suas formas, em todos os lugares. Isso
                        inclui pessoas vivendo com menos de US$ 1,90 por dia, promovendo a proteção social, garantindo
                        o acesso a serviços básicos e oportunidades econômicas.
                    </p>
                    <p>
                        Abordagem Multidimensional: A ODS 1 reconhece que a pobreza não é apenas uma questão de
                        renda, mas também está relacionada à falta de acesso à educação, saúde, água potável, saneamento
                        básico e outros direitos fundamentais.
                    </p>
                    <p>
                        Contexto Global: A erradicação da pobreza é um desafio global, afetando países desenvolvidos e
                        em desenvolvimento. A cooperação internacional é essencial para alcançar resultados
                        significativos.
                    </p>
                    <p>
                        Curiosidades:
                    </p>
                    <ul>
                        <li>Dados Atuais: Antes da pandemia de COVID-19, estimava-se que mais de 9% da população mundial
                            vivia em extrema pobreza. A pandemia exacerbou essa situação.
                        </li>
                        <li>Sucessos Notáveis: Alguns países alcançaram sucesso notável na redução da pobreza,
                            implementando estratégias eficazes de desenvolvimento econômico, investindo em educação e
                            saúde, e promovendo a igualdade.
                        </li>
                    </ul>
                    <p>
                        Soluções:
                    </p>
                    <ul>
                        <li>Inclusão Financeira: Facilitar o acesso a serviços financeiros pode capacitar as pessoas
                            economicamente, permitindo-lhes investir em suas vidas e comunidades.
                        </li>
                        <li>Educação de Qualidade: Investir em educação de qualidade é fundamental para romper o ciclo
                            da pobreza, capacitando as pessoas com as habilidades necessárias para melhorar suas vidas.
                        </li>
                        <li>Desenvolvimento Sustentável: Abordagens sustentáveis de desenvolvimento econômico, que
                            respeitam os limites ambientais e promovem a equidade social, são essenciais para alcançar a
                            erradicação da pobreza a longo prazo.
                        </li>
                    </ul>
                    <p>
                        Lembre-se, a erradicação da pobreza é um esforço contínuo que exige colaboração global,
                        comprometimento político e ação coletiva.
                    </p>
                </div>
            </div>
            {localStorage.getItem("User")?<Comment/>:<p>Faça login para ver o comentários</p>}
            <Footer/>
        </>
    );
}

export default ods1;