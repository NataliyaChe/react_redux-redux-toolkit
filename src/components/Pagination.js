import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../actions/animeListAction';

function Pagination() {
  const totalPages = useSelector(state => state.animes.totalPages)
  const dispatch = useDispatch()
  const changePage = (event) => {
    const currentPage = event.selected+1
    dispatch(setCurrentPage(currentPage))
  }

    return (
      <div className='pagination'>
        <ReactPaginate
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous"
          previousLinkClassName="page-link previous-link"
          nextClassName="page-item next"
          nextLinkClassName="page-link next-link"
          marginPagesDisplayed={2}
          containerClassName="pagination"
          activeClassName="active"
          activeLinkClassName="active-link"
          breakLabel="..."
          nextLabel=">"
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  }
  
  export default Pagination;