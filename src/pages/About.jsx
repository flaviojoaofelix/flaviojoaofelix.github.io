import React from 'react';

function About() {
  const tiWidth = 610 + 'px';

  return (
    <>
      <section id="about">
        <div className="px-3 mb-8">
          <h2 className="font-monospace display-2">Flávio João Félix</h2>
          <h3 className="font-monospace display-6">Full Stack Web Developer</h3>
        </div>
        <article className="border border-1 rounded p-3 mb-8">
          <p className="lead">
            Olá, seja bem vindo(a)!
            <br />
            Meu nome é Flávio e atualmente moro em Florianópolis/SC.
          </p>
          <p className="lead">
            Estou me formando como um Desenvolvedor Web Full Stack pela{' '}
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
              Trybe
            </a>
            .
          </p>
          <p className="lead">
            Ao longo de toda minha vida estive em contato com com diversos OS&apos;s, linguagens de
            programação, hardware e tudo que possa ter relação com computadores. Sempre fui
            apaixonado por tecnologia, programação e jogos eletrônicos. Buscar por soluções que
            facilite o dia-a-dia das pessoas me motiva e é um grande prazer pessoal!
          </p>
        </article>
      </section>
      <section id="tech-icons" className="mx-auto hstack" style={{ width: tiWidth }}>
        <div className="text-center">
          <i className="fab fa-git-alt fa-4x"></i>
          <p>Git</p>
        </div>
        <div className="ms-5 text-center">
          <i className="fab fa-html5 fa-4x"></i>
          <p>HTML</p>
        </div>
        <div className="ms-5 text-center">
          <i className="fab fa-css3-alt fa-4x"></i>
          <p>CSS</p>
        </div>
        <div className="ms-5 text-center">
          <i className="fab fa-js fa-4x"></i>
          <p>JavaScript</p>
        </div>
        <div className="ms-5 text-center">
          <i className="fab fa-react fa-4x"></i>
          <p>React</p>
        </div>
        <div className="ms-5 text-center">
          <i className="fab fa-mdb fa-4x"></i>
          <p>Material Design</p>
        </div>
      </section>
    </>
  );
}

export default About;
