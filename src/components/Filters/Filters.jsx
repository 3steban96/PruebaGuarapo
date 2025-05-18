import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { filterGender, filterSpecies, filterStatus, searchCharacter } from '../../services/GetData';
import './Filter.css'
export default function Filters({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setSpecies('');
    setStatus('');
    setSearchTerm('');
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
    setGender('');
    setStatus('');
    setSearchTerm('');
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setGender('');
    setSpecies('');
    setSearchTerm('');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setGender('');
    setSpecies('');
    setStatus('');
  };

  useEffect(() => {
    const bounceTimeout = setTimeout(() => {
      if (searchTerm) {
        const fetchData = async () => {
          try {
            const data = await searchCharacter(searchTerm);          
            onSearchResults(data.results);
          } catch (error) {
            console.error('Error:', error);
            onSearchResults([]); 
          }
        };
        fetchData();
      } else if (!gender && !species && !status) {
        onSearchResults(null);
      }
    }, 1000);

    return () => clearTimeout(bounceTimeout);
  }, [searchTerm, onSearchResults]);

  // useEffect para los filtros
  useEffect(() => {
    const fetchDataFilters = async () => {
      try {
        if (gender) {
          const data = await filterGender(gender);
          onSearchResults(data.results);
        } else if (species) {
          const data = await filterSpecies(species);
          onSearchResults(data.results);
        } else if (status) {
          const data = await filterStatus(status);
          onSearchResults(data.results);
        }
      } catch (error) {
        console.error('Error:', error);
        onSearchResults([]);
      }
    };

    if (gender || species || status) {
      fetchDataFilters();
    }
  }, [gender, species, status, onSearchResults]);

  return (
    <Container fluid>
      <div className="d-md-none ps-2 pe-2">
        <input  type="text" className="mb-2 mt-5 inputSearchMovil" placeholder="Search" onChange={handleSearch} value={searchTerm} />
        <Accordion className="mt-3 mx-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                </svg>
            </Accordion.Header>            
            <Accordion.Body>
              <Form.Select  className="mb-2 selects" onChange={handleStatusChange} value={status}>
                <option value="">Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </Form.Select>
              <Form.Select className="mb-2 selects"onChange={handleGenderChange}value={gender}>
                <option value="">Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
              </Form.Select>
              <Form.Select className="mb-2 selects" onChange={handleSpeciesChange} value={species}>
                <option value="">Species</option>
                <option value="human">Human</option>
                <option value="alien">Alien</option>
                <option value="robot">Robot</option>
                <option value="mythological">Mythological</option>
                <option value="unknown">Unknown</option>
                <option value="animal">Animal</option>
                <option value="humanoid">Humanoid</option>
                <option value="disease">Disease</option>
              </Form.Select>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Row className='ms-5 me-5 mt-5 d-none d-md-flex'>
        <Col sm={12} md={3} lg={3} xl={3} className='mt-3'>
          <input type="text" className="mb-2 inputSearchDesktop" placeholder="Search" onChange={handleSearch}value={searchTerm}/>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3} className='mt-3'>
          <Form.Select onChange={handleStatusChange}value={status} className='selects'>
            <option value="">Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Form.Select>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3} className='mt-3'>
          <Form.Select onChange={handleGenderChange} value={gender}className='selects'>
            <option value="">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </Form.Select>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3} className='mt-3'>
          <Form.Select onChange={handleSpeciesChange}value={species}className='selects'>
            <option value="">Species</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="robot">Robot</option>
            <option value="mythological">Mythological</option>
            <option value="unknown">Unknown</option>
            <option value="animal">Animal</option>
            <option value="humanoid">Humanoid</option>
            <option value="disease">Disease</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}