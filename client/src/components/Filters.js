import React from 'react'

const Filters = ({handleFilter, filter}) => {
  return (
    <div className="filters">
      <div
        onClick={() => handleFilter(1)}
        className={`filter red ${filter === 1 ? 'filter-selected' : ''}`}
      ></div>
      <div
        onClick={() => handleFilter(2)}
        className={`filter orange ${filter === 2 ? 'filter-selected' : ''}`}
      ></div>
      <div
        onClick={() => handleFilter(3)}
        className={`filter yellow ${filter === 3 ? 'filter-selected' : ''}`}
      ></div>
      <div
        onClick={() => handleFilter('done')}
        className={`filter green ${filter === 4 ? 'filter-selected' : ''}`}
      ></div>
    </div>
  )
}

export default Filters
