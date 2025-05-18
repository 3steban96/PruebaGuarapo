import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getLocations } from '../../services/GetData';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import './Locations.css'
export default function Locations() {
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getLocations(page);
                setLocations(response.locations);
                setTotalPages(response.info.pages);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        }
        fetchData();
    }, [page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <Container fluid className='mt-5'>
            <Row>
                {locations.map((location) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={location.id} className='mb-4'>
                        <Card className='h-100 cardLocations'>
                            <Card.Body>
                                <Card.Title className='fontRickMorty'>{location.name}</Card.Title>
                                <Card.Text>
                                    {location.type}
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