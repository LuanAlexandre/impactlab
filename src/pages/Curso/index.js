import React from 'react';
import { MainContent } from './styled';
import { Table } from 'react-bootstrap';

export default function Curso() {
  return (
    <MainContent className="mt-5">
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-8 mt-3">
          <h2>Sobre o Curso de Capacitação</h2>
          <p>
            O curso tem como objetivo principal formar recursos humanos de alta
            qualidade com habilidades e conhecimentos técnicos avançados para
            exploração, aplicação e implementação de técnicas avançadas de no
            ramo da fotografia computacional, com foco em alunos de graduação,
            pós-graduação e profissionais do mercado com ensino superior.
          </p>
        </div>
      </div>
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-8 mt-3">
          <h2>Informações Gerais</h2>
          <Table responsive>
            <tbody>
              <tr>
                <th>Duração do Curso:</th>
                <td>9 meses</td>
              </tr>
              <tr>
                <th>Carga Horária:</th>
                <td>330 horas (Dividas em 3 módulos)</td>
              </tr>
              <tr>
                <th>Dia/Horário:</th>
                <td>Segunda, Quartas e Quintas; De 18h às 21h;</td>
              </tr>
              <tr>
                <th>Modalidade das Aulas:</th>
                <td>Híbrido. A critério de cada professor.</td>
              </tr>
              <tr>
                <th>Local:</th>
                <td>
                  Sala de Treinamento do IMPACT-LAB, Térreo do Bloco III do
                  IComp
                </td>
              </tr>
              <tr>
                <th>Data de Início:</th>
                <td>19/08/2024</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-8 mt-3">
          <h2>Auxílio Capacitação</h2>
          <p>
            Visando incentivar a matrícula e permanência no curso, o projeto
            prevê o pagamento de auxílio financeiro para alunos selecionados.
            Serão disponibilizados 18 auxílios financeiros. Cada auxílio será de
            R$ 900,00 (novecentos reais) por mês, no período de 9 meses.
          </p>
        </div>
      </div>
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-8 mt-3">
          <h2>Ementa</h2>
          <Table responsive>
            <tbody>
              <tr>
                <th>Disciplina</th>
                <th>Ementa</th>
                <th>Docente</th>
                <th>CH</th>
              </tr>
              <tr>
                <td>Fotografia e Câmeras Digitais</td>
                <td>
                  <tr>
                    Introdução à Fotografia: exposição, luz e iluminação,
                    composição.
                    <br />
                    Câmeras Digitais: histórico, tipos de câmeras, estrutura de
                    câmeras digitais.
                    <br />
                    Optica: fundamentos e características de sistemas óticos em
                    câmeras digitais.
                  </tr>
                </td>
                <td>José Pinheiro de Queiroz Neto</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Processamento Digital de Imagens</td>
                <td>
                  Sensores de imagens, modelos de cor, formação e propriedades
                  de imagens, histograma de cor, restauração e realce,
                  transformações radiométricas, ruído e filtragem, algoritmos
                  para controle de câmera, princípios de qualidade de imagens.
                </td>
                <td>José Pinheiro de Queiroz Neto</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Arquiteturas Heterogêneas</td>
                <td>
                  Processamento de alto desempenho, arquiteturas heterogêneas,
                  aceleradores, clusters, arquiteturas de GPU, arquitetura CUDA,
                  modelo de programação heterogênea, arquiteturas heterogêneas
                  em smartphones, plataformas e linguagens de programação
                  heterogêneas.
                </td>
                <td>Antônio Souto Rodriguez</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Programação Paralela com Halide</td>
                <td>
                  Conceitos sobre computação paralela, conceitos de
                  concorrência, paralelismo e sincronismo em hardware,
                  princípios de implementação (vectorization, parallelization,
                  multi-stage pipelines, schedules), linguagem Halide,
                  desenvolvimento de algoritmos paralelos para processamento de
                  imagens usando Halide.
                </td>
                <td>Antônio Souto Rodriguez</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Visão Computacional</td>
                <td>
                  Formação de imagem; Revisão PDI; Imagens binárias e suas
                  propriedades geométricas, topológicas e morfológicas; Bordas e
                  sua detecção; Regiões e segmentação; Extração de
                  características; Visão estereoscópica: Câmeras estéreo;
                  Calibração de câmeras; Geometria epipolar; Casamento de
                  correspondências; Mapa de disparidade. Aplicações.
                </td>
                <td>Felipe Gomes de Oliveira</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Aprendizagem de Máquina</td>
                <td>
                  Conceitos básicos sobre aprendizagem de máquina; Aprendizado
                  supervisionado: regressão e classificação; Regressão linear;
                  Regressão logística; Máquinas de vetores de suporte; Redes
                  neurais; Redes profundas, convolucionais e recursivas;
                  Aprendizado não-supervisionado: clustering; Análise de
                  componentes principais. Preparação de dados e seleção de
                  atributos; Pós-processamento, seleção e combinação; Avaliação
                  de resultados; Aplicações em Visão Computacional.
                </td>
                <td>Edjard de Souza Mota</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Probabilidade e Estatística</td>
                <td>
                  Cálculos de probabilidades: Modelos Determinísticos e
                  Probabilísticos, Probabilidade Condicional, Teorema da
                  Probabilidade Total e Teorema de Bayes, Eventos independentes;
                  <br />
                  Variáveis aleatórias discretas: Distribuição de probabilidade
                  de uma V. A. discreta, Esperança e variância de uma V. A.
                  discreta, Modelos discretos mais importantes: Bernoulli,
                  Binomial, Poisson;
                  <br />
                  Variáveis aleatórias contínuas: Distribuição de probabilidade
                  de uma V. A. contínua, Medidas de Centralidade e de Dispersão
                  de uma V. A. Contínua, Modelos contínuos mais importantes:
                  Uniforme, Exponencial; Distribuição Normal;
                  <br /> Função de uma V. A: Esperança e variância de uma função
                  de uma V. A.; Propriedades da esperança, da variância e do
                  desvio-padrão;
                  <br /> Variáveis aleatórias bidimensionais: Distribuições
                  marginais, Distribuições condicionais, Variáveis aleatórias
                  independentes, Covariância e Correlação;
                  <br /> Vetores aleatórios multidimensionais: Independência,
                  Combinação Linear de n variáveis aleatórias Normais
                  independentes, Teorema Central do Limite; <br /> Amostragem e
                  estimação pontual: Amostra aleatória, Média, Variância e
                  Desvio Padrão amostrais, Estimação Pontual de parâmetros.
                </td>
                <td>James Dean Oliveira dos Santos Jr</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Análise e Qualidade de Imagem</td>
                <td>
                  Métricas de avaliação subjetiva;
                  <br />
                  Ranqueamento, Comparação Pareada, fator de influência;
                  <br />
                  Métricas de Avaliação Objetiva;
                  <br />
                  Métricas de Compressão;
                  <br />
                  Métricas de Brilho e Borramento;
                  <br />
                  Métricas de Contraste;
                  <br />
                  Métricas de Distorção com opinião consciente e inconsciente;
                  <br />
                  Avaliação desempenho de métricas de qualidade.
                </td>
                <td>José Luiz de Souza Pio</td>
                <td>40</td>
              </tr>
              {/* <tr>
                <td>Qualidade de Imagens Avançada</td>
                <td></td>
                <td>José Luiz de Souza Pio</td>
                <td>20</td>
              </tr> */}
              <tr>
                <td>Análise e Qualidade de Vídeos</td>
                <td>
                  Vídeo digital; Vídeo 3D; Filtragem; Processamento de Vídeo;
                  Compressão de Imagens e Vídeo; Padrões de Codificação de
                  Vídeo; Métricas de Qualidade de Vídeo; Qualidade de
                  Compressão; Desempenho de Codificação de Vídeo.
                </td>
                <td>José Luiz de Souza Pio</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Fotografia Computacional I</td>
                <td>
                  Introdução à Fotografia Computacional; Iluminação
                  Computacional; Óptica para Fotografia Computacional;
                  Sensoriamento; Processamento e Aplicações.
                </td>
                <td>Felipe Gomes de Oliveira</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Fotografia Computacional II</td>
                <td>
                  Superresolução; HDR; Composição de Imagens; Panoramas; Warping
                  e Morphing; Remoção da vibração; Reconstrução; Fusão de
                  Imagens; Aprendizagem de Máquina em Fotografia Computacional.
                </td>
                <td>Felipe Gomes de Oliveira</td>
                <td>30</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </MainContent>
  );
}
