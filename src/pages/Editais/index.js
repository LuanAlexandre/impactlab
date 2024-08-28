import React from 'react';
import { MainContent } from './styled';
import { Container } from 'react-bootstrap';
import edital from '../../files/edital_001_2024/projeto_Impact-Lab_edital_001_2024_selecao_discentes.pdf';
import { forms } from '../../assets/config/formulario';
import homologacao from '../../files/edital_001_2024/Projeto_Impact-Lab_Edital_001_2024_homologacao_inscricoes.pdf';

export default function Editais() {
  return (
    <MainContent className="mt-5">
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-8 mt-3">
          <section className="py-5">
            <Container className="px-5">
              <div className="row gx-5">
                <div className="col">
                  <h2 className="mb-4">
                    <strong>Edital 001 / 2024 - Turma 04</strong>
                  </h2>
                  <div className="mb-4">
                    <div className="small text-muted">31 de Julho, 2024</div>

                    <a href={edital} target="_blank" rel="noreferrer">
                      <h4>Edital 001/2024 - Seleção de Discentes</h4>
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="small text-muted">31 de Julho, 2024</div>
                    <a href={forms.url} target="_blank" rel="noreferrer">
                      <h4>Formulário de Requerimento de Inscrição</h4>
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="small text-muted">27 de Agosto, 2024</div>
                    <a href={homologacao} target="_blank" rel="noreferrer">
                      <h4>Homologação das Inscrições</h4>
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="small text-muted">28 de Agosto, 2024</div>
                    {/*<a href="" target="_blank" rel="noreferrer">*/}
                    <h4>Resultado Preliminar</h4>
                    {/*</a>*/}
                  </div>
                  <div className="mb-4">
                    <div className="small text-muted">31 de Agosto, 2024</div>
                    {/*<a href="" target="_blank" rel="noreferrer">*/}
                    <h4>Resultado Final</h4>
                    {/*</a>*/}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </MainContent>
  );
}
