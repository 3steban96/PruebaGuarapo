import React, { useState } from 'react'
import NavBar from '../../navigation/navBar/NavBar'
import Header from '../../components/Header/Header'
import Filters from '../../components/Filters/Filters'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardCharacter from '../../components/Card/Card'
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const handleSearchResults = (results) => {
    setFilteredCharacters(results);
  };
  return (
    <div >
      <Header />
      <Filters onSearchResults={handleSearchResults} />
      <Container fluid className='mt-5 ps-5 pe-5'>
        <Row className=' ms-2 me-2'>
            <CardCharacter characters={filteredCharacters}/>
        </Row>
      </Container>

    </div>
  )
}
