import React from 'react';
import { MainContent } from './styled';
import logo from '../../assets/images/logo/logo-preto-sem-fundo.png';
import logoUm from '../../assets/images/logo/logo-preto.png';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faUserTie,
  faBrazilianRealSign,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <MainContent>
      <header className="imagens">
        <Container className="px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-5 col-xl-5 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder mb-2">
                  <img
                    src={logo}
                    alt="logo site impactlab"
                    width="200"
                    height="200"
                  />
                </h1>
                <p>
                  O Projeto Impact-Lab visa a formação de profissionais na área
                  de Fotografia Computacional, com foco em estudantes de
                  graduação, pós-graduação e profissionais do mercado com curso
                  superior
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <Button>
                    <Link to="/curso">Saiba Mais</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-6 d-none d-xl-block text-center">
              <Carousel fade className="my-5">
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={logo}
                    alt="imagem 1"
                    width="20"
                  />
                  <Carousel.Caption>
                    <h3>Rótulo da imagem</h3>
                    <p>Legenda da imagem</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img className="d-block w-100" src={logoUm} alt="imagem 2" />
                  <Carousel.Caption>
                    <h3>Rótulo da imagem</h3>
                    <p>Legenda da imagem</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container>
      </header>
      <section className="py-5">
        <Container className="px-5 my-5">
          <h2 className="fw-bolder mb-0">
            Conheça o mundo da Fotografia Computacional no melhor Instituto de
            Computação da Região Norte!
          </h2>
        </Container>
      </section>
      <section className="py-5">
        <Container className="px-5 my-5">
          <div className="row gx-5 row-cols-1 row-cols-md-2">
            <div className="col mb-5 h-100">
              <div className="info-curso bg-gradient rounded-3 mb-3">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h5>Estrutura</h5>
              <p>
                Laboratórios de Treinamento equipados com computadores
                direcionados para o processamento de imagens.
              </p>
            </div>
            <div className="col mb-5 h-100">
              <div className="info-curso bg-gradient rounded-3 mb-3">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h5>Docentes</h5>
              <p>
                Professores com anos de experiência acadêmica, na indústria e na
                pesquisa em Fotografia e Visão Computacional.
              </p>
            </div>
            <div className="col h-100">
              <div className="col mb-5 h-100">
                <div className="info-curso bg-gradient rounded-3 mb-3">
                  <FontAwesomeIcon icon={faBrazilianRealSign} />
                </div>
                <h5>Auxílio Capacitação</h5>
                <p>
                  Visando incentivar a matrícula e permanência no curso, o
                  projeto prevê o pagamento de auxílio financeiro para alunos
                  selecionados.
                </p>
              </div>
            </div>
            <div className="col h-100"></div>
          </div>
        </Container>
      </section>
    </MainContent>
  );
}
