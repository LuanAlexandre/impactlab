import { Button, Card } from 'react-bootstrap';
import { StyledCartao } from './styled';
import { ReactComponent as IconLattes } from '../../assets/images/icone/lattes.svg';

export default function Cartao({ info }) {
  const { nome, descricao, lattes, imagem } = info;

  return (
    <StyledCartao className="shadow-lg">
      <Card.Img
        className="card-img"
        variant="top"
        src={imagem}
        alt={`Foto do Professor ${nome}`}
      />
      <Card.Body>
        <Card.Title className="nome">{nome}</Card.Title>
        <Card.Text>
          <p>{descricao}</p>
        </Card.Text>
        <div className="lattes">
          <Button>
            <a href={lattes} target="_blank" rel="noreferrer">
              <IconLattes className="botao-img" />
            </a>
          </Button>
        </div>
      </Card.Body>
    </StyledCartao>
  );
}
