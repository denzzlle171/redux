import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, lastPage, totalItems }) => {
  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== lastPage && totalItems!==0;

  return (
    <div className="pagination">
      <button disabled={!isPrevPageAvailable} onClick={goPrev} className="btn">
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={!isNextPageAvailable} onClick={goNext} className="btn">
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
