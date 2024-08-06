import React, { useState } from 'react';
import { MainContent } from './styled';
import { Dropdown } from 'react-bootstrap';
import Cartao from '../../components/Card';
import { professores } from '../../assets/config/data';

export default function Docentes() {
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const handleSelect = (id) => {
    if (selectedProfessor === null) {
      setSelectedProfessor(
        professores.find((professor) => professor.id === parseInt(id, 10))
      );
    } else selectedProfessor(null);
  };

  return (
    <MainContent>
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-10 mt-5">
          <h2>Docentes</h2>
          <p>
            O Projeto IMPACT-LAB conta com a colaboração de Professores(as) com
            anos de experiência acadêmica e na indústria da tecnologia.
          </p>
          {/* <Dropdown onChange={handleSelect}>
            <div className="p-1 mb-4">
              <Dropdown.Toggle id="dropdown-basic">
                Buscar docente...
              </Dropdown.Toggle>
            </div>

            <Dropdown.Menu>
              {professores.map(({ id, nome }) => (
                <Dropdown.Item key={id}>{nome}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown> */}
          <div className="lista-docentes">
            {selectedProfessor ? (
              <ul className="list-unstyled">
                <li>
                  <Cartao info={selectedProfessor} />
                </li>
              </ul>
            ) : (
              <ul className="list-unstyled">
                {professores.map((p) => (
                  <li key={p.id}>
                    <Cartao info={p} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </MainContent>
  );
}
