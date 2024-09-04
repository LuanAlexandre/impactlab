import React from 'react';
import { MainContent } from './styled';
import logo from '../../assets/images/logo/logo-cor.png';
import turmaIcomp from '../../assets/images/turmas/turmaicomp.jpeg';
import turmaUm from '../../assets/images/turmas/turma1.jpg';
import turmaTres from '../../assets/images/turmas/turma3.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faUserTie,
  faBrazilianRealSign,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import resultadoFinal from '../../files/edital_001_2024/Projeto_Impact-Lab_Edital_001_2024_resultado_final.pdf';

export default function Home() {
  return (
    <MainContent>
      <section className="py-5">
        <Container className="px-5 my-5">
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
            <Link className="editalhome" to={resultadoFinal} target="_blank">
              <h2 className="fw-bolder mb-0 d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
                Resultado Final
              </h2>
            </Link>
          </div>
          <br />
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
            <h4 className="fw-bolder mb-0 d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
              MATRÍCULA PRORROGADA ATÉ O DIA 06/09, SEXTA-FEIRA
            </h4>
          </div>
        </Container>
      </section>
      <header className="imagens">
        <Container className="px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-5 col-xl-5 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder mb-2">
                  <img
                    className="logo-image-main"
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
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100 fixed-size"
                    src={turmaIcomp}
                    alt="turma na escada ao lado da placa do icomp"
                  />
                  <Carousel.Caption>
                    <h3>Professores e ex-alunos do IMPACT-LAB</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100 fixed-size"
                    src={turmaUm}
                    alt="encerramento da turma um"
                  />
                  <Carousel.Caption>
                    <h3>Encerramento da 1ª Turma.</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100 fixed-size"
                    src={turmaTres}
                    alt="turma na aula de inauguracao"
                  />
                  <Carousel.Caption>
                    <h3>Inauguração da Sala de Treinamento com a 3ª Turma</h3>
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
