import './Pagination.css'

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage, currentPage }) => {
  //calculate how many pages we need
  const numOfPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageClick = (pageNumber) => {
    setCurrentPage(prevPage => pageNumber)
  } //setting which page we are on

  return (
    <div className='pagination'>
      {[...Array(numOfPages)].map((_, i) => (
        <button onClick={() => handlePageClick(i)} className={currentPage === i ? "pg__num active" : 'pg__num'} key={i}>{i + 1}</button>
      ))}
    </div>
  )
}

export default Pagination