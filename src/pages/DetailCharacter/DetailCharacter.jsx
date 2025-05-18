import React, { useEffect, useState } from 'react';
import { getCharacterById } from '../../services/GetData';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Card, Spinner } from 'react-bootstrap';
import './DetailCard.css';

export default function DetailCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchCharacterDetail();
  }, [id]);

  if (!character) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="success" />
      </Container>
    );
  }
  const generetedCodeBar= ()=>{
    const codeBar = character.id.toString().padStart(6, '0');
    return codeBar;
  }
  return (
    <Container fluid className='bg-light py-5'>
      <Row className="justify-content-center p-3">
        <Col xs={12} md={8} lg={8} className="pt-3">
          <Card className='shadow-lg border-0 cardStyle'>
            <div className='titleLicence text-center py-3'>
              <h1 className='mb-0'>Portal License</h1>
            </div>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={5} className="text-center mb-4 mb-md-0 border-10">
                  <Card.Img 
                    src={character.image} 
                    alt={character.name} 
                    className="character-img"
                  />
                </Col>
                <Col xs={12} md={7}>
                  <h2 className='fw-bold mb-3 fontRickMorty'>{character.name}</h2>
                  <p><strong>Species:</strong> {character.species}</p>
                  <p><strong>Origin:</strong> {character.origin?.name}</p>
                  <p><strong>Gender:</strong> {character.gender}</p>
                  <p><strong>Status:</strong> {character.status}</p>
                </Col>                
              </Row>
              <Row>
                <div className="text-center">
                  <div className="barcode-container">
                    <div className="barcode" data-content={generetedCodeBar()} />
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={4} className="pt-3">
          <Card className="shadow-sm border-0 h-100 containerEpisodes">
            <Card.Body>
              <h4 className="fw-bold mb-3 text-center fontRickMorty">Episodios donde fue utilizado</h4>
              <div className="episode-list">
                {character.episode.map((episodeUrl, index) => {
                  const episodeId = episodeUrl.split('/').pop();
                  return (
                    <div key={index} className="episode-card px-3 py-2 mb-2 rounded">
                      <p className="mb-0">
                        <strong>Episode {episodeId}</strong>
                      </p>
                      <small className="text-muted">{episodeUrl}</small>
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
