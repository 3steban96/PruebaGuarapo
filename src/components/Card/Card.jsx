import React,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { getAllCharacters } from '../../services/GetData';
import { useNavigate } from 'react-router-dom';
import './Card.css'
export default function CardCharacter({ characters: searchResults }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchResults) {
      setCharacters(searchResults);
      setInfo({ next: null }); 
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllCharacters(page);
        if (page === 1) {
          setCharacters(data.characters);
        } else {
          setCharacters(prevCharacters => [...prevCharacters, ...data.characters]);
        }
        setInfo(data.info);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, searchResults]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const selectCharacter=(id)=>{
    navigate(`/detailCharacter/${id}`);
  }
  return (
    <>
      {characters.map((character) => (
        <Col xs={12} sm={6} md={4} lg={3} key={character.id} className='mb-4 '>
          <Card className='h-100 shadow' onClick={() => selectCharacter(character.id)}>
            <Card.Img  src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                {character.species}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {info.next && !loading && (
        <div className="d-flex justify-content-center w-100 mb-4">
          <Button onClick={loadMore} className='shadow btnLoadMore'>
            Load More
          </Button>
        </div>
      )}
      {loading && (
        <div className="d-flex justify-content-center w-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  )
}