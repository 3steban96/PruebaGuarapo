import React, { useEffect, useState } from 'react'
import { getEpisodes } from '../../services/GetData';
import { Container, Col, Row, Card } from 'react-bootstrap';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import './Episodes.css'
export default function Episodes() {
    const [episodes, setEpisodes]= useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response = await getEpisodes(page);
                setEpisodes(response.episodes);
                setTotalPages(response.info.pages);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        fetchData();
    },[page]);
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
  return (
    <Container fluid className='mt-5'>
        <Row>
            {episodes.map((episode) => (
                <Col xs={12} sm={6} md={4} lg={3} key={episode.id} className='mb-4'>
                    <Card className='h-100 cardEpisodes ms-4 me-4' >
                        <Card.Body>
                            <Card.Title className='fontRickMorty'>{episode.name}</Card.Title>
                            <Card.Text>
                                {episode.air_date}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        <PaginationComponent 
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
    </Container>
  )
}
