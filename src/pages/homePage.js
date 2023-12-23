import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";
import logoLuiz from "../img/H.png";
import fotoGrande from "../img/foto maior.jpg";
import whatsapp from "../img/whatsapp3.webP";

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


function HomePage() {
  const [modalContact, setModalContact] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");

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

  const handleModalContact = () => {
    setModalContact(!modalContact);
  };

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
                <ReactBootstrap.Nav.Link
                  className="headerFont"
                  href="#contato"
                  onClick={() => {
                    handleModalContact();
                  }}
                >
                  Contato
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </header>

      <section id="inicio" className="backgroundImage">
        <ReactBootstrap.Container>
          <ReactBootstrap.Row className="linha animeLinhaInicio">
            
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      <section id="projetos" className="projetos">
        <ReactBootstrap.Container>
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
                  <ReactBootstrap.Button variant="info" onClick={() => {}}>
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
                  <ReactBootstrap.Button variant="info" onClick={() => {}}>
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
                  <ReactBootstrap.Button variant="info" onClick={() => {}}>
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
          <div className="conteudoSobre">
            <ReactBootstrap.Container>
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
            </ReactBootstrap.Container>
          </div>
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

      <a
        href="https://wa.me/5534998713749?text=Ol%C3%A1%2C+tudo+bem%3F+Vi+seu+portf%C3%B3lio+e+gostei+dos+seus+projetos%2C+podemos+conversar+mais+a+respeito.++"
        target="blank"
      >
        <img
          className="fixedButton"
          src={whatsapp}
          alt="Whatsapp"
          title="Whatsapp"
        />
      </a>

      <ReactBootstrap.Modal
        show={modalContact}
        backdrop="static"
        onHide={() => {
          handleModalContact();
        }}
        size="lg"
      >
        <ReactBootstrap.Container>
          <ReactBootstrap.Modal.Header closeButton>
            Contato
          </ReactBootstrap.Modal.Header>

          <ReactBootstrap.Modal.Body>
            <ReactBootstrap.Form onSubmit={() => {}}>
              <ReactBootstrap.Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <ReactBootstrap.Form.Label>
                  Digite seu nome:
                </ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control
                  type="text"
                  placeholder="Seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </ReactBootstrap.Form.Group>

              <ReactBootstrap.Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <ReactBootstrap.Form.Label>
                  Digite seu email:
                </ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control
                  type="email"
                  placeholder="email@exemplo.com.br"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </ReactBootstrap.Form.Group>

              <ReactBootstrap.Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <ReactBootstrap.Form.Label>
                  Informe o assunto:
                </ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control
                  type="text"
                  placeholder="Qual o assunto"
                  onChange={(e) => setAssunto(e.currentTarget.value)}
                  value={assunto}
                />
              </ReactBootstrap.Form.Group>

              <ReactBootstrap.Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <ReactBootstrap.Form.Label>
                  Escreva sua mensagem:
                </ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </ReactBootstrap.Form.Group>

              <div className="btnEnviar">
                <input className="button" type="submit" value="Enviar" />
              </div>
            </ReactBootstrap.Form>
          </ReactBootstrap.Modal.Body>

          <ReactBootstrap.Modal.Footer></ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Container>
      </ReactBootstrap.Modal>
    </>
  );
}

export default HomePage;
