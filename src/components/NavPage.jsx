/* eslint-disable react/prop-types */
const NavPage = ({ characters, page, setPage }) => {
  return (
    <nav className="p-2">
      <p>Página {page}</p>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${characters.prev ? '' : 'disabled'}`}>
          <button className="page-link" onClick={() => setPage(page - 1)}>
            Anterior
          </button>
        </li>
        <li className={`page-item ${page === 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => setPage(1)}>
            1
          </button>
        </li>
        <li className={`page-item ${page === 2 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => setPage(2)}>
            2
          </button>
        </li>
        <li className={`page-item ${page >= 3 ? 'active' : ''}`}>
          <button
            className="page-link"
            onClick={() => (page > 3 ? setPage(page) : setPage(3))}
          >
            {page > 3 ? `...${page}` : 3}
          </button>
        </li>
        <li className={`page-item ${characters.next ? '' : 'disabled'}`}>
          <button className="page-link" onClick={() => setPage(page + 1)}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavPage;
