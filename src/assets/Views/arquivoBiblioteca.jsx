import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CardPubli from "../components/CardPubli";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function arquivoBiblioteca() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <h3 className="title">
            COMO O DESIGN DE INTERFACES PODE FACILITAR O USO DE PRODUTOS
            DIGITAIS POR PESSOAS IDOSAS
          </h3>
          <br />
          <p>RESUMO</p>
          <br />
          <p>
            A expectativa de vida tem aumentado no mundo todo. O envelhecimento
            da população, que teve início em países desenvolvidos, como o Japão,
            hoje pode ser percebido também em países em desenvolvimento e
            subdesenvolvidos. Com o avanço da tecnologia, cada vez mais os
            idosos são impulsionados a interagir em um ambiente digital. Estudos
            mostram que o número de acesso à internet aumentou entre as pessoas
            com 65 anos ou mais. Apesar disso, eles ainda enfrentam muitas
            barreiras ao interagir com sites e aplicativos. Com o passar do
            tempo, os idosos apresentam um declínio nas funções orgânicas que
            devem ser levadas em consideração no design. Além disso, a pouca
            familiaridade pode causar medo e ansiedade nos idosos, influenciando
            negativamente a aceitação no uso de tecnologias para as tarefas
            cotidianas. Todas essas dificuldades acabam excluindo as pessoas
            mais velhas do uso eficiente das tecnologias e das facilidades e
            melhorias na qualidade de vida que elas podem proporcionar, podendo
            levá-las à depressão e piora nos efeitos da senilidade. Este
            trabalho propõe a potencialização da inclusão digital de pessoas
            idosas por meio do design de interfaces digitais que aplicam os
            princípios de usabilidade desenvolvidos por Jacob Nielsen, bem como
            ferramentas de acessibilidade de padrões internacionais da W3C,
            endereçadas às necessidades especificas desse público-alvo.
            <br />
            <br />
            1.INTRODUÇÃO
            <br />O mundo todo tem testemunhado um aumento significativo no
            número de idosos nos últimos anos. A Organização Mundial de Saúde
            (Organização Mundial da Saúde, 2022) projeta que até 2050 esse
            contingente alcançará 2,1 mil milhões de pessoas. Temos observado,
            ainda, um aumento considerável no acesso à internet por parte dos
            maiores de 65 anos. No entanto, apesar desse avanço, muitos idosos
            ainda enfrentam dificuldades ao lidar com as novas tecnologias.
            Essas barreiras podem resultar da falta de familiaridade com as
            tecnologias, especialmente entre aqueles idosos que não acompanharam
            a evolução digital, ou podem ser atribuídas ao processo natural de
            envelhecimento, que inclui perda de visão, memória e habilidades
            motoras. Em ambos os casos, essas dificuldades restringem o uso
            efetivo de sites e aplicativos, impedindo que os idosos aproveitem
            plenamente essas ferramentas. Isso pode impactar negativamente sua
            autonomia, qualidade de vida e, consequentemente, sua autoestima.
            Para que os idosos possam ser mais produtivos e independentes ao
            utilizar produtos digitais, é essencial que os designers de
            interfaces projetem suas criações levando em conta as necessidades
            desse público crescente na sociedade. Para isso é preciso entender
            as características desse grupo, as consequências do processo de
            envelhecimento e as dificuldades que diminuem a aceitação da
            tecnologia por essa parcela da população. A partir dos problemas
            identificados em pesquisas com adultos mais velhos é possível propor
            interfaces mais acessíveis e inclusivas. Assim, queremos provar que
            o design de interfaces pode desempenhar um papel fundamental na
            facilitação do uso de meios digitais pelos idosos, mitigando os
            desafios que enfrentam em suas atividades diárias. Como método,
            vamos avaliar o envelhecimento populacional no mundo e suas causas,
            entender as características da população idosa e suas alterações
            fisiológicas, mostrar como é o consumo de produtos digitais por essa
            camada e as dificuldades que ela experimenta. Por fim, utilizando de
            ferramentas do design inclusivo e de experiência do usuário, vamos
            propor soluções que atenuem essas barreiras e que tenham potencial
            de aumentar o uso de produtos digitais por pessoas idosas.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default arquivoBiblioteca;
