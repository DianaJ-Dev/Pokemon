import React from 'react'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
    const handlePageClick = (page) => {
      onPageChange(page);
    };
  
    const renderPageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} style={{ cursor: 'pointer', padding: '5px', color: currentPage === i ? 'blue' : 'black' }} onClick={() => handlePageClick(i)}>
            {i}
          </li>
        );
      }
      return pageNumbers;
    };
  
    return (
      <div>
        <ul className="pagination">
          {renderPageNumbers()}
        </ul>
      </div>
    );
  };
