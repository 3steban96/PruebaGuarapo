import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css'
export default function PaginationComponent({ currentPage, totalPages, onPageChange }) {
    const items = [];    
    items.push(
        <Pagination.Prev 
            key="prev"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
        />
    );

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let number = startPage; number <= endPage; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === currentPage}
                onClick={() => onPageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    items.push(
        <Pagination.Next 
            key="next"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
        />
    );

    return (
        <div className="d-flex justify-content-center mt-4">
            <Pagination className='paginations'>{items}</Pagination>
        </div>
    )
}