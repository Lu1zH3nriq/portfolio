import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";
import logoLuiz from "../img/logoLuiz.png";
import foto from "../img/foto1.png";
import fotoGrande from "../img/foto maior.jpg";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaGithub,
} from "react-icons/fa";

import "animate.css";
import ScrollReveal from "scrollreveal";

import desDesktop from "../img/desDesktop.jpg";
import desWeb from "../img/desWeb.jpg";
import desMobile from "../img/desMobile.jpg";

import LappImage1 from "../img/print 1.png";
import LappImage2 from "../img/print 4.png";

function HomePage() {
  useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".animeLinhaInicio");
  }, []);

  useEffect(() => {
    const animacaoSobre = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 2000,
      delay: 200,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoSobre.reveal(".animeSobre");
  }, []);

  function ModalFormContato(props) {
    return (
      <ReactBootstrap.Modal
        className="modal1"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter" className="titleContato">
            Contato
          </ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <ReactBootstrap.Row className="edit">
            <ReactBootstrap.Col xs={12} md={4} className="colunaIcons">
              <h4>Redes Sociais</h4>
              <ul className="listaLinksForm">
                <li>
                  <a
                    href="https://www.instagram.com/luiz.rodri_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagramSquare /> Instagram{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5534998713749?text=Ol%C3%A1%2C+tudo+bem%3F+Vi+seu+portf%C3%B3lio+e+gostei+dos+seus+projetos%2C+podemos+conversar+mais+a+respeito.++"
                    target="blank"
                  >
                    <FaWhatsappSquare /> Whatsapp{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/luiz-henrique-mendes-23395a217/"
                    target="blank"
                  >
                    <FaLinkedin /> Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Lu1zH3nriq" target="blank">
                    <FaGithub /> GitHub{" "}
                  </a>
                </li>
              </ul>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs={12} md={8}>
              <h4>Se preferir me mande um email </h4>
              <ReactBootstrap.Form>
                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <ReactBootstrap.Form.Label>
                    Digite seu e-mail
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="email"
                    placeholder="name@example.com"
                  />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <ReactBootstrap.Form.Label>
                    Sua mensagem aqui:
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control as="textarea" rows={3} />
                </ReactBootstrap.Form.Group>
              </ReactBootstrap.Form>
              <ReactBootstrap.Button>Enviar</ReactBootstrap.Button>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button onClick={() => setModalFormContato(false)}>
            Fechar
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
    );
  }
  function ModalDesktop(props) {
    return (
      <ReactBootstrap.Modal
        className="modal1"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
            L.APP - foods
          </ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <ReactBootstrap.Image
            className="imgDesktop"
            src={LappImage1}
            alt="Funcionamento do Software"
            title="Print do funcionamento do software"
          />
          <ReactBootstrap.Image
            className="imgDesktop"
            src={LappImage2}
            alt="Funcionamento do Software"
            title="Print do funcionamento do software"
          />
        </ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button onClick={() => setModalDesktop(false)}>
            Fechar
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
    );
  }
  function ModalWeb(props) {
    return (
      <ReactBootstrap.Modal
        className="modal1"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
            Sites e Landing Pages
          </ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <h4>Imagens de sites e Landing Pages</h4>
        </ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button onClick={() => setModalWeb(false)}>
            Fechar
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
    );
  }
  function ModalMobile(props) {
    return (
      <ReactBootstrap.Modal
        className="modal1"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
            Aplicativos
          </ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <h4>Imagem de Aplicativos</h4>
        </ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button onClick={() => setModalMobile(false)}>
            Fechar
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
    );
  }

  const [modalFormContato, setModalFormContato] = React.useState(false);
  const [modalDesktop, setModalDesktop] = React.useState(false);
  const [modalWeb, setModalWeb] = React.useState(false);
  const [modalMobile, setModalMobile] = React.useState(false);

  return (
    <>
      <header className="header">
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" variant="light">
          <ReactBootstrap.Container>
            <a href="/">
              <ReactBootstrap.Image
                className="logoLuiz"
                src={logoLuiz}
                alt="Logo"
                title="Logo"
              />
            </a>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link className="headerFont" href="#inicio">
                  Início
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link
                  className="headerFont"
                  href="#projetos"
                >
                  Projetos
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="#sobre">
                  Sobre
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="#contato">
                  Contato
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </header>

      <section id="inicio" className="backgroundImage">
        <ReactBootstrap.Container>
          <ModalFormContato
            show={modalFormContato}
            onHide={() => setModalFormContato(false)}
          />
          <ReactBootstrap.Row className="linha animeLinhaInicio">
            <ReactBootstrap.Col className="colunaTexto">
              <h3>Olá, eu sou Luiz Henrique ...</h3>
              <p>
                Meu nome é Luiz Henrique, tenho 22 anos e sou um desenvolvedor
                full stack de aplicações web e mobile. Desenvolvo sites, landing
                pages e até aplicações mais completas tanto para web quanto para
                mobile. Minhas habilidades são voltadas as tecnologias Java e
                JavaScript, como também banco de dados SQL e NoSQL. Se você está
                procurando um profissional capacitado e dedicado para ajudar no
                seu projeto, eu posso ajudar! Veja alguns dos meus projetos e
                entre em contato comigo para discutirmos mais sobre suas
                necessidades.
              </p>
              <div className="btnSaibaMais">
                <ReactBootstrap.Button
                  variant="info"
                  onClick={() => setModalFormContato(true)}
                >
                  Contate-me !
                </ReactBootstrap.Button>
              </div>
            </ReactBootstrap.Col>

            <ReactBootstrap.Col className="colunaFoto">
              <ReactBootstrap.Image
                className="fotoLuiz"
                src={foto}
                alt="Foto"
                title="Foto"
              />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      <section id="projetos" className="projetos">
        <ReactBootstrap.Container>
          <ModalDesktop
            show={modalDesktop}
            onHide={(setModalDesktop) => false}
          />
          <ModalWeb show={modalWeb} onHide={(setModalWeb) => false} />
          <ModalMobile show={modalMobile} onHide={(setModalMobile) => false} />
          <div className="projetosContainer">
            <h3>Projetos</h3>
            <ReactBootstrap.Row className="linhas animeLinha1">
              <ReactBootstrap.Col className="colunaTxt">
                <h2>Desenvolvimento Desktop</h2>
                <h4>L.APP - foods</h4>
                <p>
                  Um sistema de gestão para bares e restaurantes num formato PDV
                  (Ponto de Venda) que é possivel controlar estoque e vendas
                  através de uma estrutura de comandas. Foi desenvolvido
                  utilizando a linguagem JAVA com a estrutura de POO
                  (programação orientada a objetos) juntamente com a IDE
                  Netbeans e também com armazenagem dos dados no banco de dados
                  relacional MySQL.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="info"
                    onClick={() => setModalDesktop(true)}
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaImg">
                <ReactBootstrap.Image
                  className="img"
                  src={desDesktop}
                  alt="Projeto Desktop"
                  title="L.APP - foods"
                />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row className="linhas animeLinha2">
              <ReactBootstrap.Col className="colunaImg">
                <ReactBootstrap.Image
                  className="img"
                  src={desWeb}
                  alt="Projeto Web"
                  title="Sites e Landing Pages"
                />
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaTxt">
                <h2>Desenvolvimento Web</h2>
                <h4>Sites e Landing Pages</h4>
                <p>
                  Um sistema de gestão para bares e restaurantes num formato PDV
                  (Ponto de Venda) que é possivel controlar estoque e vendas
                  através de uma estrutura de comandas. Foi desenvolvido
                  utilizando a linguagem JAVA juntamente a IDE Netbeans e também
                  com armazenagem dos dados no banco de dados relacional MySQL.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="info"
                    onClick={() => setModalWeb(true)}
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row className="linhas animeLinha3">
              <ReactBootstrap.Col className="colunaTxt">
                <h2>Desenvolvimento Mobile</h2>
                <h4>Aplicativo Mobile</h4>
                <p>
                  Um sistema de gestão para bares e restaurantes num formato PDV
                  (Ponto de Venda) que é possivel controlar estoque e vendas
                  através de uma estrutura de comandas. Foi desenvolvido
                  utilizando a linguagem JAVA juntamente a IDE Netbeans e também
                  com armazenagem dos dados no banco de dados relacional MySQL.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="info"
                    onClick={() => setModalMobile(true)}
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaImg">
                <ReactBootstrap.Image
                  className="img"
                  src={desMobile}
                  alt="Aplicativo Mobile"
                  title="Aplicativo do Kaka"
                />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </div>
        </ReactBootstrap.Container>
      </section>

      <section id="sobre">
        <div className="sobre">
          <ReactBootstrap.Container>
            <div className="conteudoSobre">
              <h3>Minha história</h3>
              <ReactBootstrap.Row className="linhaSobre animeSobre">
                <ReactBootstrap.Col>
                  <ReactBootstrap.Image
                    className="fotoSobre"
                    src={fotoGrande}
                    alt="Foto"
                    title="Foto"
                  />
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className="txtSobre">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </div>
          </ReactBootstrap.Container>
        </div>
      </section>

      <footer id="contato" className="footer">
        <ReactBootstrap.Container>
          <ReactBootstrap.Row className="linhaContato">
            <h3>Links e Contatos</h3>
            <ReactBootstrap.Col className="colunaIcons">
              <ul className="listaLinks">
                <li>
                  <a
                    href="https://www.instagram.com/luiz.rodri_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagramSquare /> Instagram{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5534998713749?text=Ol%C3%A1%2C+tudo+bem%3F+Vi+seu+portf%C3%B3lio+e+gostei+dos+seus+projetos%2C+podemos+conversar+mais+a+respeito.++"
                    target="blank"
                  >
                    <FaWhatsappSquare /> Whatsapp{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/luiz-henrique-mendes-23395a217/"
                    target="blank"
                  >
                    <FaLinkedin /> Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Lu1zH3nriq" target="blank">
                    <FaGithub /> GitHub{" "}
                  </a>
                </li>
              </ul>
            </ReactBootstrap.Col>

            <ReactBootstrap.Col className="colunaCopyRight">
              <p>©2023 L H R Mendes. Todos os direitos reservados.</p>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </footer>
    </>
  );
}

export default HomePage;
