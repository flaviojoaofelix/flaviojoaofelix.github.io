import { ContentCard } from '../components/layout';

function Home() {
  return (
    <ContentCard icon="bi bi-person" title="about me">
      <h4 className="card-title">Olá,</h4>
      <h5 className="card-title">
        Meu nome é <strong>Flávio</strong>, tenho 37 anos e sou de
        Florianópolis/SC.
      </h5>
      <p className="mt-4 text-break card-text text-justify">
        Trabalho com Desenvolvimento Web e estou aprimorando meus conhecimentos
        fazendo um curso de Desenvolvimento Full Stack na{' '}
        <a
          href="https://www.betrybe.com/"
          target="_blank"
          rel="external noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Trybe | Escola de Programação"
        >
          Trybe
        </a>
        , onde já completei os módulos de Fundamentos, Front-end, Back-end e
        estou na reta final, no módulo de Ciências da Computação, completando
        esse curso em Março/2023.
        <br />
        <br />
        Sempre fui apaixonado por tecnlogia e a programação apareceu cedo na
        minha vida, como um hobby, já que os primeiros computadores que tive
        acesso (por voltar de 1997) não rodavam jogos e tinham o acesso a
        internet extremamente limitado. Meu primeiro contato com a programação
        foi no{' '}
        <a
          href="https://www.mirc.com/"
          target="_blank"
          rel="external noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="mIRC: Internet Relay Chat"
        >
          mIRC
        </a>
        , um programa de bate-papo que fez muito sucesso em meados de 2000, onde
        fazia scripts para facilitar o uso e me divertir com os amigos.
        <br />
        <br />
        Posteriormente comecei a desenvolver websites, primeiro estáticos em
        HTML e com o tempo implementando ou configurando &apos;scripts&apos; em
        algumas linguages como CGI, ASP, ColdFusion, PHP entre outras.
        <br />
        <br />
        Ao longo de minha vida tive várias experiências relacionadas a
        tecnologia, contato com diversos SO&apos;s, linguagens de programação,
        hardware e tudo que tenha relação com computadores.
        <br />
        <br />A vida acabou me levando por outros caminhos, me levando a ter
        outras experiências profissionais e pessoais, mas desde 2022 voltei a me
        focar no desenvolvimento web, onde busco criar soluções que facilite o
        dia-a-dia das pessoas, pois isso é um grande prazer pessoal e o que mais
        me motiva nessa área.
      </p>
    </ContentCard>
  );
}

export default Home;
